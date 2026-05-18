<template>
  <div class="rounded-lg border bg-card text-card-foreground shadow-sm h-full">
    <div class="flex flex-col space-y-1.5 p-6">
      <div class="flex justify-between">
        <div class="flex items-center gap-2 mb-2 text-sm">
          <IconFileStack stroke="{2}" />
          <p>Techstack</p>
        </div>
      </div>
      <div class="flex flex-wrap gap-1.5">
        <a v-for="item in techItems" target="_blank" :href="item.link">
          <div
            class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
            <div :class="item.circleClass"></div>
            <span class="font-mono"> {{ item.name }} </span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { techList } from "@/shared/data/technologies";
import type { TechnologyItem } from "@/shared/types/technology-item";
import { IconFileStack } from "@tabler/icons-vue";
import { ref, type Ref } from "vue";

const techItems: Ref<TechnologyItem[]> = ref(techList);
</script>

<style scoped></style>
