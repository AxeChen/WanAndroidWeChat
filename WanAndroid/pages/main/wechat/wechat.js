// pages/main/wechat/wechat.js
var WaApi = require("../../../common/network/request.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    wechatItem: [],
    selectId:0,
    artcies:[],
    scrollWidth:0,
    loadComplete:false,
    pageIndex:0
  },
  getWeChatItems: function(e) {
    var page = this
    WaApi.getWeChatItems().then(function(result) {
      page.setData({
        wechatItem: result,
        selectId: result[0].id
      })
      page.getWetChatArticles()
    }).catch(function(error) {

    })
    
  },
  nameClick: function(e) {
    this.setData({
      selectId:e.currentTarget.dataset.a,
      pageIndex:0
    })
    wx.pageScrollTo({
      scrollTop: 0,
    })
    this.getWetChatArticles()
  },
  itemClick:function(e){
    wx.navigateTo({
      url: '../../../pages/web/webview?link=' + e.currentTarget.dataset.s + "&title=" + e.currentTarget.dataset.a
    })
  },
  getWetChatArticles: function(e) {
    var page = this
    WaApi.getWetChatArticles(this.data.selectId, this.data.pageIndex).then(function(result){
      if(page.data.pageIndex == 0){
        page.setData({
          artcies: result.datas
        })
      }else{
        if (result.datas.length==0){
            page.setData({
              loadComplete:true
            })
        }
        var newList = page.data.artcies
        page.setData({
          artcies: newList.concat(result.datas)
        })
      }
     
    }).catch(function(error){

    })
  },
  clickToAllWeChat:function(e){
    wx.navigateTo({
      url: '../../../pages/main/allwechat/allwechat',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getWeChatItems()
    var w = wx.getSystemInfoSync().windowWidth-50
    this.setData({
      scrollWidth:w
    })
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
    console.log("上拉触底")
    var pages = this.data.pageIndex
    pages = pages + 1
    this.setData({
      pageIndex: pages
    })
    this.getWetChatArticles()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})