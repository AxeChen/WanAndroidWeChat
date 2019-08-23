// 主页API
var url = require("url.js")
const HOST = "https://www.wanandroid.com"

function userLogin(userName, userPwd) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: HOST + url.USER_lOGIN,
      method: "POST",
      data: {
        username: userName,
        password: userPwd
      },
      success: function(res) {
        resolve(res)
      },
      fail: function(error) {
        reject(error)
      }
    })
  })

}