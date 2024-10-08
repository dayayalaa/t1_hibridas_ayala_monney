<script setup>
import NavSuperior from './components/NavSuperior.vue';
import Endpoints from './components/Endpoints.vue';
</script>

<template>
    <div id="app">
   <NavSuperior></NavSuperior>
    <main class="p-4">
      <Endpoints></Endpoints>
      <router-view />
    </main>
  </div>
</template>