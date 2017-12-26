<template>
 
    <div class="card app-todo" :class="{finished:todo.isFinished}">
        <div class="check-box">
            <input type="checkbox" v-model="todo.isSelected">
        </div>
        
        <div class="card-content todo-card">
            <div class="card-content-inner todo-content">{{todo.content}}</div>
            <div class="control-box">

                <button @click='finish(todo.id)' :class="{'button-fill':todo.isFinished}" class="button button-small button-success"><span class="icon icon-check"></span></button>

                <button  @click='remove(todo.id)' class="button button-fill button-small button-danger"><span class="icon icon-remove"></span></button>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    name:'app-content',
    props:['todo','finish','remove'],
    data(){
        return {
           
        }
    }
}

</script>

<style scoped>
   
</style>