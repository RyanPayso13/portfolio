<template>
  <section id="app" class="h-screen bg-green-500 text-white">
    <div
      class="container mx-auto flex flex-col items-stretch h-screen bg-green-900 p-4"
    >
      <div class="flex flex-none justify-center mb-6">
        <img
          class="rounded-full border-2 border-white w-1/2"
          src="@/assets/img/ryan-pays-horseback.jpg"
          alt="The one and only Ryan Pays!"
        />
      </div>
      <div class="flex-grow">
        <h1 class="text-4xl mb-4">
          Hi, I'm <span class="text-salmon-500 font-extrabold">Ryan Pays!</span>
        </h1>
        <p class="text-lg mb-4">
          I'm a user-interface engineer with over a decade of experience
          delivering agile, lean and scalable solutions.
        </p>
        <p class="text-lg mb-4">
          I have worked in a broad spectrum of industries ranging from sports
          betting, consultancy, start-ups and everything in-between.
        </p>
        <p class="text-lg mb-4">
          If you have a project, gig or side-hustle I might be interested in
          please feel free to
          <a
            class="text-green-100 underline"
            href="mailto:ryan.pays@gmail.com?subject=Contact from ryanpays.com"
            target="_blank"
            rel="noopener noreferrer"
            >contact me!</a
          >
        </p>
      </div>
      <div class="flex flex-none justify-between text-icon-500">
        <a href="https://github.com/RyanPayso13">
          <v-icon class="fill-current" name="brands/github" scale="3" />
        </a>
        <a href="https://www.facebook.com/ryan.pays">
          <v-icon class="fill-current" name="brands/facebook" scale="3" />
        </a>
        <a href="/doc/ryan-pays-cv.pdf" target="_blank">
          <v-icon class="fill-current" name="file-pdf" scale="3" />
        </a>
        <a
          href="mailto:ryan.pays@gmail.com?subject=Contact from ryanpays.com"
          target="_blank"
        >
          <v-icon class="fill-current" name="envelope" scale="3" />
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Icon from "vue-awesome/components/Icon.vue";
import "vue-awesome/icons/brands/github";
import "vue-awesome/icons/brands/facebook";
import "vue-awesome/icons/file-pdf";
import "vue-awesome/icons/envelope";

@Component({
  components: {
    "v-icon": Icon
  }
})
export default class App extends Vue {}
</script>
