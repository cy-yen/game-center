<template>
  <footer class="h-[50px] bg-white shrink-0">
    <ul class="flex justify-between h-full">
      <li
        v-for="(item, index) in Object.keys(items)"
        class="text-[10px] flex flex-col justify-center items-center grow before:image-bg before:w-[26px] before:h-[26px]"
        :class="[
          route.name === item ? `${items[item].active} text-[#60cfff]` : `${items[item].default} text-[#666666]`
        ]"
        :key="items[item].title"
        @click="router.push({ path: `/${item}` })"
      >
        {{ items[item].title }}
      </li>
    </ul>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const items = ref({
  home: { title: '首页', default: 'before:bg-shouye', active: 'before:bg-shouye1' },
  controls: { title: '控制器', default: 'before:bg-control', active: 'before:bg-control1' },
  game: { title: '游戏', default: 'before:bg-game', active: 'before:bg-game1' },
  table: { title: '报表', default: 'before:bg-table', active: 'before:bg-table1' },
  vip: { title: '会员', default: 'before:bg-vip', active: 'before:bg-vip1' }
})
</script>
