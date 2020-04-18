<template>
  <div class="container mx-auto" id="app">
    <Menu />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Menu from "@/components/Menu/Menu.vue";

@Component({
  components: {
    Menu
  }
})
export default class App extends Vue {}
</script>
