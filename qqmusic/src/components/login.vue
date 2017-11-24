<template>
	<div>
		<h2>登陆</h2>
		<input type="text" v-model="name" placeholder="用户名"><br><br>
		<input type="password" v-model="psw" placeholder="密码"><br><br>
		<button id="button" @click="login()">登陆</button>
	</div>
</template>
<script>
import axios from 'axios';
export default{
	name:"login",
	data:function(){
		return{
            name:"",
            psw:"",
            username:""
		}
	},
	methods: {
        login: function() {
            var that =this;
            var name = $('input[type="text"]').val();
            var psw = $('input[type="password"]').val();

            axios.post('/users/login',{username :name,psw:psw})
            .then(function(res){
                console.log(res)
                    if(res.data.code === 1){
                    that.$router.push('/music');
                   }else{
                    console.log(res.data.code)
                   }

            })
        }
    }
}



</script>