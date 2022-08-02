<template>
  <div class="relative h-full">
    <header class="flex justify-between h-[44px] items-center text-white p-[15px]">
      <i class="w-[44px] h-[44px] ml-[-15px] flex-center-center" @click="$router.push('/login')">
        <van-icon name="arrow-left" class="text-[30px]" />
      </i>
      <Language icon="white" />
    </header>
    <section class="text-white text-[26px] px-[30px] absolute top-[50%] translate-y-[-50%] w-full">
      <p>創建一個新</p>
      <p>帐户</p>
      <div class="text-white text-[14px] flex flex-col">
        <input
          class="mt-[49px] border-b-[#e8f0fe4d] border-b-[0.5px] bg-transparent placeholder:text-white pb-[9px]"
          type="text"
          placeholder="賬戶"
        />
        <input
          class="mt-[49px] border-b-[#e8f0fe4d] border-b-[0.5px] bg-transparent placeholder:text-white pb-[9px]"
          type="text"
          placeholder="Trc20地址"
        />
        <input
          class="mt-[49px] border-b-[#e8f0fe4d] border-b-[0.5px] bg-transparent placeholder:text-white pb-[9px]"
          type="password"
          placeholder="請輸入密碼"
        />
        <input
          class="mt-[49px] border-b-[#e8f0fe4d] border-b-[0.5px] bg-transparent placeholder:text-white pb-[9px]"
          type="password"
          placeholder="重復密碼"
        />
      </div>
      <button class="text-[15px] w-full mt-[100px] bg-[#2979ff] h-[41px] rounded-[52px]" @click="userRegister">
        創建
      </button>
    </section>
  </div>
</template>

<script setup>
import Language from '../components/Language.vue'
</script>
