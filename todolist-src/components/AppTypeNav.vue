<template>
    <nav class="bar bar-tab app-type-nav">
        <div @click="changeType(_type.type)" v-for="_type in types"  :class="['circle',_type.type,type==_type.type?'active':'']" >{{_type.content}}</div>
    </nav>
</template>

<script>
import bus from '../modules/bus'

export default {
    name:'app-header',
    data(){
        return {
          types:[//准备循环页面底部类型按钮的数据
                {type:'all',content:'A'},
                {type:'finish',content:'F'},
                {type:'unfinish',content:'U'},
            ],
            type:'all'
        }
    },
    methods:{
        changeType(type){
            bus.$emit("change-type",type)
            this.type = type
        }
    }
}

</script>

<style scoped>
   
</style>