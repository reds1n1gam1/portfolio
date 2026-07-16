<script setup lang="ts">
import Projects from "./widgets/projects/Projects.vue";
import AboutMe from "./widgets/about-me/AboutMe.vue";
import Banner from "./widgets/banner/Banner.vue";
import { provide } from "vue";

enum Status {
  FREE = "Available for work!",
  WORKING = "Not available for work!"
}

// provide('location', 'Astana, Kazakhstan')
provide('location', 'Astana, Kazakhstan')
provide('status', Status.FREE)

</script>

<template>
  <div class="md:container md:mx-auto px-4 py-12">
    <Banner />
    <Projects />
    <AboutMe />
  </div>
</template>
