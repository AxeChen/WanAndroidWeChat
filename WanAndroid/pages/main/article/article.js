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
    pageIndex:0,
    needShowClear:false,
    queryText:"",
    loadComplete:false
  },
  clearClick:function(e){
    this.setData({
      queryText: '',
      needShowClear:false
    })
  },
  searchArticle:function(e){
    var query = e.detail.value
    //跳转到搜索界面
    wx.navigateTo({
      url: '../../../pages/main/article/search/search?querText='+query,
    })
  },
  searchInput:function(e){
    var query = e.detail.value
    console.log(e.detail.value)
    if (query!=""){
      this.setData({
        needShowClear:true,
        queryText: query
      })
    }else{
      this.setData({
        needShowClear: false
      })
    }
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
      
      if(page.data.pageIndex==0){
        page.setData({
          articleListBean: res,
          artcies: res.datas
        })
        wx.stopPullDownRefresh()
      }else{
        // 加载下一页
        if (res.datas.length == 0) {
          page.setData({
            loadComplete:true
          })
        }
        var list = page.data.artcies
        page.setData({
          articleListBean: res,
          artcies: list.concat(res.datas)
        })
      
      }
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
    console.log("下拉触顶")
    var pages = this.data.pageIndex
    pages = 0
    this.setData({
      pageIndex: pages
    })
    this.getArticles()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log("上拉触底")
    var pages = this.data.pageIndex
    pages = pages+1
    this.setData({
      pageIndex: pages
    })
    this.getArticles()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})