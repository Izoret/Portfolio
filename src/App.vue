<script lang="ts" setup>
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <div class="min-h-screen">
    <Navigation/>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>