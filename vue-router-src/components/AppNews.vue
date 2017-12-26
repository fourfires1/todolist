<template>
    <div class="app-news">
        news type:
        <router-link to='/news/inside'>inside</router-link>
        <router-link to='/news/outside'>outside</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
    
    export default {
        name:'app-news'
    }

</script>

<style lang="">
    
</style>