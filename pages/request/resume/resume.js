// pages/request/resume/resume.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headimg:"",
    array: ['5k-10k', '10k-15k', '15k-20k', '20k-50k'],
    objectArray: [
      {
        id: 0,
        name: '5k-10k'
      },
      {
        id: 1,
        name: '10k-15k'
      },
      {
        id: 2,
        name: '15k-20k'
      },
      {
        id: 3,
        name: '20k-50k'
      }
    ],
    money:"",
    status:"",
    province:"",
    city:"",
    area:"",
    region:[],
    customItem: '全部',
    img:[],
  },
  formSubmit(e){
    console.log(e)
  },
  bindRegionChange: function (e) {
    this.setData({
      province: e.detail.value[0],
      city: e.detail.value[1],
      area: e.detail.value[2]
    })
    console.log(this.data.province)
  },
  bindPickerChange: function (e) {
    var res = this.data.objectArray;
    for (var k in res){
      if (e.detail.value == res[k].id)
        this.setData({
          money: res[k].name
        })
    }
    console.log(this.data.money)
  },
  status(){
    var that=this;
    wx.showActionSheet({
      itemList: ['离职-随时到岗', '在职-考虑机会'],
      success: function (res) {
        if (res.tapIndex ==0)
          that.setData({
            status: '离职 - 随时到岗'
          })
          else{
          that.setData({
            status: '在职-考虑机会'
          })
          }
          console.log(that.data.status)
      }
    })
  },
  chooseImg(){
    var that=this;
    wx.chooseImage({
      success: function(res) {
        console.log(res.tempFilePaths);
        that.setData({
          img: that.data.img.push(res.tempFilePaths)
        })
      },
    })
  },
  chooseVideo() {
    wx.chooseVideo({
      success: function (res) { },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: app.globalData.url + '/yingzhan/userinfo/findByUid.do',
      method: "POST",
      data: {
        uid: wx.getStorageSync('uid')
      },
      success: res => {
        console.log(res.data.result);
        this.setData({
          headimg:res.data.result.icon
        })
      }
    })
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