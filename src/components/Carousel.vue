<template>
  <section class="grow-0 bg-content py-[10px]" id="carouesl">
    <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white">
      <van-swipe-item v-for="item in gameList" :key="item">
        <div
          class="h-[154px] image-bg bg-[#1a3647] bg-cover rounded-[10px] py-[10px] px-[15px] flex flex-col justify-between text-[15px]"
        >
          <p class="text-white">{{ item.game_name }}</p>
          <p class="text-[#94c2f3]">{{ item.coin_address }}</p>
          <div class="flex justify-between text-white">
            <span>{{ $t('投注') }}：{{ `${item.play_min}-${item.play_max}` }}</span>
            <span>{{ $t('賠率') }}：{{ item.game_vipodds_num }}{{ $t('倍') }}</span>
          </div>
          <div class="flex justify-between text-white">
            <span>{{ $t('僅接受USDT') }}</span>
            <span @click="$router.push(`/game-info/${item.game_code}`)">{{ $t('玩法介紹') }}</span>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
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
</script>
