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
<transition-group name="fade">
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
      cards: []
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
      this.cards.push({
        type: "success",
        message: "Success!",
        id:Math.floor(Math.random(1,10)*1000)
      });
    },
    pullCard(id) {

      console.log("Card pulled: ",id)
      this.cards.map((c,i)=>{
        if(c.id==id){
          return this.cards.splice(i,1);
        }
      });
    }
  },
  created() {

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
  animation: fade-in 0.3s reverse;
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
    opacity:0
  }
  100% {
    opacity:1;
  }
}
</style>