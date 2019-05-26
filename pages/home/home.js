// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    deviceHeight: '',
    distance: '42.195',
    timeHour: '',
    timeMinute: '',
    timeSecond: '',
    speedMinute: '',
    speedSecond: '',

    isShow: false,

    items: [
      {
        id: 1,
        value: '半马',
        name: 'half',
        checked: false
      },
      {
        id: 2,
        value: '全马',
        name: 'all',
        checked: true
      },
      {
        id: 3,
        value: '十公里',
        name: 'ten',
        checked: false
      },
      {
        id: 4,
        value: '百公里',
        name: 'hundred',
        checked: false
      }


    ]

  },

  // inputValueChange: function() {},
  inputDistanch: function(e) {
    this.setData({
      distance: e.detail.value
    })
  },
  inputTimeHour: function (e) {
    this.setData({
      timeHour: e.detail.value
    })
  },
  inputTimeMinute: function (e) {
    this.setData({
      timeMinute: e.detail.value
    })
  },
  inputTimeSecond: function (e) {
    this.setData({
      timeSecond: e.detail.value
    })
  },
  inputSpeedMinute: function (e) {
    this.setData({
      speedMinute: e.detail.value
    })
  },
  inputSpeedSecond: function (e) {
    this.setData({
      speedSecond: e.detail.value
    })
  },

  caculate: function() {
    let data = this.data;
    // console.log('data==', data);
    // 计算配速
    if(data.distance && data.timeHour && data.timeMinute && data.timeSecond) {
      // 算配速
      // console.log('算配速');
      let totalDis = data.distance; // 单位 km
      let totalTime = parseInt(60 * 60 * data.timeHour) + parseInt(60 * data.timeMinute) + parseInt(data.timeSecond); // 单位 s
      let speed = totalTime / totalDis; // s/km == 秒/公里
      let speedMin = Math.floor(speed / 60).toString(); // 分钟
      let speedSec = parseInt(speed % 60).toString();

      // console.log('totalTime==', totalTime);
      // console.log('totalDis==', totalDis);
      // console.log('speed==', speed);

      this.setData({
        speedMinute: speedMin ,
        speedSecond: speedSec
      })
      
      return ;
    } else if(data.distance && data.speedMinute && data.speedSecond) {
      // 算时间
      console.log('算时间');
      let totalDis = data.distance;
      let speed = parseInt(60 * data.speedMinute) + parseInt(data.speedSecond);
      let totalTime = totalDis * speed;
      console.log('总距离==', totalDis);
      console.log('速度==', speed);
      console.log('总时间==', totalTime);
      let hour = Math.floor(totalTime / 3600).toString();
      let minute = Math.floor((totalTime % 3600) / 60).toString();
      let second = parseInt((totalTime % 3600) % 60).toString();

      this.setData({
        timeHour: hour,
        timeMinute: minute,
        timeSecond: second
      });

      return;
    } else if (data.timeHour && data.timeMinute && data.timeSecond && data.speedMinute && data.speedSecond) {
      // 算距离
      console.log('算距离');
      let totalTime = parseInt(60*60*data.timeHour) + parseInt(60*data.timeMinute) + parseInt(data.timeSecond);
      let speed = parseInt(60*data.speedMinute) + parseInt(data.speedSecond);
      let distance = (totalTime / speed).toString();
      let dis = new Number(distance);
      let disA = dis.toFixed(2); // 保留两位小数，必须是一个number对象

      this.setData({
        distance: disA
      })
      return;
    } else {
      wx.showToast({
        title: '参数不全，无法计算',
        icon: 'none'
      })
    }
  },
  reset: function() {
    this.setData({
      distance: '',
      timeHour: '',
      timeMinute: '',
      timeSecond: '',
      speedMinute: '',
      speedSecond: ''
    })
  },
  showInfo() {
    this.setData({
      isShow: true
    })
  },
  hideMask() {
    this.setData({
      isShow: false
    })
  },
  radioChange(e) {
    console.log(e);
    let value = e.detail.value;

    switch (value) {
      case 'half':
        this.setData({
          distance: '21.0975'
        })
        break;
      case 'all':
        this.setData({
          distance: '42.195'
        })
        break;
      case 'ten':
        this.setData({
          distance: '10.0'
        })
        break;
      case 'hundred':
        this.setData({
          distance: '100.0'
        })
        break;
      default:
        break;

    }
      
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _that = this;
    wx.getSystemInfo({
      success: function(res) {
        // console.log('res==', res);
        _that.setData({
          deviceHeight: res.windowHeight
        })
      },
    });

    let number = 23.87658;

    let aaa = Number(15.7784514000.toString().match(/^\d+(?:\.\d{0,2})?/)) // 输出结果为 15.77,不能用于整数如 10 必须写为10.0000
    // console.log(aaa)
    // let num = new Number(number);
    // console.log(number.toFixed(2) );
    
    // let num = Math.round(number*100) / 100;
    // console.log(num)

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