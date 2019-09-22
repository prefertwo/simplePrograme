// pages/keep/components/Dynamic/Dynamic.js
Component({
  options: {
    multipleSlots: true, // 允许使用多个slot
    styleIsolation: 'isolated', // 启用组件样式隔离，apply-shared, shared

  },
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据，私有数据
   */
  data: {

  },

  /**
   * 组件所在页面的生命周期函数
   */
  pageLifetimes: {
    show: function() {},
    hide:function() {},
    resize: function() {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 内部方法建议以下划线开头
    _privateMethod: function() {
      this.setData({
        name: 'guozheng'
      })
    }

  }
})
