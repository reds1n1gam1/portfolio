<script setup lang="ts">
import AboutMe from "./components/about-me/AboutMe.vue";
import Projects from "./components/projects/Projects.vue";
import Banner from "./components/banner/Banner.vue";
</script>

<template>
  <div class="md:container md:mx-auto px-4 py-12">
      <Banner/>

      <Projects />

      <AboutMe/>

      
    </div>
</template>
