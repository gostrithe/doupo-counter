<script setup>
import { ref } from 'vue'
import { showToast } from 'vant'

const leftName = ref('平')
const rightName = ref('平')
const scout1 = ref(0)
const scout2 = ref(0)
const show = ref(0)
const winFlag = ref({
  left: true,
  right: true
})
let str = ['胜', '负', '平']
const itemClick = (n) => {
  let isDault = false
  if (str.includes(leftName.value) && str.includes(leftName.value)) {
    isDault = true
  }
  if (n == 1) {
    scout1.value += 1
  }
  if (n == 2) {
    scout2.value += 1
  }
  if (scout1.value > scout2.value) {
    winFlag.value.left = true
    winFlag.value.right = false
    if (isDault) {
      leftName.value = '胜'
      rightName.value = '负'
    }
  } else if (scout1.value < scout2.value) {
    winFlag.value.right = true
    winFlag.value.left = false
    if (isDault) {
      leftName.value = '负'
      rightName.value = '胜'
    }
  } else {
    winFlag.value.right = true
    winFlag.value.left = true
    if (isDault) {
      leftName.value = '平'
      rightName.value = '平'
    }
  }
}
const gohistory = () => {
  showToast('该功能开发中。。。')
}
const lshow = ref(true)
const showDialog = (n) => {
  if (n == 1) {
    lshow.value = true
  }
  if (n == 2) {
    lshow.value = false
  }
  show.value = true
}
</script>

<template>
  <van-dialog v-model:show="show" :showConfirmButton="false" closeOnClickOverlay>
    <div v-if="lshow" class="center" style="padding: 10px">
      <span style="font-weight: bold">请输入</span><input v-model="leftName" type="text" />
    </div>
    <div v-else class="center" style="padding: 10px">
      <span style="font-weight: bold">请输入</span><input v-model="rightName" type="text" />
    </div>
  </van-dialog>
  <div class="wrapper">
    <div style="width: 100%; flex: 1" class="flex">
      <div class="col">
        <div
          @click="showDialog(1)"
          class="top center"
          :class="winFlag.left ? 'win' : 'lose'"
          :style="leftName.length > 1 ? { fontSize: '14px' } : {}"
        >
          {{ leftName }}
        </div>
        <div class="middle center">
          {{ scout1 }}
        </div>
        <div @click="itemClick(1)" class="btn center">+</div>
      </div>
      <div class="col">
        <div
          @click="showDialog(2)"
          :style="rightName.length > 1 ? { fontSize: '14px' } : {}"
          class="top center"
          :class="winFlag.right ? 'win' : 'lose'"
        >
          {{ rightName }}
        </div>
        <div class="middle center">
          {{ scout2 }}
        </div>
        <div @click="itemClick(2)" class="btn center">+</div>
      </div>
    </div>
    <div class="history">
      <van-button round block type="primary" @click="gohistory">历史记录</van-button>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.middle {
  background: #fff;
  width: 60%;
  height: 2rem;
  font-size: 16px;
}
.win {
  background: rgb(27, 195, 27);
}
.lose {
  background: rgb(235, 58, 58);
}
.col {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 60px 0;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
}
.top {
  width: 80%;
  border: 3px solid #000;
  font-size: 2rem;
  height: 3rem;
  color: #fff;
  text-align: center;
  margin-bottom: 0px;
}
.btn {
  font-size: 30px;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #fff, rgb(190, 181, 57));
  border-radius: 100%;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
}
.history {
  padding: 0 40px;
}
.wrapper {
  display: flex;
  flex-direction: column;
  width: 60vw;
  height: 60vh;
  background-color: skyblue;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding-bottom: 60px;
  box-sizing: border-box;
}
</style>
