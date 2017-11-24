<template>
	<div>
		<h2>注册</h2>
		<input type="text" id="user" placeholder="用户名"><br><br>
		<input type="password" id="psw" placeholder="密码"><br><br>
		<button id="btn" @click="regist()">注册</button>
	</div>
</template>
<script>
	import axios from "axios"
	export default{
		name:"regist",

		methods: {
	        regist: function() {

	           var name = $('input[type="text"]').val();
	           var psw = $('input[type="password"]').val();
	           axios.post('/users/regist',{username :name,psw:psw})
	           .then(function(res){
	            console.log(res)
	           })
	        }
	    }
	}
</script>
<style scoped>

</style>