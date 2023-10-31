<template>
  <div class="bg-slate-300 min-h-screen">
    <router-link to="/"></router-link>
    <router-view />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>
<style scoped></style>
