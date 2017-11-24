<template>
	<div class="detail">
		<ul>
			<li v-for="item in DetailData" @click="musicList()">
				<img :src="item.picUrl" alt="">
				<div>
					<h4>{{item.topTitle}}</h4>
					<p v-for="list in item.songList" >{{list.singername}} - {{list.songname}}</p>
				</div>
			</li>
		</ul>
		<br>
		<br><br>
		<br>
	</div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "detail",
        data: function(){
            return {
            DetailData: []
        	}
        },
        mounted: function() {
            this.getDetailData()

        },
        methods: {
            musicList: function() {
            	this.$router.push("/song")
            },
            getDetailData: function() {

                var that = this;
                // 调用ajax接口
                axios.get('/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=2136116525&uin=2211762245&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1510647263961')
                .then(function (response) {
                    console.log(response);
                    that.DetailData = response.data.data.topList;

                    // that.$nextTick(function(){

                    // })
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
        }
    }
</script>

<style scoped>
	div,ul,li,p,img,span,html,body,h4,input{
		margin: 0;
		padding:0;
	}
	ul{
		list-style: none;
		margin-top: 10px;

	}
	li{
		margin-bottom: 10px;
		background: #f4f4f4;
		height: 100%
	}
	img{
		display: inline-block;
		width: 100px;
		height: 100px;
	}
	div{
		float: right;
		
	}
	h4{
		margin-bottom: 10px;
	}
	p{
		font-size: 14px;
		width: 250px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis
	}
</style>