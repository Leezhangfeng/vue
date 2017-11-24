<template>
    <div class="mod_twocol_list mod_twocol_list_normal">
        <div class="swiper">
            <mt-swipe :auto="4000" class="spc">
                <mt-swipe-item>
                    <a href="http://y.qq.com/w/album.html?albummid=002KE4PB0PfIpr&amp;ADTAG=myqq&amp;from=myqq&amp;channel=10007100" title="">

                    <img onerror="this.onerror=null;this.src=sliderDefImg;" src="https://y.gtimg.cn/music/photo_new/T003R720x288M000003NcCHQ3sswF8.jpg?max_age=2592000">
                    </a>
                </mt-swipe-item>
                <mt-swipe-item>
                    <a href="https://y.qq.com/m/digitalbum/gold/index.html?_video=true&amp;id=2903828&amp;g_f=shoujijiaodian&amp;ADTAG=myqq&amp;from=myqq&amp;channel=10007100" title=""><img onerror="this.onerror=null;this.src=sliderDefImg;" src="https://y.gtimg.cn/music/photo_new/T003R720x288M000003rfpu92XUPly.jpg?max_age=2592000" >
                    </a>
                </mt-swipe-item>
                <mt-swipe-item>
                    <a href="https://y.qq.com/m/act/mixnine/v3/index.html?ADTAG=myqq&amp;from=myqq&amp;channel=10007100" title=""><img onerror="this.onerror=null;this.src=sliderDefImg;" src="https://y.gtimg.cn/music/photo_new/T003R720x288M000000TS5nJ4YsbEl.jpg?max_age=2592000" >
                    </a>
                </mt-swipe-item>
                <mt-swipe-item>
                    <a href="http://y.qq.com/w/album.html?albummid=003z9kma13yhja&amp;ADTAG=myqq&amp;from=myqq&amp;channel=10007100" title=""><img onerror="this.onerror=null;this.src=sliderDefImg;" src="https://y.gtimg.cn/music/photo_new/T003R720x288M000002yc6uQ3cW5gt.jpg?max_age=2592000">
                    </a>
                </mt-swipe-item>
                <mt-swipe-item>
                    <a href="http://y.qq.com/w/album.html?albummid=000RPWgt3QAenD&amp;ADTAG=myqq&amp;from=myqq&amp;channel=10007100" title="">
                    <img onerror="this.onerror=null;this.src=sliderDefImg;" src="https://y.gtimg.cn/music/photo_new/T003R720x288M000003j7WFF2FnoQw.jpg?max_age=2592000" >
                    </a>
                </mt-swipe-item>
            </mt-swipe>
        </div>

        <h2 class="list_title">电台</h2>
        <ul id="radio_wrapper" class="list_container">
            <li data-tjname="recom_radio" class="js_play_radio" data-id="307">
                <a class="list_main" href="https://i.y.qq.com/v8/playsong.html?ADTAG=myqq&from=myqq&channel=10007100&songid=582904,110425,9195819,7094168,102295959,5210718,140269,102433800,105590594,931207,237281,101812311,7112771,102679605,4801264,454918,7089661,11772,407862,5121150">
                    <div class="list_media" v-for="item in lunData">
                        <img onerror="this.onerror=null;this.src=defaultPic;" class="list_pic" :src="item.picUrl" alt="">
                        <span class="icon icon_play"></span>
                        <h4 class="list_tit tit_two_row">{{item.Ftitle}}</h4>
                    </div>
                </a>
            </li>
        </ul>
        <div class="bottom">
            <p><a href="">热门歌单</a></p>
            <p class="center">去客户端发现好音乐</p>
            <p class="center">查看电脑版网页</p>
            <p class="copyright center">Copyright © 1998 - <span id="js_cpright_year">2017</span> Tencent. All Rights Reserved.</p>
            <p id="js_iosinfo" class="copyright center" style="">联系电话：0755-86013388 QQ群：55209235</p>
        </div>
    </div>
</template>

<script>
    import { Swipe, SwipeItem } from 'mint-ui';
    import axios from 'axios';
    export default {
        name: "music-comp",
        data: function(){
            return {
            lunData: [],
            username:""

            }
        },
        mounted: function() {
            this.getLunData();
            this.getSession()
        },
        methods: {
            test() {

            },
            getLunData: function() {

                var that = this;
                // 调用ajax接口
                axios.get('/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1510623441054')
                .then(function (res) {
                    // console.log(res);
                    that.lunData = res.data.data.radioList;
                    console.log(that.session);
                    // console.log(that.session.username);
                   
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            getSession:function(){
                var that = this;
                axios.get('/users/get/session').then(function(res){
                    console.log(res);
                    that.username = res.data;
                     if(!that.username ){
                         console.log(" 请先登陆")
                         that.$router.push("/login")
                    }else{
                        that.$router.push("/music")
                    }
                })
            }
        }
    }
</script>
<style scoped>
    p,ul,li,a,div,h2{
        margin: 0;padding: 0;
    }

    .mod_twocol_list .list_container {
        overflow: hidden;
        margin-right: -8px;
        list-style: none;
        height: 210px;
    }
    h2{
        font-size:15px;
    }
    .mod_twocol_list li .list_main h4{
        color: #333;
        position: relative;
        z-index: 10;
        top:187px;
        left: 0
    }

    .mod_twocol_list li {
        float: left;
        width: 100%;
        -webkit-box-sizing: border-box;
        padding-right: 8px;
        overflow: hidden;
        height:100%;
    }
    .mod_twocol_list li .list_main {
        display: block;
        background: #fff;
        text-decoration: none;
        width: 100%;
        height: 100%;

    }
    .mod_twocol_list li .list_main .list_media {
        position: relative;
        margin-bottom: 10px;
        float: left;
        -webkit-box-sizing: border-box;
        padding-right: 8px;
        width: 50%;
        height: 100%
    }
    .mod_twocol_list li .list_main .list_media  .list_pic{
        width: 100%;
        height: 90%;
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        z-index: 1;
    }
    .mod_twocol_list li .list_media span {
        background-image: url(https://y.gtimg.cn/mediastyle/mobile/yqq_v5/img/list_sprite.png?max_age=19830212&d=20151105145423);
        background-repeat: no-repeat;
        background-size: 24px 60px;
        height: 24px;
        bottom: 25px;
        right: 5px;
        width: 24px;
        background-position: 0 0;
        position: absolute;
        z-index: 5;
    }
    .spc{
    width: 100%;
    height:130px;
    }
    .spc img{
        width: 100%;
        height: 100%;
        display: block;
    }
    .center{
        text-align: center;
    }
    p{
        margin: 10px auto;
        font-size: 14px;
    }
    .copyright{
        font-size:12px;
        color: #666;
    }
    a{
        text-decoration: none;
        color: #333;
    }
</style>

