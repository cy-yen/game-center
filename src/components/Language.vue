<template>
  <img
    class="h-[26px] w-[26px]"
    src="./../assets/images/wangzhan@2x.png"
    @click="show = true"
    v-if="props.icon === 'white'"
  />
  <img
    class="w-[20px]"
    src="data:image/png;base64,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"
    @click="show = true"
    v-else
  />
  <Teleport to="body">
    <van-overlay :show="show" class="z-10" @click="show = false">
      <div class="h-full flex items-center justify-center">
        <div class="bg-white w-[90%]" @click.stop>
          <section class="text-[19px] p-[20px] flex justify-between items-center border-b border-b-[#f5f5f5]">
            <span>{{ $t('選擇操作語言') }}</span>
            <van-icon class="text-[22px]" name="cross" @click="show = false" />
          </section>
          <section>
            <ul class="p-[20px]">
              <li
                class="border-b border-b-[#f5f5f5] p-[10px] flex items-center"
                v-for="(language, index) in languages"
                :key="language"
              >
                <van-switch
                  v-model="language.active"
                  size="14px"
                  @click="languages.forEach((e, i) => (e.active = index === i ? true : false))"
                />
                <span class="ml-[10px] text-[14px]"> {{ language.name }} </span>
              </li>
            </ul>
          </section>
          <section class="flex justify-end p-[20px]">
            <van-button color="#6c757d" size="small" style="margin-right: 10px" @click="show = false">
              {{ $t('取消') }}
            </van-button>
            <van-button color="#1989fa" size="small" @click="switchLang">{{ $t('確定') }}</van-button>
          </section>
        </div>
      </div>
    </van-overlay>
  </Teleport>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useStore } from '../store'
import { getAccount, update_user_api } from './../api/index'

const store = useStore()
const props = defineProps(['icon'])
const show = ref(false)
const languages = reactive([])

onMounted(async () => {
  const res = await getAccount({})
  const defaultLang = res.data.info?.set_lang || 'cn'

  store.setLanguage(defaultLang)
  languages.push(
    ...store.avaliableLanguage?.map((e) => {
      e.active = e.lang === defaultLang
      return e
    })
  )
})

const switchLang = async () => {
  store.setLanguage(languages.find((e) => e.active).lang)
  await update_user_api({
    set_lang: languages.find((e) => e.active).lang
  })
  show.value = false
}
</script>
