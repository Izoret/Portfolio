<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import projectsData from "../data/projects.json";
import {Project} from "../ts/types.ts";

const route = useRoute();
const projet = ref<Project | undefined>(undefined);

onMounted(() => {
  projet.value = projectsData.projects.find(p => p.id === route.params.id) as Project | undefined;
});
</script>

<template>
  <div class="page-container">
    <router-link
        class="inline-flex items-center text-primary-300 hover:text-primary-200 mb-6"
        to="/projects"
    >
      ← Retour aux projets
    </router-link>

    <div v-if="projet" class="card">
      <div class="flex justify-between items-start mb-4">
        <h1 class="text-3xl font-bold text-white">{{ projet.titre }}</h1>
        <span class="text-primary-300">{{ projet.date }}</span>
      </div>

      <div class="mb-6">
        <div class="flex flex-wrap gap-2 mb-4">
          <span
              v-for="tech in projet.technologies"
              :key="tech"
              class="px-3 py-1 bg-primary-500/20 text-primary-200 rounded-full text-sm"
          >
            {{ tech }}
          </span>
        </div>

        <p class="text-gray-300">{{ projet.description }}</p>
      </div>

      <div class="grid gap-8">
        <section>
          <h2 class="text-2xl font-semibold mb-4 gradient-text">Présentation du Projet</h2>
          <p class="text-gray-300">{{ projet.presentation }}</p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4 gradient-text">Fonctionnalités</h2>
          <ul class="list-disc list-inside space-y-2 text-gray-300">
            <li v-for="feature in projet.fonctionnalites" :key="feature">
              {{ feature }}
            </li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4 gradient-text">Liens</h2>
          <div class="space-y-2">
            <a
                :href="projet.github"
                class="text-primary-300 hover:text-primary-200 block"
                target="_blank"
            >
              GitHub Repository
            </a>
            <a
                :href="projet.demo"
                class="text-primary-300 hover:text-primary-200 block"
                target="_blank"
            >
              Démo en ligne
            </a>
          </div>
        </section>
      </div>
    </div>
    <div v-else class="text-center text-gray-300">
      Projet non trouvé
    </div>
  </div>
</template>