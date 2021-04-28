require("dotenv").config();
const express = require("express");
const app = express();
const player = require("./controllers/playerCtrl");
// const score = require('./controllers/scoreCtrl')
const massive = require("massive");
const session = require("express-session");

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

        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

app.post('/auth/login', player.login)
app.post('/auth/register', player.register)
app.get('/auth/logout', player.logout)
app.get('/auth/getUser', player.userData) 
app.put('/auth/userUpdate', player.userUpdate)

app.get('/auth/scoreboard', score.displayScore)


// app.use(express.static(__dirname + '/../build'))
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build/index.html'))
// })


massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
}).then((dbInstance) => {
  app.set("db", dbInstance);
  app.listen(PORT, () => console.log(`server is up and running on ${PORT}`));
}).catch(err => console.log(err));

massive ({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
})
    .then(dbInstance => {
        app.set('db', dbInstance)
        app.listen(PORT, ()=> console.log(`server is up and running on ${PORT}`))
    .catch(err => console.log(err))

})


