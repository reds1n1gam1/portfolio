<template>
  <div class="mx-auto w-full max-w-screen-xl px-6 md:px-20 py-10 md:py-20">
    <h2 class="text-4xl font-bold mb-4">Featured Projects</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <ProjectCard v-for="projectInfo in projects" :project="projectInfo" />
    </div>
    <!-- <div class="flex justify-center">
      <a class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mt-6"
        href="/projects">View all projects</a>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import ProjectCard from "@/components/project-card/ProjectCard.vue";
import { projectsList } from "@/shared/data/projects";
import type { ProjectCardType } from "@/shared/types/project-card";
import { type Ref, ref } from "vue";


const projects: Ref<ProjectCardType[]> = ref(projectsList);
</script>

<style scoped></style>
