<template>
<div>
  <table class="table table-hover" style="margin-top:100px;">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <table-row 
    v-on:toggle-active="toggleActive(row)"
    v-for="(row, index) in rows" 
    :key="index"
    :selected="row.selected"
    :name="row.name"
    :date="row.date"
    :description="row.description"
    >
    </table-row>
  </tbody>
</table> 
<button class="btn btn-default"v-on:click="toggleLoading">Toggle Loading</button>
<button class="btn btn-default"v-on:click="pushCard">Push Card</button>

<transition name="bounce">
  <codigo-loader v-if="loading"></codigo-loader>
</transition>

<div class="card-space">
<transition-group name="fade" mode="out-in">
<codigo-card 
@kill-me="pullCard" 
:type="card.type" 
:id="card.id"
:message="card.message"
v-for="(card,index) in cards" 
:key="index">
</codigo-card>
</transition-group>

</div>


</div>
</template>
<script>
import {EventBus} from '../../../../main';
import Row from "./row";
import Data from "../../../../../dist/data/mock.js";
import Loader from "../../../utility/loader/loader";
import Card from "../../../utility/cards/card";
export default {
  data() {
    return {
      data: "Test",
      rows: Data,
      loading: false,
      cards: [],
      cardId:0
    };
  },
  components: {
    "table-row": Row,
    "codigo-loader": Loader,
    "codigo-card": Card
  },
  methods: {
    toggleActive(row) {
      row.selected = !row.selected;
      // console.log(row)
    },
    toggleLoading() {
      this.loading = !this.loading;
      console.log(this.loading);
    },
    pushCard() {
      let card = {
        type: "success",
        message: "Success!",
        id:this.cardId++
      }
      this.cards.push(card);
    },
    pullCard(id) {
      setTimeout(()=>{
        this.cards = this.cards.filter((c,i)=>{
        return c.id!=id;
      });
      },3000)
    }
  },
  created() {
    EventBus.$on('kill-me',(id)=>{
      this.pullCard(id);
    })
  }
};
</script>
<style scoped>
.card-space{
  position: fixed;
  bottom:2%;
  right:2%;
}
.fade-enter-active {
  animation: fade-in 0.3s;

}
.fade-leave-active {
  animation: flip-out 0.5s;
}
.bounce-enter-active {
  animation: bounce-in 0.3s;
}
.bounce-leave-active {
  animation: bounce-in 0.3s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes fade-in {
  0% {
    opacity:0;
    left: 50px;
  }
  100% {
    opacity:1;
    left:0
  }
}
@keyframes flip-out{
  0%{
    transform: rotateX( 0deg );
    opacity:1;
  }
  100%{
transform: rotateX( 90deg );
opacity:0;
  }
}
</style>