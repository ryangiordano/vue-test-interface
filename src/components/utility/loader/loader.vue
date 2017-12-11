<template>
  <div class="cell">
    <div class="loader square switch">
      <div class="block">
        <div class="box"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: "Test",
      loading:false
    };
  }
};
</script>
<style scoped>

.cell {
  position: relative;
  width: 160px;
  height: 160px;
  -ms-flex-negative: 1;
  flex-shrink: 1;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  background-color: #343a40 !important;
  position: fixed;
  bottom: 2%;
  left: 2%;
-webkit-box-shadow: -7px 10px 5px 0px rgba(0,0,0,0.19);
-moz-box-shadow: -7px 10px 5px 0px rgba(0,0,0,0.19);
box-shadow: -7px 10px 5px 0px rgba(0,0,0,0.19);
}

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
}

.loader.square .block {
  border-radius: 4px;
  width: 74px;
  height: 74px;
}

.loader.square .block:before,
.loader.square .block:after {
  bottom: 2px;
}

.loader.square .block:before {
  left: 2px;
}

.loader.square .block:after {
  right: 2px;
}

.loader.square .block .box {
  left: 2px;
  top: 2px;
  -webkit-animation-name: slide;
  animation-name: slide;
}

.loader.circle .block {
  width: 106px;
  height: 106px;
  border-radius: 100%;
}

.loader.circle .block:before,
.loader.circle .block:after {
  bottom: 18px;
}

.loader.circle .block:before {
  left: 18px;
}

.loader.circle .block:after {
  right: 18px;
}

.loader.circle .block .box {
  top: 18px;
  left: 18px;
  -webkit-transform-origin: 33px 33px;
  transform-origin: 33px 33px;
  -webkit-animation-name: roll;
  animation-name: roll;
}

.loader.reg .block {
  -webkit-animation-name: reg;
  animation-name: reg;
}

.loader.swing .block {
  -webkit-animation-name: swing;
  animation-name: swing;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
}

.loader.swing .block .box {
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
}

.loader.switch .block {
  -webkit-animation-name: switch;
  animation-name: switch;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-timing-function: steps(4);
  animation-timing-function: steps(4);
}

.loader.switch .block .box {
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
}

.block {
  position: absolute;
  color: #fff;
  border: 2px solid;
  -webkit-transform: translate(-50%, -50%) rotate(-45deg);
  transform: translate(-50%, -50%) rotate(-45deg);
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.block:before,
.block:after {
  content: "";
  position: absolute;
  width: 32px;
  height: 32px;
  background: #fff;
  border-radius: 4px;
}

.block:before {
  left: 2px;
}

.block:after {
  right: 2px;
}

.box {
  position: absolute;
  width: 32px;
  height: 32px;
  background: #fff;
  border-radius: 4px;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

@-webkit-keyframes slide {
  33% {
    left: 2px;
  }
  67%,
  100% {
    left: 36px;
  }
}

@keyframes slide {
  33% {
    left: 2px;
  }
  67%,
  100% {
    left: 36px;
  }
}

@-webkit-keyframes roll {
  33% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  67%,
  100% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}

@keyframes roll {
  33% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  67%,
  100% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}

@-webkit-keyframes reg {
  50% {
    -webkit-transform: translate(-50%, -50%) rotate(45deg);
    transform: translate(-50%, -50%) rotate(45deg);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotate(45deg);
    transform: translate(-50%, -50%) rotate(45deg);
  }
}

@keyframes reg {
  50% {
    -webkit-transform: translate(-50%, -50%) rotate(45deg);
    transform: translate(-50%, -50%) rotate(45deg);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotate(45deg);
    transform: translate(-50%, -50%) rotate(45deg);
  }
}

@-webkit-keyframes swing {
  25%,
  50% {
    -webkit-transform: translate(-50%, -50%) rotate(45deg);
    transform: translate(-50%, -50%) rotate(45deg);
  }
  75% {
    -webkit-transform: translate(-50%, -50%) rotate(-45deg);
    transform: translate(-50%, -50%) rotate(-45deg);
  }
}

@keyframes swing {
  25%,
  50% {
    -webkit-transform: translate(-50%, -50%) rotate(45deg);
    transform: translate(-50%, -50%) rotate(45deg);
  }
  75% {
    -webkit-transform: translate(-50%, -50%) rotate(-45deg);
    transform: translate(-50%, -50%) rotate(-45deg);
  }
}

@-webkit-keyframes switch {
  to {
    -webkit-transform: translate(-50%, -50%) rotate(-405deg);
    transform: translate(-50%, -50%) rotate(-405deg);
  }
}

@keyframes switch {
  to {
    -webkit-transform: translate(-50%, -50%) rotate(-405deg);
    transform: translate(-50%, -50%) rotate(-405deg);
  }
}
</style>