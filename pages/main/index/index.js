//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    banner: ["../../../images/home_top.png", "../../../images/home_top.png","../../../images/home_top.png"],
    recruit:"",
    person:""
  },
  //事件处理函数
  onLoad: function (options) {
    // console.log(options.loginIdType)
    if(options.loginIdType == 0){
      this.setData({
        recruit: "/pages/recruit/personal/personal",
        person: "/pages/main/person/person"
      })
    }else{
      this.setData({
        recruit: "/pages/recruit/business/business",
        person: "/pages/main/personB/personB"
      })
    };
    var userInfo=wx.getStorageSync('userinfo');
    wx.request({
      url: app.globalData.url +'/yingzhan/user/register.do',
      method:"POST",
      data:{
        channel:1,
        wxid:"abcd",
        city:userInfo.city,
        province: userInfo.province,
        country: userInfo.country,
        headimgurl:userInfo.avatarUrl
      },
      success:res=>{
        wx.setStorageSync('uid', res.data.result.id)
      }
    })
    
  }
})
