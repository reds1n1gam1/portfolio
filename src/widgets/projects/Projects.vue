<template>
  <div class="mx-auto w-full max-w-screen-xl px-6 md:px-20 py-10 md:py-20">
    <h2 class="text-4xl font-bold mb-4">Featured Projects</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <ProjectCard v-for="projectInfo in projects" :project="projectInfo" />
    </div>
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
