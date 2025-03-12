<script setup lang="ts">
import projectsData from "../data/projects.json";
import {Project} from "../ts/types.ts";

const projets: Project[] = projectsData.projects;

const apprentissages = [
  {
    titre: "Réaliser",
    description: "Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT...)",
    CE: [
      {
        text: "En respectant les besoins décrits par le client",
        projet: 3,
        justification: "Dans le cadre du projet Autoreg, j'ai respecté du mieux possible les besoins du client. J'ai conçu une interface graphique pour une utilisation manuelle et une pipeline CI/CD pour une exécution automatique, répondant ainsi aux différentes contraintes opérationnelles."
      },
      {
        text: "En appliquant les principes algorithmiques",
        projet: 1,
        justification: "Pour Revolve, j'ai appliqué des principes algorithmiques pour gérer la logique du jeu, notamment la rotation des niveaux et les interactions entre les éléments"
      },
      {
        text: "En veillant à la qualité du code et à sa documentation",
        projet: 5,
        justification: "Dans ce projet, j'ai veillé avec mon équipe à ce que le code soit bien structuré, documenté et facile à maintenir, ce qui a permis un développement bien plus agréable."
      },
      {
        text: "En choisissant les ressources techniques appropriées",
        projet: 4,
        justification: "Pour Adam, j'ai réalisé un certain nombre de choix de technologies, notamment pour les modèles d'IA fine-tunés avec PyTorch, et le serveur Flask pour gérer les interactions avec les clients."
      }
    ],
    AC: [
      {
        text: "Choisir et implémenter les architectures adaptées",
        projet: 3,
        justification: "Pour Autoreg, j'ai conçu une architecture modulaire qui permet à la fois une utilisation manuelle via une interface graphique et une exécution automatique via une pipeline CI/CD ; et ce choix était le résultat de beaucoup de réflexion et de débat avec mes collègues concernés."
      },
      {
        text: "Faire évoluer une application existante",
        projet: 0,
        justification: "Au cours de mon alternance, j'ai travaillé sur divers projets déjà en cours, améliorant ou reprenant différentes applications existantes."
      },
      {
        text: "Intégrer des solutions dans un environnement de production",
        projet: 5,
        justification: "La mise en production de notre site était intéressante puisqu'il fallait choisir le serveur web, le serveur de base de données, gérer la sécurité des fichiers et transferts, et notamment entre l'API et le front-end principal."
      }
    ]
  },
  {
    titre: "Optimiser",
    description: "Analyser et optimiser des applications",
    CE: [
      {
        text: "En formalisant et modélisant des situations complexes",
        projet: 2,
        justification: "En temps que Product Owner de Format'IUT, j'ai joué un rôle particulièrement important en modélisant le système assez complexe du site. J'ai formalisé les interactions entre les différents acteurs (étudiants, entreprises, enseignants) et participé à la conception de la base de données."
      },
      {
        text: "En recensant les algorithmes et les structures de données usuels",
        projet: 1,
        justification: "Développer un jeu entier est un projet très complexe, et de nombreuses problématiques de code se sont montrées, que j'ai approchées en me servant d'algorithmes et de structures existants."
      },
      {
        text: "En s'appuyant sur des schémas de raisonnement",
        projet: 1,
        justification: "Pour Revolve, j'ai utilisé des schémas de raisonnement pour concevoir la logique du jeu, notamment en ce qui concerne la rotation des niveaux et les interactions avec le joueur."
      },
      {
        text: "En justifiant les choix et validant les résultats",
        projet: 2,
        justification: "Dans Format'IUT, j'ai justifié mes choix techniques et ceux de l'équipe notamment auprès du client, comme l'utilisation du JavaScript et la gestion des permissions utilisateurs. J'ai également validé les résultats en testant l'application avec différents scénarios."
      }
    ],
    AC: [
      {
        text: "Anticiper les résultats de diverses métriques",
        projet: 1,
        justification: "Pour Revolve, j'ai géré et anticipé les performances du jeu en optimisant les scripts et en testant différentes configurations."
      },
      {
        text: "Profiler, analyser et justifier le comportement d'un code existant",
        projet: 0,
        justification: "Au sein de mon alternance au centre de calcul, en arrivant sur des projets déjà bien en production, il fallait avant tout que j'analyse et que je comprenne l'existant avant de commencer à travailler dessus."
      },
      {
        text: "Choisir et utiliser des bibliothèques dédiées au domaine",
        projet: 3,
        justification: "Dans Autoreg, de nombreuses bibliothèques ont été utilisées, puisque l'application gère beaucoup de choses différentes. Notamment, une pour ldap, une pour les requêtes web, Tkinter pour la GUI..."
      }
    ]
  },
  {
    titre: "Collaborer",
    description: "Manager une équipe informatique",
    CE: [
      {
        text: "En inscrivant sa démarche au sein d'une équipe pluridisciplinaire",
        projet: 5,
        justification: "Au sein de ce projet, j'ai travaillé en équipe avec 3 autres développeurs pour créer une application web. J'ai contribué à la fois au frontend et au backend, tout en aidant mes collègues lorsqu'ils en avaient besoin."
      },
      {
        text: "En accompagnant la mise en œuvre des évolutions informatiques",
        projet: 3,
        justification: "Pour Autoreg, la mise en place de cet outil a automatisé certaines tâches manuelles, pour permettre de faire gagner du temps aux personnes qui s'en occupaient. Cette évolution n'a pas été évidente à mettre en place mais l'impact est au final positif pour tout le monde."
      },
      {
        text: "En veillant au respect des contraintes juridiques",
        projet: 2,
        justification: "Dans Format'IUT, j'ai veillé à ce que l'application respecte les contraintes juridiques, notamment en ce qui concerne la gestion des données personnelles des étudiants et des entreprises."
      },
      {
        text: "En développant une communication efficace et collaborative",
        projet: 5,
        justification: "Dans ce projet, j'ai maintenu une communication fluide avec mon équipe, en partageant régulièrement les avancées et en aidant mes collègues à résoudre les problèmes."
      }
    ],
    AC: [
      {
        text: "Organiser et partager une veille numérique",
        projet: 4,
        justification: "Sans être en permanence en train de surveiller les nouvelles technologies liées à l'Intelligence Artificielle, je n'aurais eu ni la volonté ni les connaissances nécessaires pour réaliser ce projet."
      },
      {
        text: "Identifier les enjeux de l'économie de l'innovation numérique",
        projet: 0,
        justification: "Au sein du BUT, j'ai participé à la Fresque du Numérique qui parle de ces thèmes, et réalisé un MOOC sur les différents impacts du numérique, notamment environnementaux."
      },
      {
        text: "Guider la conduite du changement informatique",
        projet: 3,
        justification: "Pour Autoreg, j'ai guidé la transition vers cette solution automatisée au sein de mon organisme ; j'ai accompagné les utilisateurs dans l'adoption de cette nouvelle solution."
      },
      {
        text: "Accompagner le management de projet informatique",
        projet: 2,
        justification: "Dans Format'IUT, j'ai assumé le rôle de Product Owner, en priorisant les tâches et en veillant à ce que le projet réponde aux besoins du client. Cela montre bien ma capacité à accompagner le management de projet informatique."
      }
    ]
  }
];
</script>

<template>
  <div class="page-container">
    <h1 class="section-title">Portfolio d'Apprentissage</h1>

    <h3 class="section-subtitle">
      Cette partie se base sur les projets que j'ai réalisés : en cliquant sur leurs noms, vous serez redirigés vers
      les projets en question, qui sont la preuve de l'acquisition des concepts.
    </h3>

    <div class="card floating">
      <div class="space-y-8">
        <div v-for="apprentissage in apprentissages" :key="apprentissage.titre" class="mb-6">
          <h2 class="title">{{ apprentissage.titre }}</h2>
          <p class="description">{{ apprentissage.description }}</p>

          <div class="content-block">
            <h3 class="subtitle">Apprentissages Critiques</h3>
            <ul class="list">
              <li v-for="ac in apprentissage.AC" :key="ac.text" class="list-item">
                <p class="concept">{{ ac.text }}</p>
                <router-link
                  :to="{ name: 'project-details', params: { id: ac.projet } }"
                  class="project-link"
                >
                  {{ projets.find(p => p.id === ac.projet.toString())?.titre }}
                </router-link>
                <p class="justification">{{ ac.justification }}</p>
              </li>
            </ul>
          </div>

          <div class="content-block">
            <h3 class="subtitle">Composantes Essentielles</h3>
            <ul class="list">
              <li v-for="ce in apprentissage.CE" :key="ce.text" class="list-item">
                <p class="concept">{{ ce.text }}</p>
                <router-link
                  :to="{ name: 'project-details', params: { id: ce.projet } }"
                  class="project-link"
                >
                  {{ projets.find(p => p.id === ce.projet.toString())?.titre }}
                </router-link>
                <p class="justification">{{ ce.justification }}</p>
              </li>
            </ul>
          </div>
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

.section-subtitle {
  text-align: center;
  font-size: 1.2em;
  color: #bbbbbb;
  margin-bottom: 30px;
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

.title {
  font-size: 2em;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 10px;
}

.description {
  color: #cccccc;
  font-size: 1.1em;
  margin-bottom: 15px;
}

.content-block {
  margin-top: 20px;
}

.subtitle {
  font-size: 1.5em;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 10px;
}

.list {
  list-style: none;
  padding: 0;
}

.list-item {
  background: #222244;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 10px;
}

.concept {
  font-size: 1.1em;
  font-weight: bold;
  color: #ffffff;
}

.justification {
  font-size: 1em;
  color: #bbbbbb;
  margin-top: 5px;
}

.project-link {
  display: inline-block;
  margin-top: 10px;
  font-size: 1em;
  color: #66ccff;
  text-decoration: none;
}

.project-link:hover {
  text-decoration: underline;
  color: #88ddff;
}
</style>