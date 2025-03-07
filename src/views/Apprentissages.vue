<script setup lang="ts">
const apprentissages = [
  {
    titre: "Réaliser",
    description: "Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT...)",
    CE: [
      "En respectant les besoins décrits par le client",
      "En appliquant les principes algorithmiques",
      "En veillant à la qualité du code et à sa documentation",
      "En choisissant les ressources techniques appropriées"
    ],
    AC: [
      "Choisir et implémenter les architectures adaptées",
      "Faire évoluer une application existante",
      "Intégrer des solutions dans un environnement de production"
    ]
  },
  {
    titre: "Optimiser",
    description: "Analyser et optimiser des applications",
    CE: [
      "En formalisant et modélisant des situations complexes",
      "En recensant les algorithmes et les structures de données usuels",
      "En s'appuyant sur des schémas de raisonnement",
      "En justifiant les choix et validant les résultats"
    ],
    AC: [
      "Anticiper les résultats de diverses métriques (temps d'exécution, occupation mémoire...)",
      "Profiler, analyser et justifier le comportement d'un code existant",
      "Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d'application (imagerie, immersion, intelligence artificielle, jeux vidéos, parallélisme, calcul formel...)"
    ]
  },
  {
    titre: "Collaborer",
    description: "Manager une équipe informatique",
    CE: [
      "En inscrivant sa démarche au sein d'une équipe pluridisciplinaire",
      "En accompagnant la mise en oeuvre des évolutions informatiques",
      "En veillant au respect des contraintes juridiques",
      "En développant une communication efficace et collaborative"
    ],
    AC: [
      "Organiser et partager une veille numérique",
      "Identifier les enjeux de l'économie de l'innovation numérique",
      "Guider la conduite du changement informatique au sein d'une organisation",
      "Accompagner le management de projet informatique"
    ]
  }
];
</script>

<template>
  <div>
    <h1>Portfolio d'Apprentissage</h1>
    <div v-for="apprentissage in apprentissages" :key="apprentissage.titre" class="apprentissage">
      <h2>{{ apprentissage.titre }}</h2>
      <p>{{ apprentissage.description }}</p>
      <h3>Composantes Essentielles</h3>
      <ul>
        <li v-for="ce in apprentissage.CE" :key="ce">{{ ce }}</li>
      </ul>
      <h3>Apprentissages Critiques</h3>
      <ul>
        <li v-for="ac in apprentissage.AC" :key="ac">{{ ac }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}

.apprentissage {
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

h2 {
  color: #2c3e50;
}

h3 {
  margin-top: 10px;
  color: #34495e;
}

ul {
  padding-left: 20px;
}

li {
  margin-bottom: 5px;
}
</style>
