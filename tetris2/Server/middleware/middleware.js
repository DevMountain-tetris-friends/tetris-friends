module.exports = {
    verifyUser: async (req, res, next) => {
        console.log('this is the middlware')
        const { username, id } = req.body
        let postUser = ''
        const db = req.app.get('db')
        db.get_post_by_id(id)
        .then(dbRes => {
            console.log(dbRes)
            postUser = dbRes[0].author_id
        })
        // .then()
        const result = await db.get_player({username})
        const user = result[0].user_id
        // console.log(user + postUser)
        if(user === postUser) {
            next()
        }
        else {
            res.status(409).send('You can not edit other members posts!')
        }
    }
}