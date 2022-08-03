<template>
  <div class="relative h-full">
    <header class="flex justify-end h-[44px] items-center text-white">
      <Language class="mr-[10px]" icon="white" />
      <span class="mx-[15px]" @click="$router.push('/register')">{{ $t('註冊') }}</span>
    </header>
    <section class="text-white text-[26px] px-[30px] absolute top-[50%] translate-y-[-50%] w-full">
      <p>{{ $t('登入') }}</p>
      <p>{{ $t('您的賬戶') }}</p>
      <div class="text-white text-[14px] flex flex-col">
        <input
          v-model="username"
          class="mt-[49px] border-b-[#e8f0fe4d] border-b-[0.5px] bg-transparent placeholder:text-white pb-[9px]"
          type="text"
          :placeholder="$t('請輸入您的賬戶名')"
        />
        <input
          v-model="pass"
          class="mt-[49px] border-b-[#e8f0fe4d] border-b-[0.5px] bg-transparent placeholder:text-white pb-[9px]"
          type="password"
          placeholder="$t('請輸入您的賬號密碼')"
        />
      </div>
      <button class="text-[15px] w-full mt-[100px] bg-[#2979ff] h-[41px] rounded-[52px]" @click="userLogin">
        {{ $t('登入') }}
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
import { useI18n } from 'vue-i18n'

const store = useStore()
const router = useRouter()
const { t } = useI18n()
const username = ref('')
const pass = ref('')

// 用户登入
const userLogin = async () => {
  // 用户名验证
  if (!username.value) {
    Toast.fail(t('請輸入您的賬戶名'))
    return false
  }
  // 用户密码验证
  if (!pass.value) {
    Toast.fail(t('請輸入您的賬號密碼'))
    return false
  }

  const res = await api_login({ username: username.value, pass: pass.value, google_verify_code: '' })
  store.setUserInfo(res.data)
  router.push('/home')
}
</script>
