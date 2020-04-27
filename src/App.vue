<template>
  <section id="app" class="h-screen bg-green-500">
    <div class="flex justify-center">
      <img
        class="rounded-full border-2 border-white w-1/4"
        src="./assets/img/ryan-pays-horseback.jpg"
        alt="The one and only Ryan Pays!"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class App extends Vue {}
</script>
