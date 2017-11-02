// pages/user/award/award.js
const app = getApp();
Page({
    data: {
        options:{},
    },
    lookMine: function(event) {
        wx.redirectTo({
            url: '../mine/mine',
        })
    },
    onLoad: function(options) {
      this.setData({
        options:JSON.parse(options.query)
      })
    },
    onShareAppMessage: function(res) {

        let query = 'id='+this.data.options.id+'&userId='+this.data.options.userId+'&originId='+this.data.options.originId+'&orderId='+this.data.options.orderId;

        return {
            title: app.globalData.userInfo.nickName+'邀请您代抽奖品',
            path: '/pages/user/detail/detail?'+query,
            success: function(res) {
                console.log('分享成功:'+query)
            },
            fail: function(res) {
                // 转发失败
            }
        }
    }
})