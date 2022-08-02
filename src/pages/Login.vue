<template>
  <div class="relative h-full">
    <header class="flex justify-end h-[44px] items-center text-white">
      <Language class="mr-[10px]" icon="white" />
      <span class="mx-[15px]" @click="$router.push('/register')">注册</span>
    </header>
    <section class="text-white text-[26px] px-[30px] absolute top-[50%] translate-y-[-50%] w-full">
      <p>登入</p>
      <p>您的帐户</p>
      <div class="text-white text-[14px] flex flex-col">
        <input
          v-model="username"
          class="mt-[49px] border-b-[#e8f0fe4d] border-b-[0.5px] bg-transparent placeholder:text-white pb-[9px]"
          type="text"
          placeholder="请输入您的帐户名"
        />
        <input
          v-model="pass"
          class="mt-[49px] border-b-[#e8f0fe4d] border-b-[0.5px] bg-transparent placeholder:text-white pb-[9px]"
          type="password"
          placeholder="请输入您的帐号密码"
        />
      </div>
      <button class="text-[15px] w-full mt-[100px] bg-[#2979ff] h-[41px] rounded-[52px]" @click="userLogin">
        登入
      </button>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Language from '../components/Language.vue'
import { Toast } from 'vant'
import { login as api_login } from './../api/index'
import { useStore } from './../store/index'

const store = useStore()
const router = useRouter()

const username = ref('')
const pass = ref('')
const userLogin = async () => {
  if (!username.value) {
    Toast.fail('请输入您的帐户名')
    return false
  }
  if (!pass.value) {
    Toast.fail('请输入您的帐号密码')
    return false
  }

  const res = await api_login({ username: username.value, pass: pass.value, google_verify_code: '' })
  store.setUserInfo(res.data)
  router.push('/home')
}
</script>
