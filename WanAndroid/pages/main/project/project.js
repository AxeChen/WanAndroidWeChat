Page({

  /**
   * 页面的初始数据
   */
  data: {
    test: "ok",
    newlist: [],
    num: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTest()
  },
  getTest() {
    let that = this
    wx.request({
      url: "https://wanandroid.com/article/listproject/0/json",
      success: (data => {
        that.setData({
          newlist: data.data.data.datas
        })
        wx.stopPullDownRefresh();
      })
    })
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
    this.getTest()
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let that = this
    var numonfun = that.data.num + 1
    wx.request({
      url: "https://wanandroid.com/article/listproject/" + numonfun + "/json",
      success: (data => {
        var newarr = data.data.data.datas
        var list = that.data.newlist
        that.setData({
          newlist: list.concat(newarr),
          num: numonfun
        })
      })
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  primary: function () {
    this.setData({
      test: "new"
    })
  }
})