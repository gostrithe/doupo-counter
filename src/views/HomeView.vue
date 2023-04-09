<script setup>
// import { computed } from 'vue';
import { ref } from 'vue'

// import TheWelcome from '../components/TheWelcome.vue'
const show = ref(false)
const gameName = ref('比赛')
const leftTeam = ref('左方')
const rightTeam = ref('右方')
const gameNameCopy = ref('')
const leftTeamCopy = ref('')
const rightTeamCopy = ref('')
const scout1 = ref(0)
const scout2 = ref(0)
const endText = ref('')
const showSelect1 = ref(false)
const showSelect2 = ref(false)
const items = ref([
  {
    text: '+3',
    value: 3
  },
  {
    text: '+2',
    value: 2
  },
  {
    text: '+1',
    value: 1
  }
])

const showPopup = () => {
  show.value = true
}
const begin = () => {
  flag.value = true

  showPopup()
}
const flag = ref(true)
const end = () => {
  if (scout1.value > scout2.value) {
    endText.value = `${leftTeam.value}获得了胜利`
  } else if (scout1.value < scout2.value) {
    endText.value = `${rightTeam.value}获得了胜利`
  } else {
    endText.value = `平局`
  }
  flag.value = false
}
const itemClick = (value, n) => {
  if (n == 1) {
    showSelect1.value = false
    scout1.value += value
  }
  if (n == 2) {
    showSelect2.value = false
    scout2.value += value
  }
}
const btnClick = (n) => {
  if (n == 1) {
    showSelect1.value = true
  }
  if (n == 2) {
    showSelect2.value = true
  }
}
const onSubmit = () => {
  show.value = false
  gameName.value = gameNameCopy.value
  leftTeam.value = leftTeamCopy.value
  rightTeam.value = rightTeamCopy.value
  scout2.value = 0
  scout1.value = 0
}
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <van-popup round v-model:show="show" style="padding: 40px">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field v-model="gameNameCopy" name="比赛名称" label="比赛名称" placeholder="比赛" />
          <van-field
            v-model="leftTeamCopy"
            name="左方"
            label="左方"
            placeholder="左方"
            :rules="[{ required: true, message: '请输入' }]"
          />
          <van-field
            v-model="rightTeamCopy"
            name="右方"
            label="右方"
            placeholder="右方"
            :rules="[{ required: true, message: '请输入' }]"
          />
        </van-cell-group>
        <div>
          <van-button round block type="primary" native-type="submit"> 确定 </van-button>
        </div>
      </van-form>
    </van-popup>
    <div class="box" style="background: lightskyblue">
      <div class="control flexSB">
        <button @click="begin">开始计分</button>
        <button @click="end">计分结束</button>
      </div>
      <div class="head">
        <div class="htitle center mb10" style="font: 2rem bold">{{ gameName }}</div>
        <div class="team flexC mb10">
          <div class="titleh center mr40 nameBox">{{ leftTeam }}</div>
          <div class="titleh nameBox center">{{ rightTeam }}</div>
        </div>
      </div>
      <div class="scout flexC mb10">
        <div class="left mr40 scoutBox center">{{ scout1 }}</div>
        <div class="right scoutBox center">{{ scout2 }}</div>
      </div>

      <div v-if="flag" class="btns flexC">
        <div class="btnLeft btn mr40" v-show="!showSelect1" @click="btnClick(1)"></div>
        <div class="selection mr40" v-show="showSelect1">
          <div
            @click="itemClick(item.value, 1)"
            class="item"
            v-for="(item, index) in items"
            :key="index"
          >
            {{ item.text }}
          </div>
        </div>
        <div class="btnRight btn" v-show="!showSelect2" @click="btnClick(2)"></div>
        <div class="selection" v-show="showSelect2">
          <div
            @click="itemClick(item.value, 2)"
            class="item"
            v-for="(item, index) in items"
            :key="index"
          >
            {{ item.text }}
          </div>
        </div>
      </div>
      <div v-else style="color: red; text-align: center">{{ endText }}</div>
    </div>
  </main>
</template>

<style scoped>
.flex {
  display: flex;
}
.flexC {
  display: flex;
  justify-content: center;
}
.flexSB {
  display: flex;
  justify-content: space-between;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.mr40 {
  margin-right: 40px;
}
.mb10 {
  margin-bottom: 10px;
}
.nameBox {
  background: darkred;
  padding: 0 20px;
  height: 2rem;
  color: #fff;
}
.scoutBox {
  width: 60px;
  height: 1.5em;
  background: #ddd;
  border-radius: 8px;
  color: rgb(242, 97, 97);
  font-weight: bold;
  font-size: 20px;
}
.btn {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background: rgb(90, 90, 169);
}
.btn:active {
  transform: scale(1.1);
  background: rgb(72, 72, 202);
}
.item {
  background: #fff;
  width: 60px;
  border: 1px solid #000;
  text-align: center;
}
.item:active {
  background: #ccc;
}
</style>
