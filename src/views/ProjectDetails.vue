<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import projectsData from "../data/projects.json";
import {Project} from "../ts/types.ts";

const route = useRoute();
const project = ref<Project | undefined>(undefined);

onMounted(() => {
  project.value = projectsData.projects.find(p => p.id === route.params.id) as Project | undefined;
});
</script>

<template>
  <div class="page-container">
    <router-link
        class="inline-flex items-center text-primary-300 hover:text-primary-200 mb-6"
        to="/projects"
    >
      ← Retour aux projects
    </router-link>

    <div v-if="project" class="card">
      <div class="flex justify-between items-start mb-4">
        <h1 class="text-3xl font-bold text-white">{{ project.titre }}</h1>
        <span class="text-primary-300">{{ project.date }}</span>
      </div>

      <div class="mb-6">
        <div class="flex flex-wrap gap-2 mb-4">
          <span
              v-for="tech in project.technologies"
              :key="tech"
              class="px-3 py-1 bg-primary-500/20 text-primary-200 rounded-full text-sm"
          >
            {{ tech }}
          </span>
        </div>

        <p class="text-gray-300">{{ project.description }}</p>
      </div>

      <div class="grid gap-8">
        <section>
          <h2 class="text-2xl font-semibold mb-4 gradient-text">Présentation du Projet</h2>
          <p v-for="(part, index) in project.presentation" :key="index" class="text-gray-300">
            {{ part }}
            <br>
          </p>
          <div v-if="project.image" class="mt-2 flex justify-center">
            <img :src="project.image" alt="Illustration Projet" class="text-gray-300 w-2/3 h-auto rounded-lg shadow-md">
          </div>
        </section>
        <section>
          <h2 class="text-2xl font-semibold mb-4 gradient-text">Fonctionnalités</h2>
          <ul class="list-disc list-inside space-y-2 text-gray-300">
            <li v-for="feature in project.fonctionnalites" :key="feature">
              {{ feature }}
            </li>
          </ul>
        </section>

        <section v-if="project.github || project.link">
          <h2 class="text-2xl font-semibold mb-4 gradient-text">Liens</h2>
          <div class="space-y-2">

            <a v-if="project.github"
               :href="project.github"
               class="text-primary-300 hover:text-primary-200 block"
               target="_blank"
            >
              GitHub Repository
            </a>
            <a v-if="project.link"
               :href="project.link"
               class="text-primary-300 hover:text-primary-200 block"
               target="_blank"
            >
              Lien
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

<style scoped>
br {
  margin-bottom: 15px;
}
</style>