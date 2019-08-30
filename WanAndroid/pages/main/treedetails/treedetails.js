// pages/main/treedetails/treedetails.js
var WaApi = require("../../../common/network/request.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cid: 0,
    pageIndex: 0,
    articles:[]
  },

  getTreeArticle: function(e) {
    var page = this
    WaApi.getTreeArticles(this.data.pageIndex, this.data.cid).then(function(result) {
      page.setData({
        articles:result.datas
      })
    }).catch(function(error) {

    })
  },
  itemClick:function(e){
    wx.navigateTo({
      url: '../../../pages/web/webview?link=' + e.currentTarget.dataset.s + "&title=" + e.currentTarget.dataset.a
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      cid: options.cid
    })
    this.getTreeArticle()
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