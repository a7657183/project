Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  data: {
    
  },
  methods: {    
    //滚动回顶部方法
    //监听滚动的值
    onPageScroll: function (e) {
      console.log(e.scrollTop)
      if (e.scrollTop > 700) {
        this.setData({
          floorstatus: true
        })
      } else {
        this.setData({
          floorstatus: false
        })
      }
    },
    goTop: function (e) {
      if (wx.pageScrollTo) {
        wx.pageScrollTo({
          scrollTop: 0,
        })
      } else {
        wx.showModal({
          title: '提示',
          content: '当前版本过低，请升级',
        })
      }
    },
  }
})