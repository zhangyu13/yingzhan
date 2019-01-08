// pages/request/resume/resume.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headimg: "",
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部',
    cut: 1,
    taglist: [{
      id: 1,
      name: "工作稳定",
      select: 1
    }, {
      id: 2,
      name: "包住",
      select: 0
    }, {
      id: 3,
      name: "随时进场",
      select: 0
    }, {
      id: 4,
      name: "月休两天",
      select: 0
    }],
    selectlabel: ["工作稳定"],
    selectclabel: ["等到你"]
  },
  select(e) {
    var res = this.data.taglist;
    var label = this.data.selectlabel;
    for (var k in res) {
      if (res[e.currentTarget.dataset.id - 1].select == 0) {
        if (label.length < 2) {
          if (res[k].id == e.currentTarget.dataset.id) {
            res[k].select = 1;
            label[label.length] = res[k].name
          }
        } else {
          return;
        }
      } else {
        if (res[k].id == e.currentTarget.dataset.id) {
          for (var key in label) {
            if (res[k].name == label[key]) {
              label=label.filter(v => {
                return v != label[key]
              })
            }
          };
          res[k].select = 0;
        }
      }
    }
    console.log(label)
    this.setData({
      taglist: res,
      selectlabel: label
    })
  },
  bindRegionChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  cut() {
    if (this.data.cut == 0) {
      this.setData({
        cut: 1
      })
    } else {
      this.setData({
        cut: 0
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    // wx.request({
    //   url: app.globalData.url + '/yingzhan/userinfo/findByUid.do',
    //   method: "POST",
    //   data: {
    //     uid: wx.getStorageSync('uid')
    //   },
    //   success: res => {
    //     console.log(res.data.result);
    //     this.setData({
    //       headimg: res.data.result.icon
    //     })
    //   }
    // })
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