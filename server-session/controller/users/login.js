const { Users } = require('../../models');

module.exports = {
  post: async (req, res) => {
    console.log(req.body)
    const userInfo = await Users.findOne({
      where: { userId: req.body.userId, password: req.body.password },
    });

    // TODO: userInfo 결과 존재 여부에 따라 응답을 구현하세요.
    // 결과가 존재하는 경우 세션 객체에 userId가 저장되어야 합니다.
    if (!userInfo) {
      res.status(404).json({
        data: null,
        message: 'not authorized'
      })
    } else {
      req.session.save(()=>{
        req.session.userId = userInfo.userId
        res.status(201).json({
          data: userInfo,
          message: 'login successful'
        })
      })
      // req.session.userId = userInfo.userId
      // console.log('login', req.session)
      // res.status(201).json({
      //   data: userInfo,
      //   message: 'ok'
      // })
    }
  }
}