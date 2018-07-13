Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
    
  data: {
    // 导航栏列表
    navlist: [
      { title: '网站首页' },
      {
        title: '产品中心 ▾',
        flag: false,
        list: [
          { title: '全部' },
          { title: '消费类电子' },
          { title: '智能家具' },
          { title: '智能汽车配件' },
          { title: '其他业务' },
        ]
      },
      // {
      //   title: '商务合作 ▼',
      //   flag: false,
      //   list: [
      //     { title: '商务合作' },
      //     { title: '渠道合作' },
      //     { title: '企业客户' }
      //   ]
      // },
      // {
      //   title: '产品购买 ▼',
      //   flag: false,
      //   list: [
      //     { title: '全部' },
      //     { title: '淘宝' },
      //     { title: '京东' }
      //   ]
      // },
      {
        title: '关于我们 ▾',
        flag: false,
        list: [
          { title: '全部' },
          { title: '淘宝' },
          { title: '京东' }
        ]
      },
      // { title: '联系我们' },
      {
        title: '科技创新 ▾',
        flag: false,
        list: [
          { title: '科技创新' },
          { title: '技术研发中心介绍' },
          { title: '资格认证' },
          { title: '技术支持' },
        ]
      }
    ],
    showlist: false,
    showlist2: false,
  },
  methods: {
      // 点击显示隐藏1级列表
      showlist: function (res) {
        var that = this
        if (that.data.showlist === true) {
          that.setData({
            showlist: false
          })
        } else {
          that.setData({
            showlist: true
          })
        }
      },
      // 点击显示隐藏2级列表
      showlist2: function (e) {
        console.log(e)
        var index = e.target.dataset.index
        console.log(index)
        const list = "navlist[" + index + "].flag"
        var navlist = this.data.navlist[index].flag
        console.log(navlist)
        if (navlist) {
          this.setData({
            [list]: false
          })
        } else {
          this.setData({
            [list]: true
          })
        }
      },      
  }
})