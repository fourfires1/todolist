<template>
    <header class="bar bar-nav app-header">
        <a class="icon icon-app pull-left"></a>
        <a @click='toggleInsertBox' class="icon icon-edit pull-right"></a>
        <h1 class="title">ToDoList</h1>
    </header>
</template>

<script>

export default {
    name:'app-header',
    props:['toggleInsertBox'],
    data(){
        return {
          
        }
    }
}

</script>

<style scoped>
   
</style>