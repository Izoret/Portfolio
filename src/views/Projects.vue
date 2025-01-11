<script lang="ts" setup>
import projectsData from "../data/projects.json";
import {Project} from "../util/types.ts";

const projets: Project[] = projectsData.projects;

const projetsByCategory = (categorie: string) => {
  return projets.filter(projet => projet.categorie === categorie);
};
</script>

<template>
  <div class="page-container">
    <h1 class="section-title">Réalisations</h1>

    <div class="space-y-12">
      <section>
        <h2 class="text-2xl font-semibold mb-6 text-white">Projets Académiques</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <router-link
              v-for="projet in projetsByCategory('academique')"
              :key="projet.id"
              :to="{ name: 'project-details', params: { id: projet.id }}"
              class="card hover:shadow-lg transition-shadow"
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
          </router-link>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-6 text-white">Projets Professionnels</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <router-link
              v-for="projet in projetsByCategory('professionnel')"
              :key="projet.id"
              :to="{ name: 'project-details', params: { id: projet.id }}"
              class="card hover:shadow-lg transition-shadow"
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
          </router-link>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-6 text-white">Projets Personnels</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <router-link
              v-for="projet in projetsByCategory('personnel')"
              :key="projet.id"
              :to="{ name: 'project-details', params: { id: projet.id }}"
              class="card hover:shadow-lg transition-shadow"
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
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>