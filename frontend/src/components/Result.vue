<script setup>
import { onMounted, ref } from '@vue/runtime-core';
const emit = defineEmits(['close'])
const isShow = ref(true);
onMounted(() => {
  showResult();
});

const showResult = () => {
  setTimeout(() => {
    isShow.value = false;
  }, 3000);
};

// 關閉視窗
const close = () => {
    emit('close')
}
</script>
<template>
  <div class="resultSection none displayNone">
    <div class="introductionResult">
      <p class="text1">線</p>
      <p class="text2">上</p>
      <p class="text3">求</p>
      <p class="text4">籤</p>
      <Transition name="fade">
        <div class="info none displayNone" v-if="isShow">
          <p>第六十八籤</p>
          <h2>中吉</h2>
          <p>【更新】</p>
        </div>
      </Transition>
      <Transition>
        <div class="stickSection none displayNone" v-if="!isShow">
          <div class="poem">
            <span>第六十八籤 ︻ 甲甲 ︼ 大吉</span>
            <p>
              巍巍獨步向雲間<br />玉殿千官第一班<br />富貴榮華天付汝<br />福如東海壽如山
            </p>
            <img src="${data[num].img}" />
          </div>
          <div class="resultText">
            <h2>聖意</h2>
            <p>
              功名遂。福祿全。訟得理。病即痊。<br />桑麻熟。婚姻聯。孕生子。行人還。
            </p>
            <h2>解曰</h2>
            <p>
              此籤謀望通達。無不遂意。但各有所主。官員占茲。有超越之喜。士人有功名之望。庶人不吉。若謀望。求財者。有名無實。為語多空虛也。
            </p>
            <button class="againBtn" @click="close">重新求籤</button>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>


<style lang="scss" scoped>
* {
  font-family: "Noto Serif TC", serif;
}
.resultSection {
  @include size(100%, 100%);
  background: radial-gradient(
    circle,
    rgba(98, 98, 98, 0) 0%,
    rgba(0, 0, 0, 1) 85%
  );
  padding: 40px;
  position: relative;
  transition: 0.8s;
  .introductionResult {
    @include size(100%, 100%);
    @include flexCenter(center, center);
    border: solid 2px rgba(255, 255, 255, 0.3);
    position: relative;
    .text1,
    .text2,
    .text3,
    .text4 {
      position: absolute;
      font-size: 2vw;
      color: rgba(255, 255, 255, 0.301);
      padding: 24px;
      background-color: rgba(0, 0, 0, 1);
    }
    .text1 {
      left: -40px;
      top: -40px;
    }
    .text2 {
      right: -40px;
      top: -40px;
    }
    .text3 {
      left: -40px;
      bottom: -40px;
    }
    .text4 {
      right: -40px;
      bottom: -40px;
    }
    .info {
      @include flexCenter(center, center);
      position: fixed;
      flex-direction: column;
      color: #fff;
      font-family: "Noto Serif TC", serif;
      h2 {
        font-size: 12vw;
        font-weight: 600;
      }
      p {
        @include flexCenter(center, center);
        font-size: 1.5vw;
        letter-spacing: 3vw;
        text-align: center;
        text-indent: 2rem;
      }
    }
  }
}

.stickSection {
  @include size(100%, 100%);
  @include flexCenter(center, space-around);
  flex-direction: row-reverse;
  transition: 1s;
  .poem {
    @include size(80%, 30%);
    color: white;
    writing-mode: vertical-rl;
    p {
      font-weight: 900;
      font-size: 2.5vw;
      line-height: 200%;
      letter-spacing: 8px;
    }
    span {
      font-size: 1vw;
      letter-spacing: 0.2vw;
    }
    img {
      @include size(180px, auto);
      position: absolute;
      right: 15%;
      bottom: 5%;
    }
  }
  .resultText {
    color: #fff;
    width: 24%;
    height: 60%;
    h2 {
      font-size: 2.2vw;
      margin-top: 8%;
    }
    p {
      font-size: 1vw;
      margin-top: 4%;
    }
    button {
      padding: 2% 32%;
      font-size: 1.2vw;
      margin-top: 20%;
      border: 1px solid #ffffff;
      background-color: rgba(0, 0, 0, 0);
      color: #fff;
      cursor: pointer;
    }
  }
}

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
  transition-delay: 0.5s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>