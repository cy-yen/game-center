<template>
  <footer class="h-[50px] bg-white shrink-0">
    <ul class="flex justify-between h-full">
      <li
        v-for="item in Object.keys(items)"
        class="text-[10px] flex-center-center flex-col grow"
        :class="[$route.name === item ? ` text-[#60cfff]` : ` text-[#666666]`]"
        :key="items[item].title"
        @click="$router.push({ path: `/${item}` })"
      >
        <i
          class="image-bg w-[26px] h-[26px]"
          :style="[
            $route.name === item
              ? `background-image: ${items[item].active}`
              : `background-image: ${items[item].default}`
          ]"
        ></i>
        {{ $t(items[item].title) }}
      </li>
    </ul>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const items = ref({
  home: {
    title: 'navigation.home',
    default: "url('./src/assets/images/shouye.png')",
    active: "url('./src/assets/images/shouye1.png')"
  },
  controls: {
    title: 'navigation.control',
    default: "url('./src/assets/images/controls.png')",
    active: "url('./src/assets/images/controls1.png')"
  },
  game: {
    title: 'navigation.game',
    default: "url('./src/assets/images/game.png')",
    active: "url('./src/assets/images/game1.png')"
  },
  table: {
    title: 'navigation.report',
    default: "url('./src/assets/images/table.png')",
    active: "url('./src/assets/images/table1.png')"
  },
  vip: {
    title: 'navigation.vip',
    default: "url('./src/assets/images/vip.png')",
    active: "url('./src/assets/images/vip1.png')"
  }
})
</script>
