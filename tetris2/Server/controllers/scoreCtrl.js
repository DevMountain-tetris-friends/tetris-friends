
module.exports = {
  displayScore: async(req, res) => {
    const { user } = req.session;
    if (user) return res.status(200).send(user);
    else return res.sendStatus(401)
  
  },

  AllScores: async(req, res) => {
    const db = req.app.get('db');
  
    const allUserHighscores = await db.get_all_highscores([]);
    return res.status(200).send(allUserHighscores);
  }
 
}