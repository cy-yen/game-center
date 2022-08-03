<template>
  <section class="flex justify-center">
    <img src="./../assets/images/ezgif-5-13b11b7b26.gif" alt="" />
  </section>
  <section class="text-center my-[20px] text-[15px] text-[#f6fbf9]">
    <p>{{ $t('全球區塊鏈TRC20-USDT競彩平台') }}</p>
    <p>{{ $t('公平，公證，公開') }}</p>
    <p class="mt-[20px]">
      <span>{{ $t('客服') }}：</span> {{ $t('Diamond钻石哈希客服') }}
    </p>
    <p>
      <span>{{ $t('頻道') }}：</span> {{ $t('Diamond钻石哈希聊天群') }}
    </p>
  </section>
  <section class="mx-[2.5%] rounded-[19px] bg-[#f0f3f7] px-[8px] pb-[42px] mb-[20px]">
    <p class="text-[#1b1a1a] text-[15px] py-[16px] px-[13px]">{{ $t('遊戲介紹') }}</p>
    <ul class="w-full flex overflow-x-auto">
      <li
        v-for="game in gameList"
        :key="game.coin_address"
        class="min-w-[229px] h-[97px] rounded-[12px] text-12 bg-white px-[13px] py-[14px] flex justify-between mr-[36px] last:mr-0"
      >
        <img :src="getApiImage(game.game_ico)" width="64" height="64" alt="" />
        <div>
          <p>{{ game.game_name }}</p>
          <p class="my-[5px]">
            <span class="mr-[20px]">{{ $t('賠率') }}</span>
            <span class="text-[#25ac44]">{{ game.game_odds_num }}</span>
          </p>
          <p class="ml-[62px] mt-[10px] text-[#3a99ff]" @click="$router.push(`/game-info/${game.game_code}`)">
            {{ $t('立即投注') }}
          </p>
        </div>
      </li>
    </ul>
    <section
      id="about"
      class="p-[16px] bg-white rounded-[19px] mt-[20px]"
      style="box-shadow: 0 1px 3px 0px hsl(0deg 0% 79% / 35%)"
    >
      <p class="text-[15px] leading-tight">{{ $t('開獎記錄') }}</p>
    </section>
    <section
      id="about"
      class="p-[16px] bg-white rounded-[19px] mt-[20px]"
      style="box-shadow: 0 1px 3px 0px hsl(0deg 0% 79% / 35%)"
    >
      <p class="text-[15px] leading-tight">{{ $t('關於Diamond钻石哈希娱乐城') }}</p>
      <p class="text-[23px] mt-[20px] text-[#1b1a1a80] leading-tight">
        {{ $t('基於區塊鏈交易產生的哈希值進行競猜遊戲平台') }}
      </p>
      <p class="text-[27px] text-[#373737] mt-[22px] leading-tight">{{ $t('Diamond钻石哈希娱乐城') }}</p>
      <img class="w-full" src="./../assets/images/logo-search-grid-1x.png" alt="" />
      <div class="flex flex-wrap justify-between">
        <dl class="w-[calc(50%-10px)] mt-[30px]">
          <dt class="text-[20px] mb-[10px] leading-tight">{{ $t('首頁.Q1') }}</dt>
          <dd class="text-[#373737]">{{ $t('首頁.A1') }}</dd>
        </dl>
        <dl class="w-[calc(50%-10px)] mt-[30px]">
          <dt class="text-[20px] mb-[10px] leading-tight">{{ $t('首頁.Q2') }}</dt>
          <dd class="text-[#373737]">{{ $t('首頁.A2') }}</dd>
        </dl>
        <dl class="w-[calc(50%-10px)] mt-[30px]">
          <dt class="text-[20px] mb-[10px] leading-tight">{{ $t('首頁.Q3') }}</dt>
          <dd class="text-[#373737]">{{ $t('首頁.A3') }}</dd>
        </dl>
        <dl class="w-[calc(50%-10px)] mt-[30px]">
          <dt class="text-[20px] mb-[10px] leading-tight">{{ $t('首頁.Q4') }}</dt>
          <dd class="text-[#373737]">{{ $t('首頁.A4') }}</dd>
        </dl>
        <dl class="w-[calc(50%-10px)] mt-[30px]">
          <dt class="text-[20px] mb-[10px] leading-tight">{{ $t('首頁.Q5') }}</dt>
          <dd class="text-[#373737]">{{ $t('首頁.A5') }}</dd>
        </dl>
        <dl class="w-[calc(50%-10px)] mt-[30px]">
          <dt class="text-[20px] mb-[10px] leading-tight">{{ $t('首頁.Q6') }}</dt>
          <dd class="text-[#373737]">{{ $t('首頁.A6') }}</dd>
        </dl>
      </div>
    </section>
  </section>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { useStore } from '../store'
import { gamecoinaddress } from './../api/index'

const store = useStore()
const gameList = reactive([])
onMounted(async () => {
  gameList.splice(0)
  const res = await gamecoinaddress({})
  gameList.push(...res.data)
  store.setGames(res.data)
})

// 获取游戏图片
const getApiImage = (_path) => store.imageServerPath + _path
</script>
