<template>
  <nav class="flex flex-row bg-indigo-200">
    <div
      class="flex-1 bg-white capitalize text-center"
      v-for="(item, index) in items"
      :key="index"
      :class="{ 'border-b': index === activeIndex }"
      :click="goTo(index)"
    >
      {{ item }}
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Menu extends Vue {
  private activeIndex = 0;
  private items: Array<string> = [
    "home",
    "about",
    "experience",
    "skills",
    "interests"
  ];
  goTo(index: number): void {
    this.activeIndex = index;
  }
}
</script>
