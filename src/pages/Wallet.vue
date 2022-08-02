<template>
  <section class="h-[44px] text-[15px] text-white flex items-center px-[15px] bg-[#3629b7]">
    <i class="w-[44px] h-[44px] ml-[-15px] flex-center-center" @click="$router.push('/home')">
      <van-icon name="arrow-left" class="text-[30px]" />
    </i>
    修改錢包地址
  </section>
  <p class="bg-[#f1acb2] text-[#7d1737] mt-[40px] mx-[10px] p-[15px] rounded-[10px] text-[13.5px]">
    注意!填寫正確的投注錢包地址，投注後能即時結算，否則會因為無賬號綁定而不進行開獎。
  </p>
  <section class="bg-[#f0f3f7] p-[15px] mx-[10px] mt-[20px] rounded-[10px]">
    <div class="text-[#333] p-[15px] bg-white rounded-[10px]">
      <p class="text-[14px]">钱包地址</p>
      <input type="text" class="w-full bg-black" />
      <p class="text-right text-[#999] text-[12px] mt-[10px]">TRC20協議</p>
      <button class="bg-[#2979ff] w-full leading-[41px] rounded-[52px] text-[15px] text-white mt-[20px]">
        立即更新
      </button>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(async () => {})
</script>
