// pages/recruit/preview/preview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    reason:false,
    toast:false,
    information: { img: "../../../images/1.jpg", name: "小奶狗", id: "567888", type: "KTV", info:"是的承诺conks出你的手刺的你从来都是你从来都是你从 来说你打算开车呢你从来都是你从来昵称快乐昵称了你从 来说昵称 ",address:"上海市普陀区",label:["工作稳定","包住","随时进场","月休两天"]}
  },
  report(){
    this.setData({
      reason:true
    })
  },
  reason(){
    this.setData({
      toast: true
    })
  },
  cancel(){
    this.setData({
      reason: false
    })
  },
  know(){
    this.setData({
      reason: false,
      toast:false
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