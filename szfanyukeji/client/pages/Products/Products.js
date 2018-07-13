// pages/Products/Products.js
Page({
  
  data: {
    showView: false,
    navbarList: [],
    navbar: [
      { title: '网站首页' },
      {
        title: '消费类电子 ▾',
        flag: false
      },
      {
        title: '智能家居 ▾',
        flag: false
      },
      {
        title: '智能汽车配件 ▾',
        flag: false
      },
      {
        title: '其他业务 ▾',
        flag: false
      }
    ],
    currentTab: 0,    
    contentlist: [
      {
        title: '消费类电子',
        img: '../src/img/HereWAimg.jpg'      
      },
      {
        title: '消费类电子',
        img: '../src/img/HereWAimg.jpg'
      },
      {
        title: '消费类电子',
        img: '../src/img/HereWAimg.jpg'
      },
      {
        title: '消费类电子',
        img: '../src/img/HereWAimg.jpg'
      },
    ]
  },  
  onLoad(options) {
    showView: (options.showView === "true" ? true : false);
  },
  //tap赋值选中下标
  navbarMenuFun() {
    this.setData({
      showView: false
    });
  },
  navbarTap: function (e) {
    console.log(e);

    const val = e.currentTarget.dataset.index;
    let textList = []
    if (val === 1) {
      textList = [
        { title: '全部', url: '1' },
        { title: '平板', url: '2' },
        { title: '手提电脑', url: '3' },
        { title: '机顶盒', url: '4' },
        { title: '翻译机（新品）', url: '5' }
      ];
    }
    if (val === 2) {
      textList = [
        { title: '全部' },
        { title: '教育机器人（新品）' },
        { title: '智能水杯（新品）' },
        { title: '智能插头' },
        { title: 'LED灯' },
      ];
    }
    if (val === 3) {
      textList = [
        { title: '全部' },
        { title: '无线车载充（新品）' },
        { title: '车载蓝牙耳机' },
      ];
    }
    if (val === 4) {
      textList = [
        { title: '全部' },
        { title: '美容美发产品' },
      ];
    }
    this.setData({
      currentTab: e.currentTarget.dataset.index,
      navbarList: textList,
      showView: true
    });
  },
})