<template>
    <tr :class="selected ? `table-success`:`table`" v-on:click="toggleActive">
      <th scope="row">{{date}}</th>
      <td>{{name}}</td>
      <td>{{description}}</td>
      <!-- <td>{{description}}</td> -->
    </tr>
</template>
<script>
export default {
    data(){
        return{
            data:"Test"
        }
    },
    props:['name','date','description','selected'],
    methods:{
        toggleActive(){
            this.$emit("toggle-active");
        }
    }
};
</script>
<style scoped>
.table-success, .table-success>th, .table-success>td{
    background-color:#99d5ae;
    color:#fff;
}
</style>