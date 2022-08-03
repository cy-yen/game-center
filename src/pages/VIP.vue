<template>
  <section class="px-[2.5%] relative">
    <img class="h-[166px] w-full" src="./../assets/images/photo1651562358.jpeg" alt="" />
    <img
      class="absolute w-[124px] h-[124px] rounded-[100%] left-[50%] translate-x-[-50%] bottom-[-50px]"
      src="./../assets/images/logo6.png"
    />
  </section>
  <section class="mt-[70px] mb-[20px]">
    <p class="text-white text-center">{{ store.userInfo.info.name }}</p>
  </section>
  <section class="w-[95%] bg-[#f0f3f7] p-[15px] rounded-[10px] ml-[2.5%] mb-[20px]">
    <div class="bg-white text-[#333333] p-[15px] rounded-[10px]">
      <p class="font-bold text-[14px]">$0.000</p>
      <p class="text-[#999999] mt-[10px]">{{ addr }}</p>
      <div class="h-[7px] bg-[#3427b6] mt-[20px]"></div>
    </div>
    <div class="bg-white text-[#333333] p-[15px] rounded-[10px] mt-[10px]">
      <p class="text-[14px]">{{ $t('設置') }}</p>
      <ul>
        <li class="flex py-[15px] border-b-[#cacaca] border-b" @click="showLanguage()">
          <div class="w-[41px] h-[41px] bg-[#d0cdf4] rounded-[5px] flex-center-center"><Language ref="language" /></div>
          <div class="flex flex-col justify-around pl-[10px]">
            <p class="text-[13px]">{{ $t('語言設置') }}</p>
            <p>{{ $t('選擇首選語言') }}</p>
          </div>
        </li>
        <li class="flex py-[15px] border-b-[#cacaca] border-b">
          <div class="w-[41px] h-[41px] bg-[#d0cdf4] rounded-[5px] flex-center-center">
            <img
              class="w-[20px]"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAA1tJREFUWEftmMtPE1EUxr9zZ4oQ8YUCbRWfhVbURI3PP8AYo7QEjXGBbozRuDM+lkYXbtSVGyNx4cKFNgHpYDRxa+JG4ysqHXwGcUZM1SigFqZzzAwYialwp9WGhM5ucs8536/fvff0ziVM8IcmOB/yBIwrYX/pdgg0EWMDA9UEWEzoIebbQxm+9PJD4518TMgZMFTVtlFV1BYQlo8BwGxzh7CsA52p7WYuoDkB1gba9yskzgEo+SXKzDZAKSKozJhF9Ht2GNzDEJu6jIakV0jPgHV+bQsRXyci4Ygx4xVsPsWK0LqMhhTAtCjQNr8ESjMgjhFhuhsHvBWDQ+u9OukJcPGs+Axf2ZRnBAqOwN3MpL/uevGp+Ws2Z5ZUJkKqSh1EiIzEt+pmdIcXFz0Bhv2JoyTotCvA/KzfTK/pwc7vYwkuqWiv8ZWKhwAqmB0jeZ1uxu7JQnoCjAS0JyAsc4rbtr21633jDRmhiF87AoEzw1PN53UjdlAmz4mRBqyb1jGHyvnDyOI3ksb9GuCELSNUNzs+l0qmdDvrloGkbkSXyuR5AqytvLZS8SkPRtZSQjejjbIiTlwkoJkg+MHoT5o/ZgI7MzL50g4CcSVUVb4QSGMw7fvU/WXbZxmBXzHhoNZJcDcL8yDP0FOxPpl8D4Ay5f4eUwTMzz9g8jkYrtYWsfsPkIHTHQgKg5gdJzOwnYbLRArDcnoVu2MEp4tYABTOuO/K8DsJFozLICxwNknG4s2kktvghWXbn6nsUW/v5oFss5R1k4T88UqVSl+DMDXfqZXJZ8Zd3YyukwaMVLevgCIeyxT/RzHfkkY0qxlZHRwNyIxbBLz5RyB/lOG1IFoFIHdAG7Sry2i4+j8AI8HEWYAOFwFzdbegDtb5tbVC0B7YzH0D1sl3fU0fxwMvKGAkkNgHoha3T7JV/9xs6iwCOg7I7uKig6PXy+hGXXSwUI06HNT2EnDR/WYZ5IieiukTahfPQ7zMF1CqiHz8ymh4C5B7NBvrKWgfHA8m2/jkAGTm3QNKujUXh8bLKc+UngLhUF6nGTAs9nADMR7U6HFybkIIqmfAkL+9XhXiqRexvGIZA0kzWi595Acu+MLBwGUCVuclLJfsXHpd0Y3YcQ+AcpULEVWwq49cf8xPWVAQR2PkoscAAAAASUVORK5CYII="
              alt=""
            />
          </div>
          <div class="flex flex-col justify-around pl-[10px]">
            <p class="text-[13px]">{{ $t('安全設置') }}</p>
            <p>{{ $t('設置登入密碼、提現密碼') }}</p>
          </div>
        </li>
        <li class="flex py-[15px] border-b-[#cacaca] border-b" @click="$router.push('/wallet')">
          <div class="w-[41px] h-[41px] bg-[#d0cdf4] rounded-[5px] flex-center-center">
            <img
              class="w-[20px]"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAThJREFUWEftmD1uwkAQhWdwGyQ6hPtg34BQpw5YymUoKeE2GGpqkhs4PzWILlLcBfMQthaQ+NF6jcMijeudN8/f7M5qlsnyjy33R2KwaIXuh6Dnhh6Bh0x4JuaHon+eOx6IQTwFc+9z/hKp+JRg0534TJgxUS238JUDQPQD4rYymRr0GuMRM3WvnMtYDqDwY9EJtgKpQb8R/qqyrpK/9vfy9c1Y3TDwsT5qOU4lywvE0aJb3Rt0x1C60bxzs4Pjn/CRERSDenXXIkjEfT25MlZhl1tttaMSl5HWRFMMmlA7jBGCJRK0/BTLTXKh9lqNWggKwaL9QwgKwYzA2btY2ozRITmY6pJk/fS1DN5L3GonpS9OddbPxda/LGyZpyaBgZVvM/+93/Lku9krgq5JMahL6tw6IViU4AZdWekpbUrCBgAAAABJRU5ErkJggg=="
              alt=""
            />
          </div>
          <div class="flex flex-col justify-around pl-[10px]">
            <p class="text-[13px]">{{ $t('投注錢包') }}</p>
            <p>{{ $t('添加、綁定投注錢包地址') }}</p>
          </div>
        </li>
        <li class="flex py-[15px] border-b-[#cacaca] border-b">
          <div class="w-[41px] h-[41px] bg-[#d0cdf4] rounded-[5px] flex-center-center">
            <img
              class="w-[20px]"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <div class="flex flex-col justify-around pl-[10px]" @click="userLogout()">
            <p class="text-[13px]">{{ $t('退出') }}</p>
            <p>{{ $t('退出App') }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useStore } from '../store/index'
import { logout as api_logout, getAccount } from './../api/index'
import Language from '../components/Language.vue'
import { onMounted, ref } from 'vue'

const store = useStore()
const router = useRouter()

const addr = ref('')
onMounted(async () => {
  const res = await getAccount({})
  addr.value = res.data.info.playgame_token
})

const userLogout = async () => {
  await api_logout({})
  store.setUserInfo({})
  router.push('/home')
}
</script>
