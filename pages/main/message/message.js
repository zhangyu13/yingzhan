// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // appid:'',
    // secret:'',
    // js_code:''
    x:0,
    y:0,
    message: [
      { "id": 1, "name": "小奶狗", right: 0 ,business:"颖少科技",job:"总监",content:"最近怎么样",time:"1月8日",is_collect:1}, 
      { "id": 2, "name": "小狗", right: 0 ,business: "颖少科技", job: "总监", content: "最近怎么样", time: "1月8日", is_collect: 0}, 
      { "id": 3, "name": "fdbdfdb", right: 0, business: "颖少科技", job: "总监", content: "最近怎么样", time: "1月8日", is_collect: 1}, 
      { "id": 3, "name": "fdbdfdb", right: 0, business: "颖少科技", job: "总监", content: "最近怎么样", time: "1月8日", is_collect: 1}, 
      { "id": 3, "name": "fdbdfdb", right: 0, business: "颖少科技", job: "总监", content: "最近怎么样", time: "1月8日", is_collect: 0},
      { "id": 3, "name": "fdbdfdb", right: 0 ,business: "颖少科技", job: "总监", content: "最近怎么样", time: "1月8日", is_collect: 1},
      { "id": 3, "name": "fdbdfdb", right: 0, business: "颖少科技", job: "总监", content: "最近怎么样", time: "1月8日", is_collect: 0},
      { "id": 3, "name": "fdbdfdb", right: 0, business: "颖少科技", job: "总监", content: "最近怎么样", time: "1月8日", is_collect: 0}]
  },
  start: function (e) {
    this.setData({
      x: e.touches[0].pageX,
      y: e.touches[0].pageY
    });
  },
  move: function (e) {
    if (e.touches[0].pageX < this.data.x){
      var res=this.data.message;
      console.log(res)
      for(var k in res){
        if (k == e.currentTarget.dataset.id-1){
          res[k].right="140rpx"
        }
      }
      console.log(res)
      this.setData({
        message : res
      })
    }else if (e.touches[0].pageX > this.data.x) {
      var res = this.data.message;
      console.log(res)
      for (var k in res) {
        if (k == e.currentTarget.dataset.id - 1) {
          res[k].right = 0
        }
      }
      console.log(res)
      this.setData({
        message: res
      })
    } 
  },
  del(e){},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // const accountInfo = wx.getAccountInfoSync();
    // console.log(accountInfo);
    // this.setData({
    //   appid: accountInfo.miniProgram.appId
    // });
    // code2Session({
    //   url:'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code',
    //   appid:'',
    //   secret:'',
    //   js_code:'',
    //   grant_type:'authorization_code'
    // })
    // wx.login({
    //   success: function (res) {
    //     this.setData({
    //       js_code:res.code
    //     })
    //     if (res.code) {
    //       // 发起网络请求
    //       wx.request({
    //         url: 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code',
    //         data: {
    //           code: res.code
    //         },
    //         success(res) {
    //           console.log(res)
    //         }
    //       })
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    // });

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