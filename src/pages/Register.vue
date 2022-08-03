<template>
  <div class="relative h-full">
    <header class="flex justify-between h-[44px] items-center text-white p-[15px]">
      <i class="w-[44px] h-[44px] ml-[-15px] flex-center-center" @click="$router.push('/login')">
        <van-icon name="arrow-left" class="text-[30px]" />
      </i>
      <Language icon="white" />
    </header>
    <section class="text-white text-[26px] px-[30px] absolute top-[50%] translate-y-[-50%] w-full">
      <p>{{ $t('創建一個新') }}</p>
      <p>{{ $t('賬戶') }}</p>
      <div class="text-white text-[14px] flex flex-col">
        <input
          class="mt-[49px] border-b-[#e8f0fe4d] border-b-[0.5px] bg-transparent placeholder:text-white pb-[9px]"
          type="text"
          :placeholder="$t('賬戶')"
          v-model="username"
        />
        <!-- <input
          class="mt-[49px] border-b-[#e8f0fe4d] border-b-[0.5px] bg-transparent placeholder:text-white pb-[9px]"
          type="text"
          :placeholder="$t('Trc20地址')"
          v-model="username"
        /> -->
        <input
          class="mt-[49px] border-b-[#e8f0fe4d] border-b-[0.5px] bg-transparent placeholder:text-white pb-[9px]"
          type="password"
          :placeholder="$t('請輸入密碼')"
          v-model="pass"
        />
        <input
          class="mt-[49px] border-b-[#e8f0fe4d] border-b-[0.5px] bg-transparent placeholder:text-white pb-[9px]"
          type="password"
          :placeholder="$t('重復密碼')"
          v-model="passcheck"
        />
        <input
          class="mt-[49px] border-b-[#e8f0fe4d] border-b-[0.5px] bg-transparent placeholder:text-white pb-[9px]"
          type="text"
          :placeholder="$t('邀請碼')"
          v-model="invite"
        />
      </div>
      <button class="text-[15px] w-full mt-[100px] bg-[#2979ff] h-[41px] rounded-[52px]" @click="userRegister">
        {{ $t('創建') }}
      </button>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Language from '../components/Language.vue'
import { Toast, Notify } from 'vant'
import { useI18n } from 'vue-i18n'
import { register } from './../api/index'

const router = useRouter()
const { t } = useI18n()

const username = ref('')
const pass = ref('')
const passcheck = ref('')
const invite = ref('')
const userRegister = async () => {
  // 用户名验证
  if (!username.value) {
    Notify(t('notify.username_require'))
    return false
  }
  // 用户名格式验证
  if (!/^[a-zA-Z0-9]{6,11}$/.test(username.value)) {
    Notify(t('notify.username_format'))
    return false
  }
  // 密码格式验证
  if (!pass.value || !/^[a-zA-Z0-9]{6,18}$/.test(pass.value)) {
    Notify(t('notify.password_format'))
    return false
  }
  // 重复密码验证
  if (pass.value != passcheck.value) {
    Notify(t('notify.check_password_different'))
    return false
  }
  // 邀请码
  if (!invite.value) {
    Notify(t('notify.invite_code_require'))
    return false
  }

  try {
    const res = await register({
      username: username.value,
      pass: pass.value,
      invite: invite.value
    })
    if (res.code === 0) {
      Toast.success(t('notify.register_success'))
      router.push('/login')
    } else {
      Toast.fail(res.msg)
    }
  } catch (e) {
    Toast.fail(e.message)
    return false
  }
}
</script>
