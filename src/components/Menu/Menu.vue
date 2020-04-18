<template>
  <nav class="flex flex-row flex-row-reverse bg-indigo-200">
    <div
      class="capitalize"
      v-for="(item, index) in items"
      :key="index"
      :class="{ 'border-b': index === activeIndex }"
      :click="goTo(item)"
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
  goTo(index: number): number {
    return index;
  }
}
</script>
