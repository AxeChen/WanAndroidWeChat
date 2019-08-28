// pages/main/wechat/wechat.js
var WaApi = require("../../../common/network/request.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    wechatItem: [],
    selectId:0,
    artcies:[]
  },
  getWeChatItems: function(e) {
    var page = this
    WaApi.getWeChatItems().then(function(result) {
      page.setData({
        wechatItem: result
      })
    }).catch(function(error) {

    })
  },
  nameClick: function(e) {
    this.setData({
      selectId:e.currentTarget.dataset.a
    })
    
    this.getWetChatArticles()
  },
  getWetChatArticles: function(e) {
    var page = this
    WaApi.getWetChatArticles(this.data.selectId, 1).then(function(result){
      page.setData({
        artcies:result.datas
      })
      console.log(this.data.artcies)
    }).catch(function(error){

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getWeChatItems()
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