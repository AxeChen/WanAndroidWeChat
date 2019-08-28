// 主页API
var url = require("url.js")
const HOST = "https://www.wanandroid.com"

function userLogin(userName, userPwd) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: HOST + "/user/login",
      method: "POST",
      data: {
        username: userName,
        password: userPwd
      },
      success: function(res) {
        console.log(res)
        resolve(res)
      },
      fail: function(error) {
        console.log(error)
        reject(error)
      }
    })
  })

}

/**
 * GET请求
 */
function get(url) {

  console.log("------------get请求-------------")
  console.log("|请求url" + url)
  console.log("--------------------------------")

  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: 'GET',
      success: function(res) {
        if (res.statusCode == 200) {
          if (res.data.errorCode == 0) {
            console.log(res.data.data)
            resolve(res.data.data)

          } else {
            reject("error")
          }
        } else {
          reject("error")
        }
      },
      fail: function(error) {
        reject(error)
      }
    })
  })
}

/**
 * POST请求
 */
function post(url, data) {
  console.log("------------post请求-------------")
  console.log("|请求url" + url)
  console.log("--------------------------------")

  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: 'POST',
      data: data,
      success: function(res) {
        if (res.errorCode == 0) {
          resolve(res.data)
        } else {
          reject("error")
        }
      },
      fail: function(error) {
        reject(error)
      }
    })
  })
}

/**
 * 获取首页banner
 */
function getBanner() {
  return new Promise((resolve, reject) => {
    get(HOST + "/banner/json").then(function(result) {
      resolve(result)
    }).catch(function(error) {
      reject(error)
    })
  })
}

/**
 * 获取文章列表信息
 */
function getArtciles(pageIndex) {
  return new Promise((resolve, reject) => {
    get(HOST + "/article/list/" + pageIndex + "/json").then(function(result) {
      resolve(result)
    }).catch(function(error) {
      reject(error)
    })
  })
}

/**
 * 获取公众号列表
 */
function getWeChatItems() {
  return new Promise((resolve, reject) => {
    get(HOST + "/wxarticle/chapters/json").then(function(result) {
      resolve(result)
    }).catch(function(error) {
      reject(error)
    })
  })
}

/**
 * 获取公众号文章列表信息
 */
function getWetChatArticles(id, pageIndex) {
  return new Promise((resolve, reject) => {
    get(HOST + "/wxarticle/list/" + id + "/" + pageIndex + "/json").then(function(result) {
      resolve(result)
    }).catch(function(error) {
      reject(error)
    })
  })
}

module.exports.userLogin = userLogin;
module.exports.getBanner = getBanner;
module.exports.getArtciles = getArtciles;
module.exports.getWeChatItems = getWeChatItems;
module.exports.getWetChatArticles = getWetChatArticles;