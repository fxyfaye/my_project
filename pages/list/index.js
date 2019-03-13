// pages/list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id:1,
        imgPath:"../../common/images/img1.jpg",
        title:"照明商店",
        writer:"作者：姜草",
        dis:"妈耶，太恐怖了"
      },
      {
        id:2,
        imgPath:"../../common/images/img2.jpg",
        title:"富江",
        writer:"作者：伊藤润二",
        dis:"妈耶，太恐怖了"
      },
      {
        id:3,
        imgPath:"../../common/images/img1.jpg",
        title:"上海堡垒",
        writer:"作者：江南",
        dis:"江洋是一个算泡泡的"
      },
      {
        id:4,
        imgPath:"../../common/images/img2.jpg",
        title:"龙族2",
        writer:"作者：江南",
        dis:"夏弥夏弥夏弥夏弥"
      },
      {
        id:5,
        imgPath:"../../common/images/img1.jpg",
        title:"龙族3",
        writer:"作者：江南",
        dis:"绘梨衣绘梨衣绘梨衣"
      }
    ]

  },
  getData:function(type){
    let listData=this.data.list;
    let len=listData.length;
    let obj={};
    if(type=="up"){
      for(let i=0;i<5;i++){
        obj={
          id:len+(i+1),
          imgPath:"../../common/images/img1.jpg",
          title:"龙族4",
          writer:"作者：江南",
          dis:"奥丁奥丁奥丁奥丁"
        }
        listData.push(obj)
      }
      console.log(listData)
      this.setData({list:listData})
    }
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
      this.getData()
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
      this.getData('up')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})