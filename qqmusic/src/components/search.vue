<template>
	<div class ="search">
		<div class="input" >
			<input type="text" placeholder="搜索歌曲、歌单、专辑"  v-model="condition">
		</div>
		<div>

			<p>热门搜索</p>
			<span v-for="item in SearchData"  v-if="item.k.indexOf(condition) != -1"><router-link to="/#">{{item.k}}</router-link></span>
		</div>
	</div>
</template>
<script>
	import axios from 'axios';
	export default {
        name: "search",
        data: function(){
            return {
            condition:"",
            SearchData: []
        	}
        },
        beforeCreated:function(){
			if(!this.session || !this.session.username){
				console.log(" 请先登陆")
				this.$router.push("/login")
			}else{
				this.$router.push("/music")
			}
        },
        mounted: function() {
            this.getSearchData()

        },
        methods: {
            test: function() {

            },
            getSearchData: function() {

                var that = this;
                // 调用ajax接口
                axios.get('/splcloud/fcgi-bin/gethotkey.fcg?g_tk=2136116525&uin=2211762245&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1510654006320')
                .then(function (response) {
                    console.log(response);
                    that.SearchData = response.data.data.hotkey;
                    // if(!that.session || that.session.username){
                    //      console.log(" 请先登陆")
                    //      that.$router.push("/login")
                    // }

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
	.search{
		margin-top: 10px;
		padding-top:10px;
		background: #f4f4f4;
	}
	.input{
		width: 330px;
		margin:10px 10px;
		height: 30px;
		border: 1px solid #ccc;
	}
	input{
		outline: none;
		border: none;
		width: 100%;
		height: 30px;
	}
	span{
		height: 30px;
		line-height: 30px;
		border-radius: 15px;
		box-sizing: border-box;
		margin: 10px;
		padding: 5px;
		border:1px solid #ccc;
	}
	a{
		text-decoration: none;
		color:#333;
		background: #fff;
		font-size: 14px;
	}
</style>