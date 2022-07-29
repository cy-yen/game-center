<template>
  <div class="flex flex-col h-full">
    <Header v-if="$route.meta.showHeader" />
    <section class="grow overflow-auto">
      <router-view />
    </section>
    <Footer v-if="$route.meta.showFooter" />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>
