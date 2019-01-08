// pages/recruit/enterprise/enterprise.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:true,
    information: { img: "../../../images/business_back.png", name: "大量KTV", address: "上海市闵行区", label: ["押5结10", "报销路费", "月休两天", "随时进场", "包住", "工作稳定"], info: "上海颖少网络科技有限公司成立于2018年8月，现坐落于 上海市普陀区景源时尚产业园，是首家专注于移动互联网 娱乐应用平台研发、运营夜店平台的互联网企业。", list: [{ job: "歌手", address: "上海市闵行区", img: "../../../images/1.jpg", person: "王大", personjob: "总监", money: "10k-15k" }, { job: "歌手", address: "上海市闵行区", img: "../../../images/1.jpg", person: "王大", personjob: "总监", money: "10k-15k" }, { job: "歌手", address: "上海市闵行区", img: "../../../images/1.jpg", person: "王大", personjob: "总监", money: "10k-15k" }, { job: "歌手", address: "上海市闵行区", img: "../../../images/1.jpg", person: "王大", personjob: "总监", money: "10k-15k" }]},
    reason:false,
    toast:false
  },
  report() {
    this.setData({
      reason: true
    })
  },
  reason() {
    this.setData({
      toast: true
    })
  },
  cancel() {
    this.setData({
      reason: false
    })
  },
  know() {
    this.setData({
      reason: false,
      toast: false
    })
  },
  cut1(){
    this.setData({
      active:false
    })
  },
  cut2() {
    this.setData({
      active: true
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