<template>
	  <div class="app-banner swiper-container">
	     <div class="swiper-wrapper">
	     	  <div class="swiper-slide" v-for="billboard in billboards" :key="billboard.id">
	     	  	<img width="100%"  :src="billboard.imageUrl" :title="billboard.name" alt="">
	     	  </div>
	     </div>
	     <div class="swiper-pagination"></div>
	  </div>
</template>

<script>
	
	import Swiper from 'swiper'
	import axios from 'axios'
	  export default{
	  	name:'app-banner',
	  	data:function(){
	      
	  		return{
	  		   billboards:[]
	  		}
	  	},
	  	methods:{
	  		getData(){
	  			let that = this
	  		//https://m.maizuo.com/v4/api/billboard/home?__t=1514031991005
	  			axios.get('http://localhost:3000/mz/v4/api/billboard/home',{
	  				params:{__t:Date.now()}
	  			}).then((response)=>{
	  				console.log(response.data.data.billboards)
	  				that.billboards = response.data.data.billboards
	  	
	  			})
	  		}
	  	},
	  	created(){
	  		this.getData()
	  	},
	   updated(){
	   	 var mySwiper = new Swiper('.app-banner',{
	   	 	loop:true,
	   	 })
	   }
	  }
	  
</script>

<style>

    
</style>