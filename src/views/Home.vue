<script lang="ts" setup>
import {computed} from 'vue';
import projectsData from "../data/projects.json";
import {Project} from "../ts/types.ts";


const recentProjects = computed<Project[]>(() => {
  return projectsData.projects.slice(0, 3);
});
</script>

<template>
  <div class="page-container">
    <div class="max-w-3xl mx-auto text-center mb-16">
      <h1 class="text-4xl font-bold mb-6 gradient-text">Bienvenue sur mon Portfolio</h1>
      <p class="text-xl text-gray-300">
        Informaticien passionné spécialisé dans le Développement et l'Administration Système.
        <br>
        Découvrez mes réalisations et suivez mon parcours et ma vision dans le monde de l'informatique.
      </p>
    </div>

    <div class="space-y-8">
      <h2 class="text-2xl font-semibold text-white text-center mb-8">Réalisations Récentes</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <router-link
            v-for="projet in recentProjects"
            :key="projet.id"
            :to="{ name: 'project-details', params: { id: projet.id }}"
            class="card floating hover:shadow-lg transition-all duration-300"
        >
          <h3 class="text-xl font-semibold mb-2 text-white">{{ projet.titre }}</h3>
          <p class="text-gray-300 mb-4">{{ projet.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span
                v-for="tech in projet.technologies"
                :key="tech"
                class="px-2 py-1 bg-primary-500/20 text-primary-200 text-sm rounded"
            >
              {{ tech }}
            </span>
          </div>
          <div class="mt-4 text-primary-300">{{ projet.date }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
