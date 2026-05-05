<script setup lang="ts">
import { IconBrandGithubFilled, IconBrandLinkedinFilled } from "@tabler/icons-vue";
import { Button } from '@/components/ui/button'
import AboutMe from "./components/about-me/AboutMe.vue";
import Projects from "./components/projects/Projects.vue";
</script>

<template>
  <div class="md:container md:mx-auto px-4 py-12">
    <div
      class="mx-auto w-full max-w-screen-xl px-6 md:px-20 mb-16 mt-16 sm:mt-32 flex flex-col items-center justify-center text-center">
      <h1 class="max-w-4xl text-4xl font-extrabold md:text-5xl lg:text-6xl">Hi I'm a <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-600">Frontend
          developer</span> creating modern web apps</h1>
      <p class="mt-5 max-w-prose text-muted-foreground sm:text-lg">
        A frontend developer based in the Kazakhstan. I'm passionate about building modern web applications
        using Vue, Angular and Tailwind CSS
      </p>

      <div class="flex gap-x-2 mt-8">
        <div class="flex-initial">
          <a href="https://github.com/reds1n1gam1" target="_blank">
            <Button variant="outline" size="lg">
              <IconBrandGithubFilled size="48" />
              Github
            </Button>
          </a></ div>

          <div class="flex-initial">
            <a href="https://www.linkedin.com/in/saginaliyev-madi/" target="_blank">
              <Button variant="outline" size="lg">
                <IconBrandLinkedinFilled size="48" />
                Linkedin
              </Button>
            </a>
          </div>

        </div>
      </div>

      <Projects />

      <AboutMe/>

      
    </div>
</template>
