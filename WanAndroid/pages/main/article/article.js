// pages/main/article/article.js
var WaApi = require("../../../common/network/request.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    artcileBanner: [],
    artcies:[],
    articleListBean:{},
    pageIndex:0
  },
  getBanner: function(e) {
    var page = this
    WaApi.getBanner().then(function(result) {
      // console.log(result)
      page.setData({
        artcileBanner:result
      })

    }).catch(function(error) {
      console.log(error)
    })
  },
  getArticles:function(e){
    var page = this
    WaApi.getArtciles(this.data.pageIndex).then(function(res){
      console.log(res)
      page.setData({
        articleListBean: res,
        artcies: res.datas
      })
    }).catch(function(error){
      console.log(error)
    })
  },
  itemClick:function(e){
    wx.navigateTo({
      url: '../../../pages/web/webview?link=' + e.currentTarget.dataset.s + "&title=" + e.currentTarget.dataset.a
    })
  },
  swiperItemClick:function(e){
    wx.navigateTo({
      url: '../../../pages/web/webview?link=' + e.currentTarget.dataset.s + "&title=" + e.currentTarget.dataset.a
    })
  },
  clearClick:function(e){
    
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
    this.getBanner()
    this.getArticles()
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