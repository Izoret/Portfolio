<script lang="ts" setup>
import {computed} from 'vue';
import {useRoute} from 'vue-router';

const route = useRoute();
const links = [
  {name: "Présentation", path: "/presentation"},
  {name: "Projets", path: "/projects"},
  {name: "Contact", path: "/contact"},
];

const isProjectsActive = computed(() => {
  return route.path.startsWith('/projects');
});

const isLinkActive = computed(() => (path: string) => {
  if (path === '/projects') {
    return isProjectsActive.value;
  }
  return route.path === path;
});
</script>

<template>
  <nav class="bg-dark/50 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-white/10">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between h-16">
        <div class="flex space-x-8">
          <div class="flex-shrink-0 flex items-center">
            <router-link class="text-2xl font-bold gradient-text" to="/">
              Raphaël Izoret
            </router-link>
          </div>
          <div class="hidden md:flex items-center space-x-4">
            <router-link
                v-for="link in links"
                :key="link.path"
                :class="{ 'gradient-text': isLinkActive(link.path) }"
                :to="link.path"
                class="nav-link"
            >
              {{ link.name }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>