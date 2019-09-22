// pages/keep/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabTemplate: 'mine',
    dynamics: [
      {
        id: 1,
        name: '我的故事没编好呢',
        "avatar": '',
        time: '2019/09/21',
        content: '六点钟下班儿，我说的，耶稣也留不住我！！！',
        project: '腹肌激活',
        times: '5',
        comment: '3',
        like: '6',
        encourage: '4'
      },
      {
        id: 2,
        name: '我的故事没编好呢',
        "avatar": '',
        time: '2019/09/21',
        content: '六点钟下班儿，我说的，耶稣也留不住我！！！',
        project: '腹肌激活',
        times: '5',
        comment: '3',
        like: '6',
        encourage: '4'
      },
      {
        id: 3,
        name: '我的故事没编好呢',
        "avatar": '',
        time: '2019/09/21',
        content: '六点钟下班儿，我说的，耶稣也留不住我！！！',
        project: '腹肌激活',
        times: '5',
        comment: '3',
        like: '6',
        encourage: '4'
      },
      {
        id: 4,
        name: '我的故事没编好呢',
        "avatar": '',
        time: '2019/09/21',
        content: '六点钟下班儿，我说的，耶稣也留不住我！！！',
        project: '腹肌激活',
        times: '5',
        comment: '3',
        like: '6',
        encourage: '4'
      },
      {
        id: 5,
        name: '我的故事没编好呢',
        "avatar": '',
        time: '2019/09/21',
        content: '六点钟下班儿，我说的，耶稣也留不住我！！！',
        project: '腹肌激活',
        times: '5',
        comment: '3',
        like: '6',
        encourage: '4'
      },
      {
        id: 6,
        name: '我的故事没编好呢',
        "avatar": '',
        time: '2019/09/21',
        content: '六点钟下班儿，我说的，耶稣也留不住我！！！',
        project: '腹肌激活',
        times: '5',
        comment: '3',
        like: '6',
        encourage: '4'
      },
      {
        id: 7,
        name: '我的故事没编好呢',
        "avatar": '',
        time: '2019/09/21',
        content: '六点钟下班儿，我说的，耶稣也留不住我！！！',
        project: '腹肌激活',
        times: '5',
        comment: '3',
        like: '6',
        encourage: '4'
      },
      {
        id: 8,
        name: '我的故事没编好呢',
        "avatar": '',
        time: '2019/09/21',
        content: '六点钟下班儿，我说的，耶稣也留不住我！！！',
        project: '腹肌激活',
        times: '5',
        comment: '3',
        like: '6',
        encourage: '4'
      },
      {
        id: 9,
        name: '我的故事没编好呢',
        "avatar": '',
        time: '2019/09/21',
        content: '六点钟下班儿，我说的，耶稣也留不住我！！！',
        project: '腹肌激活',
        times: '5',
        comment: '3',
        like: '6',
        encourage: '4'
      },
      {
        id: 10,
        name: '我的故事没编好呢',
        "avatar": '',
        time: '2019/09/21',
        content: '六点钟下班儿，我说的，耶稣也留不住我！！！',
        project: '腹肌激活',
        times: '5',
        comment: '3',
        like: '6',
        encourage: '4'
      }
    ]

  },

  // 选择tabbar
  selectTabbar: function(e) {
    let type = e.currentTarget.dataset.type;
    switch (type) {
      case 'cause':
        wx.setNavigationBarTitle({
          title: '课程',
        })
        this.setData({
          tabTemplate: 'cause'
        })
        break;
      case 'hot':
        wx.setNavigationBarTitle({
          title: 'keep 热门',
        })
        this.setData({
          tabTemplate: 'hot'
        })
        break;
      case 'mine':
        wx.setNavigationBarTitle({
          title: '我的',
        })
        this.setData({
          tabTemplate: 'mine'
        })
        break;
      case 'more':
        wx.setNavigationBarTitle({
          title: '更多',
        })
        this.setData({
          tabTemplate: 'more'
        })
        break;
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    console.log('pages/keep/index/--data==', this.data.dynamics)

    // 设置导航样式
    wx.setNavigationBarTitle({
      title: '课程',
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