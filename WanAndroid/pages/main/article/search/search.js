// pages/main/article/search/search.js
var WaApi = require("../../../../common/network/request.js")
Page({
  /**
   * 页面的初始数据
   */
  data: {
    artcies: [],
    querText: "",
    pageIndex: 0,
    loadComplete:false
  },
  queryArticle: function(e) {
    var page = this
    WaApi.articleQuery(this.data.pageIndex, this.data.querText).then(function(result) {
      if (page.data.pageIndex == 0){
        page.setData({
          artcies: result.datas
        })
        wx.stopPullDownRefresh()
      }else{
        if (result.datas.length == 0){
            page.setData({
              loadComplete:true
            })
        }
        // 加载下一页
        var list = page.data.artcies
        page.setData({
          artcies: list.concat(result.datas)
        })
      }
    
    }).catch(function(error) {

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      querText: options.querText
    })
    this.queryArticle()
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
    console.log("下拉触顶")
    var pages = this.data.pageIndex
    pages = 0
    this.setData({
      pageIndex: pages
    })
    this.queryArticle()
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
    this.queryArticle()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})