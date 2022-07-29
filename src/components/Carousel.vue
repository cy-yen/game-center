<template>
  <section class="grow-0 bg-content py-[10px]" id="carouesl">
    <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in carouesl" :key="item"
        ><div
          class="h-[154px] image-bg bg-[#1a3647] bg-cover rounded-[10px] py-[10px] px-[15px] flex flex-col justify-between text-[15px]"
        >
          <p class="text-white">{{ item.title }}</p>
          <p class="text-[#94c2f3]">{{ item.wallet }}</p>
          <div class="flex justify-between text-white">
            <span>投注：{{ `${item.bet_begin}-${item.bet_ended}` }}</span>
            <span>赔率：{{ item.odds }}倍</span>
          </div>
          <div class="flex justify-between text-white">
            <span>仅接受USDT</span>
            <span>玩法介绍</span>
          </div>
        </div></van-swipe-item
      >
    </van-swipe>
  </section>
</template>

<script setup>
import { reactive } from '@vue/runtime-core'

const carouesl = reactive([
  { title: '幸运哈希', wallet: 'TReugqBL3B28aawzHxRjS55ky1VUXsV3ov', bet_begin: 10, bet_ended: 3000, odds: '1.98' },
  { title: '哈希十倍牛牛', wallet: 'TReugqBL3B28aawzHxRjS55ky1VUXsV3ov', bet_begin: 10, bet_ended: 3000, odds: '1.98' },
  { title: '哈希双龙', wallet: 'TReugqBL3B28aawzHxRjS55ky1VUXsV3ov', bet_begin: 10, bet_ended: 3000, odds: '1.98' },
  { title: '庄闲和', wallet: 'TReugqBL3B28aawzHxRjS55ky1VUXsV3ov', bet_begin: 10, bet_ended: 3000, odds: '1.98' }
])
</script>
