// pages/main/tree/tree.js
var WaApi = require("../../../common/network/request.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleTrees: [],
    selectId: 0,
    selectIds:[]
  },

  getArticleTrees: function(e) {
    var page = this
    WaApi.getArticlesTree().then(function(result) {
      page.setData({
        articleTrees: result
      })
    }).catch(function(error) {

    })
  },

  clickKinds: function(e) {
    if (this.data.selectIds){
      
    }


    if (e.currentTarget.dataset.a==this.data.selectId){
      this.setData({
        selectId: 0
      })
    }else{
      this.setData({
        selectId: e.currentTarget.dataset.a
      })
    }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getArticleTrees()
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