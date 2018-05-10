// pages/show/show.js

Page({


  data: {
  },

  
  onLoad: function (options) {
    var that=this
  
    wx.request({
      url: 'http://api.map.baidu.com/telematics/v3/weather?location=%E4%B8%8A%E6%B5%B7&output=json&ak=6tYzTvGZSOpYB5Oc2YGGOKt8', 
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      
      success: function (res) {
        console.log(res.data)
        that.setData({
          items:res.data
        })
      }
    })
  }

  
})