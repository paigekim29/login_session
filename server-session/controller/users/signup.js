const {Users} = require('../../models');

module.exports = {
  post: async (req, res) => {
    const {userId, email, password, mobile} = req.body
    Users.findOrCreate({
      where: {
        userId
      },
      defaults: {
        email,
        password,
        mobile
      } // where 문에 email, userId 둘 다 넣어도 제일 앞에 꺼만 처리된다... 왜?
    }).then(([result, created]) => {
      if (!created) {
        res.status(400).json({
          data: null,
          message: 'duplicate id exists'
        })
      } else {
        res.status(201).json({
          data: result,
          message: 'successfully signed up!'
        })
      }
    }).catch(e=>{
      console.log(e)
      res.status(500).json({
        data: null,
        message: 'please fill up all of the requirements'
      })
    })
  }
}