<template>
    <div class="app-news-inside">
        <ul>
            <router-link  v-for="_new in news" :key="_new.id" :to='"detail/"+_new.id+"?content="+_new.content'><li>{{_new.content}}</li></router-link>
        </ul>
    </div>
</template>

<script>
    
    export default {
        name:'app-news-inside',
        data:function () {
            return {
                news:[
                    {id:1,content:'国内新闻1'},
                    {id:2,content:'国内新闻2'},
                    {id:3,content:'国内新闻3'}
                ]
            }   
        }
    }

</script>

<style lang="">
    
</style>