/**
 * Created by luhao on 2016/12/29.
 */
(function ($){
    var param = 'url='+encodeURIComponent(location.href);
    $.ajax({
        type:'GET',
        url:'http://api.bobo119.com/api/wx/signature?'+ param,
        async:true, //异步请求
        success:function(rt){

            if(!rt.success){
                return alert(rt.message);
            }

            var title ='英菲尼迪多重金融礼遇，随心驾享。'; // 分享标题
            var link ='http://wx.bjczxda.com/wxVideo/index.html';
            var desc = '英菲尼迪2017年上海车展诚邀您亲临共赏，尊享万元置换特权礼遇。'; // 分享描述
            var imgUrl = 'http://wx.bjczxda.com/infiniti/src/shareLogo.jpg';

            var wx_appId = rt.data.appId;
            var wx_timestamp = rt.data.timestamp;
            var wx_nonceStr = rt.data.nonceStr;
            var wx_signature = rt.data.signature;

            wx.config({
                debug: false,
                appId: wx_appId,
                timestamp: wx_timestamp,
                nonceStr: wx_nonceStr,
                signature: wx_signature,
                jsApiList: [
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'onMenuShareQQ',
                    'onMenuShareWeibo'
                    // 所有要调用的 API 都要加到这个列表中
                ]
            });

            wx.ready(function () {
                // 在这里调用 API
                wx.onMenuShareTimeline({
                    title:title, // 分享标题
                    link: link, // 分享链接
                    desc: desc, // 分享描述
                    imgUrl:imgUrl, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });

                wx.onMenuShareAppMessage({
                    title: title, // 分享标题
                    desc: desc, // 分享描述
                    link: link, // 分享链接
                    imgUrl: imgUrl, // 分享图标
                    type: '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });

                wx.onMenuShareQQ({
                    title: title, // 分享标题
                    desc: desc, // 分享描述
                    link: link, // 分享链接
                    imgUrl: imgUrl, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });

                wx.onMenuShareWeibo({
                    title: title, // 分享标题
                    desc: desc, // 分享描述
                    link: link, // 分享链接
                    imgUrl: imgUrl, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });

                wx.onVoiceRecordEnd({
                    // 录音时间超过一分钟没有停止的时候会执行 complete 回调
                    complete: function (res) {
                        var localId = res.localId;
                    }
                });

                wx.stopRecord({
                    success: function (res) {
                        var localId = res.localId;
                    }
                });

                wx.playVoice({
                    localId: '' // 需要播放的音频的本地ID，由stopRecord接口获得
                });

            });
        },
        error:function(error){
            var eObj = error.responseJSON;

            if(eObj)
                alert(eObj.message);
            else
                alert('WeChat share request: Server Error!');
        }
    });
})(jQuery);