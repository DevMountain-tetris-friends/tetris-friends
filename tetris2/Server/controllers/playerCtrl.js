const bcrypt = require('bcryptjs')

module.exports = {
  login: async(req, res) => {
    
    const {username, password} = req.body; 
    const db = req.app.get('db');
    const result = await db.get_player({username});
    const existingPlayer = result[0];
    if (!existingPlayer) {
      return res.status(409).send('Username does not exist');
    }
    const authenticated = bcrypt.compareSync(password, existingPlayer.password)
    console.log('posted');
    if (!authenticated) {
      return res.status(401).send('Password is incorrect')
    }
    delete existingPlayer.password
    req.session.player = existingPlayer
    return res.status(200).send(req.session.player);
    
  },
  register: async(req, res) => {
    const {username, password, first_name, last_name, email} = req.body;
    const db = req.app.get('db');
    const result = await db.get_player({username});
    const existingPlayer = result[0];
    if (existingPlayer){
      return res.status(409).send('Username is taken');
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const registeredPlayer = await db.register_player({username, first_name, last_name, email, hash})
    const player = registeredPlayer[0]
    delete player.password
    req.session.player = player
    return res.status(201).send(req.session.player)
  },
  logout: async(req, res) =>  {
    req.session.destroy();
    return res.sendStatus(200)
  },
  userData: async(req, res) => {
    const { user } = req.session;
    if (user) return res.status(200).send(user);
    else return res.sendStatus(401)
  },
  userUpdate: async(req, res) => {
    const {user} = req.session; 
    const {username, first_name, last_name, email} = req.body;
    console.log(req.body) 
    const db = req.app.get('db');
    const [updatedPlayer] =  await db.update_Player({username, first_name, last_name, email, userId:user.user_id})
    // console.log(updatedUser)
    delete updatedPlayer.password
    req.session.user = updatedPlayer
    return res.status(200).send(req.session.user)
  }
}