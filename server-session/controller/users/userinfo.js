const {Users} = require('../../models');

module.exports = {
  get: async (req, res) => {

    // TODO: 세션 객체에 담긴 값의 존재 여부에 따라 응답을 구현하세요.
    // HINT: 세션 객체에 담긴 정보가 궁금하다면 req.session을 콘솔로 출력해보세요

    if (!req.session.userId) {
      res.status(400).json({
        data: null,
        message: 'not authorized'
      })
    } else {
      // TODO: 데이터베이스에서 로그인한 사용자의 정보를 조회한 후 응답합니다.
      const userInfo = await Users.findOne({
        where: {userId: req.session.userId}
      }).catch(e=> {
        console.log(e)
        res.status(500).json({
          data: null,
          message: 'cannot sign out...'
        })
      })
      res.status(201).json({
        data: userInfo,
        message: 'userInfo is successfully shown'
      })
    }
  }
}