<template>
  <div v-if="project.enabled" class="rounded-lg border bg-card text-card-foreground shadow-sm h-full group">
    <div class="p-4">
      <a :href="project.link" target="_blank">
        <div v-if="project.image" class="overflow-hidden rounded-lg"><img alt="Image" loading="lazy" width="1280"
            height="832" decoding="async" data-nimg="1" class="group-hover:scale-105 transition-all"
            style="color:transparent" :srcset="project.image" :src="project.image"></div>
      </a>
    </div>
    <div class="flex flex-col space-y-1.5 p-6 pt-0 pb-3">
      <h3 class="text-2xl font-semibold leading-none tracking-tight">
        <div class="flex gap-2 items-center">
          <a :href="project.link" target="_blank"> {{ project.title }} </a>
        </div>
      </h3>
      <p v-if="project.description" class="text-sm text-muted-foreground">
        {{ project.description }}
      </p>
    </div>
    <div v-if="project.technologies" class="items-center p-6 pt-0 *:mr-2 *:mb-2 flex flex-wrap">
      <div v-for="tech of project.technologies"
        class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">

        {{ tech }}
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProjectCardType } from '@/shared/types/project-card';

defineProps<{
  project: ProjectCardType
}>()
</script>

<style scoped></style>
