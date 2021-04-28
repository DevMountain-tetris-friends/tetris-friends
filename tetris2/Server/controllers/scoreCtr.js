
module.exports = {
  displayScore: async(req, res) => {
    const { user } = req.session;
    if (user) return res.status(200).send(user);
    else return res.sendStatus(401)
  }
}