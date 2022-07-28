<template>
    <footer class="h-[50px] bg-[#ffffff]">
        <ul class="flex justify-between h-full">
            <li class="text-[10px] flex flex-col justify-center items-center grow"
                :class="[item.active ? 'text-[#60cfff]' : 'text-[#666666]']" v-for="(item, index) in items"
                :key="item.title" @click="items.forEach((e, i) => e.active = i === index ? true : false)">
                {{ item.title }}</li>
        </ul>
    </footer>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
    { title: "首页", active: true },
    { title: "控制器", active: false },
    { title: "游戏", active: false },
    { title: "报表", active: false },
    { title: "会员", active: false }])

</script>