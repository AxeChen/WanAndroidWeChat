// pages/login/login.js
var loginApi = require("../../common/network/request.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    userpwd: ""
  },
  goRegister:function(e){
    wx.navigateTo({
      url: '../../pages/register/register',
    })
  },
  getUserName: function(e) {
    this.setData({
      username: e.detail.value
    })

  },
  getUserPwd: function(e) {
    this.setData({
      userpwd : e.detail.value
    })
  },
  userLogin: function(e) {
    console.log("用户名：" + this.data.username + "   密码：" + this.data.userpwd)
    loginApi.userLogin(this.data.username,this.data.userpwd).then(function(result){
      console.log(result)
    }).catch(function(error){

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})