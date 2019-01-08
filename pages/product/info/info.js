// pages/product/info.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    frame:false,
    num:1,
    wechat:false,
    list:""
  },
  wechat(){
    this.setData({
      wechat: true
    })
  },
  translate(){
    this.setData({
      frame:true
    })
  },
  add(){
    var changeNum=this.data.num+1;
    this.setData({
      num:changeNum
    })
  },
  reduce() {
    var changeNum = this.data.num - 1;
    if(changeNum==0){
      this.setData({
        frame: false
      })
      return;
    }
    this.setData({
      num: changeNum
    })
  },
  close(){
    this.setData({
      frame: false,
      wechat:false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: app.globalData.url + '/yingzhan/goods/findById.do',
      method:"POST",
      data:{"id":options.id},
      success: res => {
        this.setData({
          list:res.data.result
        })
      }
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