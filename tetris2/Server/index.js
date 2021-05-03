require("dotenv").config();
const express = require("express");
const app = express();
const player = require("./controllers/playerCtrl");
const score = require('./controllers/scoreCtrl')
const community = require('./controllers/communityCtrl')
const massive = require("massive");
const session = require("express-session");
const middleware = require('./middleware/middleware')

const { SESSION_SECRET, CONNECTION_STRING, PORT } = process.env;

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
app.delete("/auth/deleteUser", player.deleteUser)

app.get("/api/post", community.allPosts)
app.post("/api/post", community.addPost)
app.put("/api/post",middleware.verifyUser, community.editPost)
app.delete("/api/post",middleware.verifyUser, community.deletePost)

// app.get('/auth/scoreboard', score.displayScore)

// app.use(express.static(__dirname + '/../build'))
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build/index.html'))
// })

massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
  })
    .then(dbInstance => {
      app.set("db", dbInstance);
      app.listen(PORT, () => {
        console.log(`db is running and server is listening on ${PORT}.`)
      });
    })
    .catch(err => console.log(err));


