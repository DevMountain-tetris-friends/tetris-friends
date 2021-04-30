

module.exports = {
    allPosts: (req, res) => {
        const db = req.app.get('db')
        db.get_all_posts()
        .then(dbRes => {
            res.status(200).send(dbRes)
        })
        .catch(e => console.log(e))
    },
    addPost: async (req, res) => {
       
      const { title, content, author_id } = req.body;
      
    //   const {author_id} = req.session.user;
     
      const db = req.app.get('db')
     
      const date_created = new Date
    
      if(!author_id){
        return res.sendStatus(403)
      }
      const post = await db.add_post( title, content, author_id, date_created)
      return res.status(200).send(post)
    },
    editPost: async (req, res) => {
        console.log('this is the contoller')
        const { id, title, content} = req.body
        const db = req.app.get('db')
        db.edit_post( title, content, id)
        .then(dbRes => {
            res.status(200).send(dbRes)
        })
        .catch(e => console.log(e))
    },
    deletePost: (req, res) => {
        const {id} = req.body
        console.log(id)
        const db = req.app.get('db')
        db.delete_post(id)
        .then(() => {
            res.sendStatus(200)
        })
    }
}