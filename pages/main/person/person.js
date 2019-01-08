// pages/person/person.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: { image: "../../../images/person_pic.png", vipimg: "../../../images/person_vip.png", backimg:"../../../images/home_top.png",username:"小奶狗",id:"435834583",clabel:["爱浪漫","工作狂","敏感"]}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: app.globalData.url+'/yingzhan/userinfo/findByUid.do',
      method:"POST",
      data:{
        uid:wx.getStorageSync('uid')
      },
      success:res=>{
        console.log(res.data.result);
        this.setData({
          userInfo: res.data.result
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