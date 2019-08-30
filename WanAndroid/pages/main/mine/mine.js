// pages/main/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  clickDown:function(e){
    wx.navigateTo({
      url: '../../../pages/web/webview?link=https://www.coolapk.com/apk/com.mg.axechen.wanandroid&title=酷安下载'
    })
  },
  longClickDown:function(e){
    console.log(e)
    wx.setClipboardData({
      data: 'https://www.coolapk.com/apk/com.mg.axechen.wanandroid',
      success:function(res){
        wx.showToast({
          title: '复制成功'
        })
      }
    })
  },
  clickSourse:function(e){
    wx.navigateTo({
      url: '../../../pages/web/webview?link=https://github.com/AxeChen/WanAndroidWeChat&title=源码地址'
    })
  },
  clickLongSourse:function(e){
    console.log(e)
    wx.setClipboardData({
      data: 'https://github.com/AxeChen/WanAndroidWeChat',
      success: function (res) {
        wx.showToast({
          title: '复制成功'
        })
      }
    })
  },
  clickDevelopes:function(e){
    wx.navigateTo({
      url: '../../../pages/main/mine/developer/developer',
    })
  },
  wanAnLink:function(e){
    wx.navigateTo({
      url: '../../../pages/web/webview?link=https://www.wanandroid.com/blog/show/2&title=玩AndroidApi'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})