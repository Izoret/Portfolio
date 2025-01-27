<script lang="ts" setup>
const education = [
  {
    annee: "2024-2025",
    fait: "1 an d'alternance",
    contexte: "Centre Informatique National de l'Enseignement Supérieur",
    elements: [
      "Administration système sur le supercalculateur le plus puissant d'Europe",
      "Même organisme qui a décidé de continuer de m'accompagner"
    ]
  },
  {
    annee: "2024",
    fait: "Stage de 2.5 mois",
    contexte: "Centre Informatique National de l'Enseignement Supérieur",
    elements: [
      "Développement logiciel et automatisation",
      "Contexte très pointu techniquement"
    ]
  },
  {
    annee: "2022-2025",
    fait: "BUT Informatique",
    contexte: "IUT Montpellier-Sète",
    elements: [
      "Formation généraliste de haut niveau",
      "Top 10% de ma promotion"
    ]
  },
  {
    annee: "2019-2022",
    fait: "BAC Général Scientifique",
    contexte: "Lycée Vincent-Auriol",
    elements: [
      "Spécialités Mathématiques, Physique-Chimie, Anglais",
      "Options Maths expertes et Anglais scientifique",
      "BAC avec mention"
    ]
  }
];
</script>

<template>
  <div class="page-container">
    <h1 class="section-title">Présentation</h1>

    <div class="grid gap-8">
      <section class="card">
        <h2 class="text-2xl font-semibold mb-4 gradient-text">À propos de moi</h2>
        <p class="text-gray-300">
          Je suis Raphaël Izoret, actuellement en <b>BAC+3</b>, en BUT Informatique à l'IUT de Montpellier (dans le <b>top
          10%</b> de la promotion en terme de résultats). Le BUT est une nouvelle formation en 3 ans offrant un haut
          niveau technique, et j'en suis à la fin de cette formation.
          <br>
          Au niveau personnel, l'informatique me <b>passionne</b>, et j'adore notamment la programmation en tant que
          science : j'ai commencé à coder à 13 ans avec le BASIC et l'HTML de manière autodidacte, et ma curiosité m'a
          poussée à explorer de nombreux languages, méthodes et technologies différents de mon côté, en plus de ma
          formation (actuellement, j'approfondis Ansible, l'électronique embarquée, et la programmation fonctionnelle).
          <br>
          Toujours dans ce domaine, je trouve l'<b>open-source</b> fantastique et j'utilise Linux (Fedora) en tant qu'OS
          principal depuis plusieurs années, étant investi dans des causes qui me semblent importantes.
          <br>
          Mais si l'informatique fait partie conséquente de ma vie personnelle, je passe aussi du temps à exercer des
          <b>disciplines sportives en équipe</b> ou en solo. Je passe aussi du temps à jouer et composer de la musique,
          de plusieurs instruments, notamment avec un <b>groupe de Jazz</b>. Garder de l'intérêt et de la curiosité pour
          différentes choses est un trait important pour moi, et dans le métier, je ne m'enferme pas dans une seule
          technologie ou manière de travailler.
          <br>
          Mes deux plus grands atouts sont donc ma <b>curiosité</b>, et mon <b>engagement</b> dans le travail, en
          particulier quand celui-ci me plaît. J'aime faire les choses proprement et efficacement, ce qui m'a poussé à
          me spécialiser au sein de mon école dans le parcours RACDV, qui correspond à la conception <b>efficace</b>,
          <b>extensible</b> et <b>optimisée</b> de solutions.
        </p>
      </section>

      <section class="card floating">
        <h2 class="text-2xl font-semibold mb-4 gradient-text">Formation</h2>
        <div class="space-y-4">
          <div v-for="(item, index) in education" :key="index"
               class="border-b border-white/10 pb-4 last:border-0 hover:bg-primary-500/5 rounded-lg transition-colors duration-300 p-4">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="font-semibold text-lg text-white">{{ item.fait }}</h3>
                <p class="text-gray-450">{{ item.contexte }}</p>
                <ul class="text-base text-gray-400 list-disc pl-5">
                  <li v-for="(desc, index) in item.elements" :key="index">
                    {{ desc }}
                  </li>
                </ul>
              </div>
              <span class="text-primary-300">{{ item.annee }}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="card">
        <h2 class="text-2xl font-semibold mb-4 gradient-text">Projet Professionnel</h2>
        <p class="text-gray-300">
          À l'heure qu'il est, je suis encore en 3ème année de BUT, en alternance au CINES. Cependant, je compte
          poursuivre mes études en école d'ingénieur, et le cycle d'ingénieur peut se réaliser en alternance. Ainsi, je
          suis actuellement ouvert à des <b>opportunités d'alternance</b> pour début <b>Septembre 2025</b> et je sais
          que je
          pourrais apporter beaucoup à votre <b>entreprise</b>. Les domaines seraient Dev ou SysAdmin, les 2
          domaines
          que je maîtrise le mieux et avec lesquels j'ai déjà une certaine expérience professionnelle. Je vous remercie
          de l'attention portée à mon profil ; vous trouverez ci-dessous une copie de mon CV téléchargable, et n'hésitez
          pas à me
          <router-link class="text-primary-300 hover:text-primary-200" to="/contact">contacter</router-link>
          si besoin.
        </p>
      </section>

      <section class="card floating">
        <h2 class="text-2xl font-semibold mb-4 gradient-text">CV</h2>
        <div class="bg-white/5 p-4 rounded border border-white/10">
          <object data="./CV_Izoret_2025.pdf" type="application/pdf"
                  width="100%" height="550px">
            <p class="text-center text-gray-400">Échec lors de l'affichage du PDF.
              <a href="./CV_Izoret_2025.pdf">Télécharger</a> à la place.
            </p>
          </object>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
br {
  margin-bottom: 15px;
}
</style>