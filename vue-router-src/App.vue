<template>
  <div id="app">
        <router-link to="/main">main</router-link>
        <router-link to="/news">news</router-link>
        <p>content:</p>
        <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data:function() {
    return {
    }
  }

}

</script>

<style >
.router-link-active{
    color:red;
}


</style>
