<template>
  <img
    class="w-[22px] h-[28px]"
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAAAXNSR0IArs4c6QAAAftJREFUeF7t2c1JA2EUheFz1ypiE9ZgBbrXbrQAq9ECBPeWIDYhxOxHAgouTOabC28k+Gb9zZnJM4f5uxV/qECh6YZHYLgEAgsMC8DxNlhgWACOt8ECwwJwvA0WGBaA422wwLAAHG+DBYYF4HgbLDAsAMfbYIFhATjeBv8l8DRN50nuk1wmOYaP5dDi10mektxV1eu2g9/a4C/clyRnh/bP93y870kuqurtt/3uAn5Icr3ngz3U3T1W1c1S4A8vC8Pne11VJwIPey1euKqq06XAXiLGnVuXiM0ThDe5eeTeTW6T++Mx7SrJ0fy+/tWKVZLnJLetx7R/RQX+Wd/kQNxNtMACwwJwvA0WGBaA422wwLAAHG+DBYYF4HgbLDAsAMfvbLAzuZ36zuTgcn7H9z5XTtPkB/fxM9T64O5MbhzYmdy4VWulM7kW2/hGrUuEM7kx4N5NzpncrK4zuVmiPSzwVRlGFlhgWACOt8ECwwJwvA0WGBaA422wwLAAHO9Eow/sRKNvt2jL3sceJxqLkFufK51ojBs70Ri3aq10otFiG9+odYlwojEG3LvJOdGY1XWiMUu0hwW+KsPIAgsMC8DxNlhgWACOt8ECwwJwvA0WGBaA422wwLAAHG+DBYYF4HgbLDAsAMfbYIFhATjeBgsMC8DxNlhgWACO/wTeU4pZTCLWzgAAAABJRU5ErkJggg=="
    draggable="false"
    @click="show = true"
  />
  <Teleport to="body">
    <van-popup v-model:show="show" position="left" :style="{ width: '60%', height: '100%' }">
      <div class="bg-[#1a3647] h-full p-[15px] text-[15px] text-white leading-tight">
        <section class="flex items-center">
          <van-icon name="arrow-left" class="text-[20px]" />
          <img
            class="w-[36px] ml-[15px]"
            src="data:image/png;base64,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"
            alt=""
          />
          <span class="ml-[15px]">{{ userName }}</span>
        </section>
        <section class="flex justify-between my-[26px] items-center">
          <div>
            <p class="text-[25px]">$0.000</p>
            <p class="text-[#edcbdd] text-[14px]">{{ $t('??????') }}</p>
          </div>
          <div class="w-[41px] h-[41px] flex-center-center bg-[#00b7ff] rounded-[100%]">
            <img
              class="w-[20px]"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
        </section>
        <section>
          <ul>
            <li
              class="border-b-[0.5px] border-b-[#4837f9] py-[15px] px-[20px] flex justify-between items-center"
              @click="goto('/controls')"
            >
              <div class="flex leading-[20px]">
                <img
                  class="w-[20px]"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAABUFJREFUeF7tnE9sFGUYxp9npn/4k7K7hbZTBDVBET1gonjQGGNi9GK84KUKB+RQQ2OCHpSE+A8SFQ5wEBNiJIYQJGi8aAzeNIYbRo1REyIGgpBtd2vb7daKtLvzmEUwtPvv285MdzZ+e93nfd/n+8238858M/sR9hOIAANF22DEGuDYmFbMuv77EAq5gjO0oYdTcTtmsQU4mtOmInQSwLoSNAK/UhzoTfGHOEGMHUBJzObwkk+9Q6DjZlgCrlJ8xUvx3bhAjBXAdF6rHOEopCdrASL52RJgeyLB8WaDjA3A4Qk96lDHBdxiCOWS7xe3rO5uP22oj0TWdICS3Gwer0l6FYDb4CgLkvZ6Sectkn6DsaHImwrw8pjWuI4+IvFIsNHwK7cdW3uWczhYnsajmwZwZLzwFFznQwirGrddIYLIOuC23gS/DCWfYZJFByipI5PHfkg7/706CfXjCzzoJbCb5GyomaskC3sANT1nJ3WHr2vXdvdHPLgzxMwzfckl5yOuE/oMqOo3PV7Y4tA5DKIr6kFdzz/pgIO9SX4SZb3IZ+DIiJaj0z8E8rkoB1IltwAdmU04O9eSV6KoHynAzLg2ytVJCHdHYd48J39WEQP9K/mLeYyZMjKAwzntIHQAwFIzK5Gr/gL8F71k2wdhVgod4MSEkjPEEUFPh2k0vFz6eNp3nl/XzckwcoYKMJPXg/J1AsDtYZiLMMf5NnJgVYLfBq0RCsDSCkpm0t8FcC+A9qCmFiWemCG5u7cLB0lqoTUDA8z8qT4UcUzSEws10dQ48pQcbOvv4uhCfAQCmBmbfVxt7jEI3kKKxyaGSMvn1v4Uv27U04IASmrLTGEvfO0C4DRaNKb6osS3vST2kCyaemwYYHpCt7kOTkh6yLRIK+kknO7o5LMrl/Gyie+GAGYmtBnUEQEpk+QtrBmDuN1L8fN6YzACeOGClixL+QcE7ohgBaWex2Z9L0iH+pLOyyRnqpmoCzCd1wbHv7aCcm+zRtLMugS+JznQm+C5Sj5qAszmtc0v6j0Qy5s5iKbXFqbocKgvwePzvVQEeHZUXck2/zDILU03HyMDpI7qivOC53H6hq0ygKM53Xf9gfadMfIeJytnCyoMrEl1/FgyVQngJt9BZ5wcx82L4+PvniS/qwgwbmbj7qduF477AJrtzwIMeARqX8Zk5RU79IVpDfr61Ot295nq5+uGJ4rHQN5jEk/hdy/lbDbRVtKkc8VBgoOm8QVyYG2CvxldxtwQpcd1q+PoomkRQYf7k+6QqX6+biTnnwHwgEl86XW3vqRzl4m2kiYzqTckvWkc73Oj182fLMDrBCxAOwPLfzz2J2zPgXNnhW0iN/GwTWTu5LBNxDYR20TKCNgL6XlIbBOxTaTqnZptIraJ2CZim0i9h+S2idgmYptINQJ2QbUCGbucZZez7HJW1ZOmXc6yy1lzCNgmYptIOQG7nGWXs6o/Z7dNxDYR20TqvYdi70TsncjcOXLpkpa2J/BYvZnz3/eFmYted2fZG0ym8dm8HvaBpIleRUwv5L9tN3Jfzmt9G7DepFZJ417FNz0Vdo+zL1iaEqyiswAtwIAEAobXnYGlXdVIvS5gRcBarRkuTMPh/v4ET1UaQE2A56TOFZMakeGJvTUJGbgWrnSCq1Mp5uarawJs9KGSgZXWlSzGrVzr0jFwbgEaQKolsQCbAHB0VF2Fdv0xfzfdgFZaMdx3Z7mmp6d8h8y6lzEjOQ0S2vc/2Ceh8oEt/dka3NOXYmkfsLJPXYCtOF0W07MFGJC2BWgBBiQQMPwfVxYXjf8iWcoAAAAASUVORK5CYII="
                  alt=""
                />
                <span class="ml-[10px]">{{ $t('navigation.control') }}</span>
              </div>
              <van-icon name="arrow" class="text-[14px]" />
            </li>
            <li
              class="border-b-[0.5px] border-b-[#4837f9] py-[15px] px-[20px] flex justify-between items-center"
              @click="goto('/game')"
            >
              <div class="flex leading-[20px]">
                <img class="w-[20px]" src="./../assets/images/btn2.97c07c75.png" alt="" />
                <span class="ml-[10px]">{{ $t('navigation.game') }}</span>
              </div>
              <van-icon name="arrow" class="text-[14px]" />
            </li>
            <li
              class="border-b-[0.5px] border-b-[#4837f9] py-[15px] px-[20px] flex justify-between items-center"
              @click="goto('/table')"
            >
              <div class="flex leading-[20px]">
                <img
                  class="w-[20px]"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAp5JREFUeF7t3M+ODFEcxfHvWZjgKViYYMOINWEj8RyGIRLxJGIxmfHvOVixsPUnLAgWPIUREj+50p1YmNF9T2Wq085d16l761Onunc/kWUJyEonTADNEgRw0QCr6jRwFbgIHJmc7zPwFLgv6Y155j3jk/2vARf2Y//BGlhVh4C7wBXY9afhZ0MEbkv6NiTkWPsPAjg5/BPg3Iwoz4DLQyGOuf9QgK1V6zPiTS/bknRjzsxfL6+qB5Pmz3O7bUnX5wn87VobsKrWgJd7fLa7nbF9zmuS3joPUVVngBdj7T8E4Baw0YmwKelmZ/Z3rKq2gfan0bPs/YcA/ACs9pweeC/pZGd2CvgRONZ5D3v/IQC/Awc6H2BH0uHO7BRw1P13Bayqch5sWbKS9ixZAP/xpgNofgoBDKApYMbTwACaAmY8DQygKWDG08AAmgJmPA0MoClgxtPAAJoCZjwNDKApYMbTwACaAmY8DQygKWDG08AAmgJmPA0MoClgxtPAAJoCZjwNDKApYMbTwACaAmY8DQygKWDG08AAmgJmPA0MoClgxtPAAJoCZjwNDKApYMbTwACaAmY8DQygKWDG08AAmgJmPA0MoClgxtPAAJoCZjwNDKApYMbTwBEBV4CjkylsbRpbm8r2P6zXkwFpbdrcF0ltrMqua6a5MVXVrmuId4A2pW0Z11fgFvBI0swjX2YCnGpV1Xng8RIi7gCXJD2ftxlzAbabV1Wbk9XmZS3TWpf0sOeBegBbpv1OnOrZcAEzr4Cz83y2fz7D3ICTFra5f5sLiNFzpA1J93qCLdMLeLxNXuvddMFyq5I+9Z6pF/Ag0H54l2GtSPrR+yABhFEATwDvet/aguX2/xNeMIBRj9P1CY964gXbPIDmCwmgCfgLR1JtYNl2Mx4AAAAASUVORK5CYII="
                  alt=""
                />
                <span class="ml-[10px]">{{ $t('navigation.report') }}</span>
              </div>
              <van-icon name="arrow" class="text-[14px]" />
            </li>
            <li
              class="border-b-[0.5px] border-b-[#4837f9] py-[15px] px-[20px] flex justify-between items-center"
              @click="goto('/vip')"
            >
              <div class="flex leading-[20px]">
                <img
                  class="w-[20px]"
                  src="data:image/png;base64,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"
                  alt=""
                />
                <span class="ml-[10px]">{{ $t('??????') }}</span>
              </div>
              <van-icon name="arrow" class="text-[14px]" />
            </li>
          </ul>
        </section>
        <section class="mt-[26px] flex-center-center">
          <button
            class="border-[0.5px] border-[#ee4581] leading-[41px] rounded-[20px] px-[25px] mr-[10px]"
            @click="$router.push('/login')"
            v-if="!isLogin"
          >
            {{ $t('??????') }}
          </button>
          <button
            class="border-[0.5px] border-[#ee4581] leading-[41px] rounded-[20px] px-[25px]"
            @click="$router.push('/register')"
            v-if="!isLogin"
          >
            {{ $t('??????') }}
          </button>
          <button
            class="border-[0.5px] border-[#ee4581] leading-[41px] rounded-[20px] px-[25px]"
            @click="userLogout()"
            v-if="isLogin"
          >
            {{ $t('??????') }}
          </button>
        </section>
      </div>
    </van-popup>
  </Teleport>
</template>

<script setup>
import { computed } from '@vue/reactivity'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useStore } from '../store/index'
import { logout as api_logout } from './../api/index'

const { t } = useI18n()
const store = useStore()
const isLogin = computed(() => store.userInfo?.token)
const userName = computed(() => (store.userInfo?.info ? store.userInfo.info.name : t('?????????')))

const show = ref(false)
const router = useRouter()

const goto = (_path) => {
  router.push(_path)
  show.value = false
}

// ????????????
const userLogout = async () => {
  await api_logout({})
  store.setUserInfo({})
  show.value = false
  router.push('/home')
}
</script>
