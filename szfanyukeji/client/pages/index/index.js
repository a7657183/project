//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
    data: {        
        movies: [
          { url: '../src/img/banner01.png' },
          { url: '../src/img/banner02.png' },
          { url: '../src/img/banner03.png' }
        ], 
        Newproduct:[
          { url: '../src/img/Newproduct01.jpg' },
          { url: '../src/img/Newproduct02.jpg' },
          { url: '../src/img/Newproduct03.jpg' },
          { url: '../src/img/Newproduct04.jpg' },
          { url: '../src/img/Newproduct05.jpg' },
          { url: '../src/img/Newproduct06.jpg' },
          { url: '../src/img/Newproduct07.jpg' }
        ],

        // 新闻咨询列表
        Ninfolist:[
          { 
            NFimg: '../src/img/Newproduct01.jpg',
            NFtitle:'让家春暖花开 美丽姑娘的优雅出租屋',
            NFtime: '2016-07-19',
            NFcontent: '两层楼共六十多平，加上三十多平的天台，沉静租下这个房子才花了1600!尽管房子最初的模样惨不忍睹，但绿意满..',
            NFlabel: [
              { label: "春暖花开" },
              { label: "潮流" },
              { label: "小建材" }
            ],
          },
          {
            NFimg: '../src/img/Newproduct02.jpg',
            NFtitle: '宅在“云端”里 简约却不简单的文艺美宅',
            NFtime: '2016-07-10',
            NFcontent: '木色为主的家具将大开间包裹成典型的日式风格。由于空间的长条形状，一切软装看似简单而信手拈来，实则藏着Tin..',
            NFlabel: [
              { label: "春暖花开" },
              { label: "简约" },
              { label: "文艺" },
              { label: "小建材" }
            ],
          },
          {
            NFimg: '../src/img/Newproduct03.jpg',
            NFtitle: '让家春暖花开 美丽姑娘的优雅出租屋',
            NFtime: '2016-07-19',
            NFcontent: '两层楼共六十多平，加上三十多平的天台，沉静租下这个房子才花了1600!尽管房子最初的模样惨不忍睹，但绿意满..',
            NFlabel: [
              { label: "春暖花开" },
              { label: "潮流" },
              { label: "小建材" }
            ],
          },
        ],

        // 导航栏列表
        navlist: [
          { title: '网站首页' },
          {
            title: '产品中心 ▼',
              flag: false,
              list:[
                { title: '全部' },
                { title: '消费类电子' },
                { title: '智能家具' },
                { title: '智能汽车配件' },
                { title: '其他业务' },
             ]
          },
          { 
            title: '商务合作 ▼',
              flag: false,
              list: [
                { title: '商务合作', url: '../business/business-cooperation/index' },
                { title: '渠道合作', url: '../business/channel-cooperation/index' },
                { title: '企业客户', url: '../business/corporate-customer/index' }
              ]
          },
          { 
            title: '产品购买 ▼',
              flag: false,
              list: [
                { title: '全部' },
                { title: '淘宝' },
                { title: '京东' }
              ]
          },
          { 
            title: '关于我们 ▼',
              flag: false,
              list: [
                { title: '全部' },
                { title: '淘宝' },
                { title: '京东' }
              ]
          },
          { title: '联系我们' },
          { 
            title: '科技创新 ▼',
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
        showModalStatus: false,
        userInfo: {},
        logged: false,
        takeSession: false,
        requestResult: '',
        scrollTop: 0,
        floorstatus: false,
    },
    // 点击显示隐藏1级列表
    showlist:function(res){
        var that = this
        if (that.data.showlist === true){
          that.setData({
            showlist: false
          })
        }else{
          that.setData({
            showlist: true
          })
        }      
    },
    tapNavFun(e) {
      wx.redirectTo({
        url: e.currentTarget.id
      });
    },
    // 点击显示隐藏2级列表
    showlist2: function (e) {
      console.log(e)
      var index = e.target.dataset.index      
      // console.log(index)
      const list = "navlist[" + index + "].flag"
      var navlist = this.data.navlist[index].flag
      console.log(navlist)
      if (navlist){
        this.setData({
          [list]:false
        })
      }else{
        this.setData({
          [list]: true
        })
      }
    },
    flag:function(e){
      console.log(e)
    },
    optfor:function(){

    },
    //点击图片看大图
    previewImage: function (res) {
      var src = res.currentTarget.dataset.src;
      var Newproduct = this.data.Newproduct.url;
      console.log(Newproduct)
      wx.previewImage({
        current: src,
        urls: this.data.Newproduct.url,
      })
    },
    videoErrorCallback:function(res){
      console.log('视频错误信息:' + res.detail.errMsg);
    },
    
//滚动回顶部方法
    //监听滚动的值
    onPageScroll:function(e){
      console.log(e.scrollTop)
      if (e.scrollTop > 700){
        this.setData({
          floorstatus: true
        })
      }else{
        this.setData({
          floorstatus: false
        })
      }
    },
    goTop: function (e) {
      if (wx.pageScrollTo){
        wx.pageScrollTo({
          scrollTop: 0,
        })
      }else{
        wx.showModal({
          title: '提示',
          content: '当前版本过低，请升级',
        })
      }
    },
})
