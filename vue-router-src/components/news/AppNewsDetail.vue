<template>
    <div class="app-news-detail">
        {{$route.params.id}}-{{$route.query.content}}
    </div>
</template>

<script>
    
    export default {
        name:'app-news-detail',
        mounted(){
            console.log(this)
            console.log(this.$route.params.id)
            console.log(this.$route.query.content)
        }
    }

</script>

<style lang="">
    
</style>