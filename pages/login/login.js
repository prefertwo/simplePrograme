// pages/login/login.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: '',
    x: 0, // 滑块儿距离
    xD: 0, // 滑块儿移动距离

  },


  // 滑块儿移动
  handleMoveChange: function(e) {
    // console.log(e.detail.x) // 最大270
    this.setData({
      xD: e.detail.x
    })
  },

  // 滑块儿移动结束
  moveEnd: function() {
    let xd = this.data.xD;
    console.log('xd==', xd)
    if(xd > 250) {
      this.setData({
        x: 270,
        xD: 270
      })
      wx.showToast({
        title: '验证成功',
        image: '/static/icons/face.png'
      })
    } else {
      this.setData({
        x: 0,
        xD: 0
      })
      xd = 0
    }
    console.log('xd==', xd)
    
  },

  // 登录
  handleLogin: function(e) {
    console.log('login=', e.detail.value)
    app.globalData.userInfo = e.detail.value;
    wx.setStorage({
      key: 'userinfo',
      data: JSON.stringify(e.detail.value),
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '登录',
    })
    console.log('app.globalData.userInfo==', app.globalData.userInfo)
    wx.getStorage({
      key: 'userinfo',
      success: (res) => {
        let userInfo = JSON.parse(res.data);
        console.log('res==', userInfo)

        this.setData({
          username: userInfo.username,
          password: userInfo.password
        })
      },
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