<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const links = [
  { name: "Présentation", path: "/presentation" },
  { name: "Projets", path: "/projects" },
  { name: "Contact", path: "/contact" },
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

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav class="bg-dark/50 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-white/10">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <div class="flex space-x-6 items-center">
          <!-- Profile Picture -->
          <img src="/ma_tete.png" alt="Photo Raphaël" class="h-12 w-12 rounded-full shadow-lg" />

          <!-- Name with Link -->
          <router-link class="text-2xl font-bold gradient-text" to="/">
            Raphaël Izoret
          </router-link>

          <!-- Desktop Links -->
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

        <!-- Burger menu button for mobile -->
        <div class="flex md:hidden items-center">
          <button @click="toggleMenu" class="text-white focus:outline-none">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="isMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <router-link
            v-for="link in links"
            :key="link.path"
            :class="{ 'gradient-text': isLinkActive(link.path) }"
            :to="link.path"
            class="block nav-link"
          >
            {{ link.name }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
