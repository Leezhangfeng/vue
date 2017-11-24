<template>
	<div>
		<ul>
			<li>yemian </li>
		</ul>
	</div>
</template>
<script>
	import axios from 'axios';
    export default {
        name: "song",
        data: function(){
            return {
            SongData: []
        	}
        },
        mounted: function() {
            this.getSongData()

        },
        methods: {
            getSongData: function() {

                var that = this;
                // 调用ajax接口
                axios.get('/w/toplist.html?ADTAG=myqq&from=myqq&channel=10007100&id=4&type=top')
                .then(function (response) {
                    console.log(response);
                    // that.SongData = response.data.data.topList;
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
        }
    }
</script>
<style>
</style>