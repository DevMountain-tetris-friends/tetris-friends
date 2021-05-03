require("dotenv").config();
const express = require("express");
// const app = express();
const player = require("./controllers/playerCtrl");
const score = require('./controllers/scoreCtrl')
const community = require('./controllers/communityCtrl')
const massive = require("massive");
const session = require("express-session");
const middleware = require('./middleware/middleware')
const socket = require('socket.io')

const { SESSION_SECRET, CONNECTION_STRING, PORT } = process.env;


const app = express(),
  io = socket(
    app.listen(PORT, () =>
      console.log(`Houston we have lift off on port ${PORT}`)
    )
  );


  io.on('connection', socket => {
    console.log('user connected')
    // socket.on('message sent', data => {
    //   console.log(data)
    //   io.emit('message dispatched', data.message)
    // })

    socket.on('join room', data => {
      console.log('room joined', data.room)
      socket.join(data.room)
      io.to(data.room).emit('room joined')
    })
    socket.on('message sent', data => {
      io.to(data.room).emit('message dispatched', data.message)
    })

    socket.on('disconnect', () => {
      console.log('user disconnected')
    })

  })



  // socket.on('join room', data => {
  //   console.log('room joined', data.room)
  //   socket.join(data.room)
  //   io.to(data.room).emit('room joined')
  // })
  // socket.on('message sent', data => {
  //   io.to(data.room).emit('message dispatched', data.message)
  // })

   




app.use(express.json());

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {

      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

app.post("/auth/login", player.login);
app.post("/auth/register", player.register);
app.get("/auth/logout", player.logout);
app.get("/auth/getUser", player.userData);
app.put("/auth/userUpdate", player.userUpdate);

app.get("/api/post", community.allPosts)
app.post("/api/post", community.addPost)
app.put("/api/post",middleware.verifyUser, community.editPost)
app.delete("/api/post",middleware.verifyUser, community.deletePost)

// app.get('/auth/scoreboard', score.displayScore)

// app.use(express.static(__dirname + '/../build'))
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build/index.html'))
// })



// massive(MASSIVE).then(db => {
//   app.set("db", db);
//   console.log("massive happened");
// });

massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
  })
    .then(dbInstance => {
      app.set("db", dbInstance);
    })
    .catch(err => console.log(err));


  


