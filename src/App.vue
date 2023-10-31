<template>
  <div class="bg-slate-300 min-h-screen">
    <nav class="bg-[#26134d] p-4 border-costum-b">
      <ul class="flex space-x-28 justify-center text-white">
        <li class="hover:text-[#ffd96f] duration-300 hover:bg-slate-300 py-2 px-4 rounded-md hover:bg-opacity-20"><router-link :to="{ name: 'about', params: { name: 'w' } }">Tentang Game</router-link></li>
        <li class="hover:text-[#ffd96f] duration-300 hover:bg-slate-300 py-2 px-4 rounded-md hover:bg-opacity-20"><router-link :to="{ name: 'media' }">Media</router-link></li>
        <li class="hover:text-[#ffd96f] duration-300 hover:bg-slate-300 py-2 px-4 rounded-md hover:bg-opacity-20"><router-link :to="{ name: 'sosial' }">Sosial</router-link></li>
      </ul>
    </nav>
    <!-- Tampilkan komponen yang sesuai dengan rute yang diakses -->
    <router-view />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>
<style scoped>
.border-costum-b {
  border-bottom: 1px solid #431d65;
}
</style>
