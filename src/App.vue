<template>
  <section id="app" class="h-screen bg-green-500">
    <div class="flex justify-center">
      <img
        class="rounded-full border-2 border-white w-1/2 lg:w-1/4"
        src="@/assets/img/ryan-pays-horseback.jpg"
        alt="The one and only Ryan Pays!"
      />
    </div>
    <div class="flex justify-center text-white mt-8">
      <a class="mr-4" href="https://github.com/RyanPayso13">
        <v-icon name="brands/github" scale="6" />
      </a>
      <a href="https://www.facebook.com/ryan.pays">
        <v-icon name="brands/facebook" scale="6" />
      </a>
      <a class="ml-4" href="/doc/ryan-pays-cv.pdf" target="_blank">
        <v-icon name="file-pdf" scale="6" />
      </a>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Icon from "vue-awesome/components/Icon.vue";
import "vue-awesome/icons/brands/github";
import "vue-awesome/icons/brands/facebook";
import "vue-awesome/icons/file-pdf";

@Component({
  components: {
    "v-icon": Icon
  }
})
export default class App extends Vue {}
</script>
