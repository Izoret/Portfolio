<script setup lang="ts">
import projectsData from "../data/projects.json";
import {Project} from "../ts/types.ts";

const projets: Project[] = projectsData.projects;

const apprentissages = [
  {
    titre: "Réaliser",
    description: "Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT...)",
    CE: [
      {text: "En respectant les besoins décrits par le client", projets: [2, 3, 5]},
      {text: "En appliquant les principes algorithmiques", projets: [1]},
      {text: "En veillant à la qualité du code et à sa documentation", projets: [3, 5]},
      {text: "En choisissant les ressources techniques appropriées", projets: [3, 4]}
    ],
    AC: [
      {text: "Choisir et implémenter les architectures adaptées", projets: [3, 4]},
      {text: "Faire évoluer une application existante", projets: [1, 5]},
      {text: "Intégrer des solutions dans un environnement de production", projets: [2, 5]}
    ]
  },
  {
    titre: "Optimiser",
    description: "Analyser et optimiser des applications",
    CE: [
      {text: "En formalisant et modélisant des situations complexes", projets: [2, 3]},
      {text: "En recensant les algorithmes et les structures de données usuels", projets: [1, 4]},
      {text: "En s'appuyant sur des schémas de raisonnement", projets: [1, 3]},
      {text: "En justifiant les choix et validant les résultats", projets: [2, 3]}
    ],
    AC: [
      {text: "Anticiper les résultats de diverses métriques", projets: [1]},
      {text: "Profiler, analyser et justifier le comportement d'un code existant", projets: [1]},
      {text: "Choisir et utiliser des bibliothèques dédiées au domaine", projets: [3, 4]}
    ]
  },
  {
    titre: "Collaborer",
    description: "Manager une équipe informatique",
    CE: [
      {text: "En inscrivant sa démarche au sein d'une équipe pluridisciplinaire", projets: [2, 5]},
      {text: "En accompagnant la mise en œuvre des évolutions informatiques", projets: [3]},
      {text: "En veillant au respect des contraintes juridiques", projets: [2, 3]},
      {text: "En développant une communication efficace et collaborative", projets: [2, 5]}
    ],
    AC: [
      {text: "Organiser et partager une veille numérique", projets: [4]},
      {text: "Identifier les enjeux de l'économie de l'innovation numérique", projets: []},
      {text: "Guider la conduite du changement informatique", projets: [3]},
      {text: "Accompagner le management de projet informatique", projets: [2]}
    ]
  }
];
</script>

<template>
  <div class="page-container">
    <h1 class="section-title">Portfolio d'Apprentissage</h1>

    <div class="card floating">
      <div class="space-y-8">
        <div v-for="apprentissage in apprentissages" :key="apprentissage.titre" class="mb-4 gradient-text">
          <h2 class="font-semibold gradient-text text-2xl">{{ apprentissage.titre }}</h2>
          <p class="text-gray-300 font-semibold">{{ apprentissage.description }}</p>

          <h3 class="text-xl font-semibold mt-4">Composantes Essentielles</h3>
          <ul class="list-disc pl-5">
            <li v-for="ce in apprentissage.CE" :key="ce.text" class="text-gray-300">
              {{ ce.text }}
              <ul v-if="ce.projets.length" class="pl-5">
                <li v-for="id in ce.projets" :key="id">
                  <router-link
                      :to="{ name: 'project-details', params: { id: id } }"
                      class="text-primary-300 hover:text-primary-200"
                  >
                    {{ projets.find(p => p.id === id.toString())?.titre || `Projet #${id}` }}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>

          <h3 class="text-xl font-semibold mt-4">Apprentissages Critiques</h3>
          <ul class="list-disc pl-5">
            <li v-for="ac in apprentissage.AC" :key="ac.text" class="text-gray-300">
              {{ ac.text }}
              <ul v-if="ac.projets.length" class="pl-5">
                <li v-for="id in ac.projets" :key="id">
                  <router-link
                      :to="{ name: 'project-details', params: { id: id } }"
                      class="text-primary-300 hover:text-primary-200"
                  >
                    {{ projets.find(p => p.id === id.toString())?.titre || `Projet #${id}` }}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  max-width: 900px;
  margin: auto;
  padding: 20px;
}

.section-title {
  text-align: center;
  font-size: 2.5em;
  color: #ffffff;
  margin-bottom: 20px;
}

.card {
  background: #1a1a2e;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.floating {
  transition: transform 0.3s ease-in-out;
}

.floating:hover {
  transform: translateY(-5px);
}
</style>
