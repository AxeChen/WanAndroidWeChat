// pages/main/allwechat/allwechat.js
var WaApi = require("../../../common/network/request.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wechats: []
  },
  getWeChatList: function(e) {
    var page = this
    WaApi.getWeChatItems().then(function(result) {
      page.setData({
        wechats: result
      })
    }).catch(function(error) {

    })
  },
  itemClick: function(e) {
    wx.navigateTo({
      url: '../../../pages/main/wechatarticles/wechatarticles?selectId=' + e.currentTarget.dataset.a
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getWeChatList()
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