// pages/recruit/perfect/perfect.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    }, {
      id: 5,
      name: "报销路费",
      select: 0
    }, {
      id: 6,
      name: "压五结十",
      select: 0
    }],
    typelist: [{
      id: 1,
      name: "KTV",
      select: 1
    }, {
      id: 2,
      name: "酒吧",
      select: 0
    }, {
      id: 3,
      name: "剧场",
      select: 0
    }, {
      id: 4,
      name: "音乐/餐吧",
      select: 0
    }, {
      id: 5,
      name: "其他",
      select: 0
    }],
    selectlabel: ["工作稳定"],
    name:"",
    tel:"",
    address:"",
    introduction:""
  },
  resume(){
    wx.request({
      url: app.globalData.url +'/yingzhan/enterprise/update.do',
      method:"POST",
      data:{
        // id:this.data.id,
        phone: this.data.tel,
        info: this.data.introduction
      },
      success:res=>{
        console.log(res)
      }
    })
  },
  selecttype(e) {
    var res = this.data.typelist;
    for (var k in res) {
      if (res[k].id == e.currentTarget.dataset.id) {
        for (var key in res) {
          res[key].select = 0
        };
        res[k].select = 1;
      }
    }
    this.setData({
      typelist: res,
    })
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
              label = label.filter(v => {
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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