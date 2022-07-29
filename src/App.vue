<template>
  <div class="flex flex-col h-full">
    <Header />
    <section class="grow overflow-auto">
      <router-view />
    </section>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>
