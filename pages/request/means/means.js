// pages/request/means/means.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recruit: {
      img: "../../../images/1.jpg",
      name: "大量KTV",
      id: "5798979",
      label: "酒吧",
      clabel: ["工作稳定", "包住"],
      job: "灯光师",
      money: "10k-15k",
      request: "四川泸州 招 Dmc一枚 实力派打UP数码都可以 价位能力 报价 B组4名 底薪8 小费400对半 点舞 200/趴 歌手500 路费天上一半地下全报 住宿单间 该有都有 团队和谐 电话微信同步：13027092017",
      address: "上海市普陀区XXXX",
      time: "一天前",
      is_business: 1
    },
    info_url: ""
  },
  dj() {
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
      success(res) {
        console.log(res.tempFilePath)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (this.data.recruit.is_business == 0) {
      this.setData(({
        info_url: "/pages/request/preview/preview"
      }))
    } else {
      this.setData(({
        info_url: "/pages/recruit/preview/preview"
      }))
    }
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