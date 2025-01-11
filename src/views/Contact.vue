<script setup lang="ts">
import {ref} from 'vue';

const showCopyFeedback = ref(false);

const email = 'izoret@proton.me';

const copyMailToClipboard = async () => {
  await navigator.clipboard.writeText(email);
  showCopyFeedback.value = true;
  setTimeout(() => {
    showCopyFeedback.value = false;
  }, 2000);
};
</script>

<template>
  <div class="page-container">
    <h1 class="section-title">Contact</h1>

    <div class="card floating">
      <div class="grid md:grid-cols-2 gap-8">
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold mb-4 gradient-text">Réseaux Professionnels</h2>
          <div class="space-y-4">
            <a
                href="https://github.com/Izoret"
                target="_blank"
                class="flex items-center space-x-3 text-primary-300 hover:text-primary-200"
            >
              <span class="text-xl">GitHub</span>
            </a>
            <a
                href="https://www.linkedin.com/in/rapha%C3%ABl-izoret-9a622a264/"
                target="_blank"
                class="flex items-center space-x-3 text-primary-300 hover:text-primary-200"
            >
              <span class="text-xl">LinkedIn</span>
            </a>
          </div>
        </div>

        <div class="space-y-4">
          <h2 class="text-2xl font-semibold mb-4 gradient-text">Contact Direct</h2>
          <p class="text-gray-300">
            Si besoin, n'hésitez pas à me contacter directement pour discuter d'opportunités professionnelles ou de
            projets.
          </p>
          <div class="space-y-2">
            <div class="relative">
              <p @click="copyMailToClipboard"
                 class="text-gray-300 cursor-pointer hover:text-primary-300 transition-colors duration-300 mt-6">
                Email (click to copy) : {{ email }}
              </p>
              <span v-if="showCopyFeedback"
                    class="absolute left-0 -top-5 text-primary-300 text-sm animate-fade-out">
                Email copié !
              </span>
            </div>
            <p class="text-gray-300">Localisation: Montpellier, France</p>
          </div>
        </div>
      </div>
    </div>

    <footer class="mt-16 pt-8 border-t border-white/10">
      <div class="text-sm text-gray-400 space-y-2">
        <p>© 2024 Raphaël Izoret. Tous droits réservés.</p>
        <div class="space-x-2">
          <a
              href="https://github.com/Notisma/Portfolio"
              target="_blank"
              class="text-primary-300 hover:text-primary-200"
          >
            Code source du site
          </a>
          <span>•</span>
          <span>Construit avec Vue.js et Tailwind CSS</span>
        </div>
        <a class="text-xs" href="https://www.vecteezy.com/free-vector/document-icon">Document Icon Vectors by
          Vecteezy</a>
      </div>
    </footer>
  </div>
</template>