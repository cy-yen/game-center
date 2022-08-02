<template>
  <footer class="h-[50px] bg-white shrink-0">
    <ul class="flex justify-between h-full">
      <li
        v-for="item in Object.keys(items)"
        class="text-[10px] flex-center-center flex-col grow before:image-bg before:w-[26px] before:h-[26px]"
        :class="[
          $route.name === item ? `${items[item].active} text-[#60cfff]` : `${items[item].default} text-[#666666]`
        ]"
        :key="items[item].title"
        @click="$router.push({ path: `/${item}` })"
      >
        {{ $t(items[item].title) }}
      </li>
    </ul>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const items = ref({
  home: { title: 'navigation.home', default: 'before:bg-shouye', active: 'before:bg-shouye1' },
  controls: { title: 'navigation.control', default: 'before:bg-control', active: 'before:bg-control1' },
  game: { title: 'navigation.game', default: 'before:bg-game', active: 'before:bg-game1' },
  table: { title: 'navigation.report', default: 'before:bg-table', active: 'before:bg-table1' },
  vip: { title: 'navigation.vip', default: 'before:bg-vip', active: 'before:bg-vip1' }
})
</script>
