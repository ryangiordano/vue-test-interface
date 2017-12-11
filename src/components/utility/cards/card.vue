<template>
<div :class="type + ` card`"  v-if="type=='success'">
    <div class="svg">
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-263.5 236.5 26 26">
    <g class="svg-success">
      <circle cx="-250.5" cy="249.5" r="12"/>
      <path d="M-256.46 249.65l3.9 3.74 8.02-7.8"/>
    </g>
  </svg>
  <p>{{message}}</p>
</div>

</div>
</template>
<script>
const cardTypes ={
  "plain":0,
  "success":1,
  "error":2,
}
import {EventBus} from '../../../main';

export default {
  data() {
    return {
      data: "Test",
      loading:false
    };
  },
  props:[
    "type","message","date","id"
  ],
  created(){
      EventBus.$emit("kill-me",this.id);
  }
};
</script>
<style scoped>
.card{
  margin:10px 0 0;
  width:150px;
  padding:20px;
  height: 75px;
  display:flex;
  justify-content: center;
  align-items:center;
-webkit-box-shadow: 5px 10px 5px 0px rgba(0,0,0,0.19);
-moz-box-shadow: 5px 10px 5px 0px rgba(0,0,0,0.19);
box-shadow: 5px 10px 5px 0px rgba(0,0,0,0.19);
}
.svg{
  display:flex;
}
.svg svg{
  margin-right:10px;
}
p{
  color:white;
  font-size:16px;
  font-weight:bold;
}
.success{
  background-color:#99d5ae;
}
.svg-success {
  stroke-width: 2px;
  stroke: #fff;
  fill: none;
}

.svg-success path {
  stroke-dasharray: 17px, 17px;
  stroke-dashoffset: 0px;
  -webkit-animation: checkmark 0.25s ease-in-out 0.7s backwards;
  animation: checkmark 0.25s ease-in-out 0.7s backwards;
}

.svg-success circle {
  stroke-dasharray: 76px, 76px;
  stroke-dashoffset: 0px;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  -webkit-animation: checkmark-circle 0.6s ease-in-out forwards;
  animation: checkmark-circle 0.6s ease-in-out forwards;
}

@keyframes checkmark {
  0% {
    stroke-dashoffset: 17px;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes checkmark-circle {
  0% {
    stroke-dashoffset: 76px;
  }
  100% {
    stroke-dashoffset: 0px;
  }
}





</style>