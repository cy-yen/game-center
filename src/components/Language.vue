<template>
  <img class="h-[26px] w-[26px]" src="./../assets/images/wangzhan@2x.png" alt="" @click="showLang" />
  <Teleport to="body">
    <van-overlay :show="show" class="z-10" @click="show = false">
      <div class="h-full flex items-center justify-center">
        <div class="bg-white w-[90%]" @click.stop>
          <section class="text-[19px] p-[20px] flex justify-between items-center border-b border-b-[#f5f5f5]">
            <span>選擇操作語言</span><van-icon class="text-[22px]" name="cross" @click="show = false" />
          </section>
          <section>
            <ul class="p-[20px]">
              <li
                class="border-b border-b-[#f5f5f5] p-[10px] flex items-center"
                v-for="(language, index) in languages"
                :key="language"
              >
                <van-switch v-model="language.checked" size="14px" />
                <span class="ml-[10px] text-[14px]"> {{ language.lang }} </span>
              </li>
            </ul>
          </section>
          <section class="flex justify-end p-[20px]">
            <van-button color="#6c757d" size="small" style="margin-right: 10px" @click="show = false">取消</van-button>
            <van-button color="#1989fa" size="small">确定</van-button>
          </section>
        </div>
      </div>
    </van-overlay>
  </Teleport>
</template>

<script setup>
import { ref, reactive } from 'vue'

const show = ref(false)
const showLang = () => (show.value = true)

const languages = reactive([
  { lang: 'cn', checked: true },
  { lang: 'en', checked: false }
])
</script>
