<script setup>
import Result from "./components/Result.vue";
import { ref } from "vue";
const isShow = ref(false);

const handShow = () => {
  isShow.value = true;
};

const close = () => {
    console.log('cowba')
    
    isShow.value = false
}

</script>
<template>
  <div id="main">
    <div class="mask">
      <Transition name="fade">
        <div class="mainContainer" v-if="!isShow">
          <h1>線上求籤。</h1>
          <div class="textBox">
            <h2>求籤步驟</h2>
            <ul>
              <li>①請虔誠地在心中默念您的姓名、出生年月日、住址</li>
              <li>②選擇欲請教的求籤類別後，誠心地在心中詳細說明</li>
              <li>③說明完後即可點選「開始求籤」按鈕進行線上求籤</li>
            </ul>
            <h2>求籤類別</h2>
            <div class="selectBox">
              <button data-sec="unselected">網站上線</button>
              <button data-sec="unselected">感情婚姻</button>
              <button data-sec="unselected">事業工作</button>
              <button data-sec="unselected">家庭生活</button>
              <button data-sec="unselected">求財運勢</button>
              <button data-sec="unselected">參選總統</button>
            </div>
          </div>
        </div>
      </Transition>
      <Transition name="fade">
        <div class="startSection" v-if="!isShow">
          <!-- disabled="true"  -->
          <button class="startBtn" @click="handShow">開始求籤</button>
        </div>
      </Transition>
      <Transition>
        <Result v-if="isShow" @close="close" />
      </Transition>
    </div>
  </div>
</template>


<style lang="scss" scoped>
html,
body {
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  * {
    font-family: "Noto Serif TC", serif;
    overflow: hidden;
  }
}

#main {
  @include size(100vh, 100vw);
  background-image: url("./assets/image/background.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mask {
  @include size(100vh, 100vw);
  background: rgb(31, 30, 40);
  background: linear-gradient(
    106deg,
    rgba(31, 30, 40, 1) 21%,
    rgba(238, 238, 238, 0) 66%
  );
}
.overlay {
    @include size(100vh, 100vw);
      background: radial-gradient(
    circle,
    rgba(98, 98, 98, 0) 0%,
    rgba(0, 0, 0, 1) 85%
  );
}
.mainContainer {
  @include flexCenter(center, space-between);
  flex-direction: row-reverse;
  width: 100%;
  color: #fff;
  padding: 0 12%;
  h1 {
    font-size: 6vw;
    font-weight: 900;
    height: 80%;
    padding: 4% 0;
    writing-mode: vertical-lr;
  }
  .textBox {
    height: 60%;
    h2 {
      margin: 4% 0;
      font-size: 1.8vw;
    }
    ul {
      list-style: none;
      font-size: 1vw;
      li {
        line-height: 180%;
      }
    }
    .selectBox {
      @include flexCenter(center, flex-start);
      flex-wrap: wrap;
      button {
        background-color: rgba(255, 255, 255, 0);
        font-size: 1vw;
        border: 1px solid #fff;
        color: #fff;
        padding: 2% 6%;
        cursor: pointer;
        margin: 2% 4% 2% 0;
        transition: 0.2s;
      }
      button:hover {
        background-color: #fff;
        color: #000;
      }
      .selectedBtn {
        background-color: #fff;
        color: #000;
      }
    }
  }
}

.startSection {
  @include flexCenter(center, flex-start);
  position: absolute;
  height: 20%;
  bottom: 0;
  padding-left: 12%;
  width: 100%;
  background-color: #fff;
  z-index: 2;
  button.startBtn {
    padding: 1% 8%;
    font-size: 1.5vw;
    font-weight: 900;
    background-color: #fff;
    border: 1px solid #000;
    cursor: pointer;
  }
  // .startBtn:hover{
  //     background-color: rgb(19,22,22);
  //     color: #fff;
  // }
}

/* we will explain what these classes do next! */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
  transition-delay: 1s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>