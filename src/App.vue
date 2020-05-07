<template>
  <section id="app" class="h-screen bg-green-500">
    <div class="container mx-auto flex flex-col h-screen">
      <div>
        <img
          class="rounded-full border-2 border-white w-1/2"
          src="@/assets/img/ryan-pays-horseback.jpg"
          alt="The one and only Ryan Pays!"
        />
      </div>
      <div class="text-white">
        <h1>Hi, I'm Ryan Pays!</h1>
        <p>
          I am a user interface engineer with over a decade of experience
          delivering agile, lean and scalable solutions.
        </p>
        <p>
          I have worked in a broad spectrum of industries ranging from sports
          betting, consultancy, VC backed start-ups and everything inbetween.
        </p>
        <p>
          If you have a project, gig or side-hustle I might be interested in
          please feel free to
          <a
            href="mailto:ryan.pays@gmail.com?subject=Contact from ryanpays.com"
            target="_blank"
            rel="noopener noreferrer"
            >contact me!</a
          >
        </p>
      </div>
      <div>
        <a href="https://github.com/RyanPayso13">
          <v-icon
            color="white"
            class="fill-current"
            name="brands/github"
            scale="3"
          />
        </a>
        <a href="https://www.facebook.com/ryan.pays">
          <v-icon color="white" name="brands/facebook" scale="3" />
        </a>
        <a href="/doc/ryan-pays-cv.pdf" target="_blank">
          <v-icon color="white" name="file-pdf" scale="3" />
        </a>
        <a
          href="mailto:ryan.pays@gmail.com?subject=Contact from ryanpays.com"
          target="_blank"
        >
          <v-icon color="white" name="envelope" scale="3" />
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
