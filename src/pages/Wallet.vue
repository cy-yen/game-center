<template>
  <section class="h-[44px] text-[15px] text-white flex items-center px-[15px] bg-[#3629b7]">
    <i class="w-[44px] h-[44px] ml-[-15px] flex-center-center" @click="$router.push('/home')">
      <van-icon name="arrow-left" class="text-[30px]" />
    </i>
    {{ $t('修改錢包地址') }}
  </section>
  <p class="bg-[#f1acb2] text-[#7d1737] mt-[40px] mx-[10px] p-[15px] rounded-[10px] text-[13.5px]">
    {{ $t('修改錢包地址.hint') }}
  </p>
  <section class="bg-[#f0f3f7] p-[15px] mx-[10px] mt-[20px] rounded-[10px]">
    <div class="text-[#333] p-[15px] bg-white rounded-[10px]">
      <p class="text-[14px]">{{ $t('錢包地址') }}</p>
      <input v-model="addr" type="text" class="w-full mt-[20px] border-b-[0.5px] border-b-[#ddd]" />
      <p class="text-right text-[#999] text-[12px] mt-[10px]">{{ $t('TRC20協議') }}</p>
      <button
        class="bg-[#2979ff] w-full leading-[41px] rounded-[52px] text-[15px] text-white mt-[20px]"
        @click="updateWallet"
      >
        {{ $t('立即更新') }}
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { update_user_api } from './../api/index'

const router = useRouter()
const addr = ref('')
const updateWallet = async () => {
  await update_user_api({
    playgame_token: addr.value
  })
  router.push('/vip')
}
</script>
