<template>
  <div class="mx-auto w-full max-w-screen-xl px-6 md:px-20 py-10 md:py-20">
    <h2 class="text-4xl font-bold mb-4">Featured Projects</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <ProjectCard/>
    </div>
    <div class="flex justify-center">
      <a
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mt-6"
        href="/projects"
        >View all projects</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from "@/components/project-card/ProjectCard.vue";
import { type Ref, ref } from "vue";

type Project = {
  link?: string;
  name: string;
  description: string;
};

const projects: Ref<Project[]> = ref([
  // {
  //     name: 'Large-scale web application — Angular, TypeScript, RxJS',
  //     description: 'Contributed to development of a production application, including feature implementation and UI improvements. Focused on performance, maintainability, animations, and cross-browser behavior '
  // },
  // {
  //     name: 'Commercial web projects (10+ NDA) — Angular, TypeScript, RxJS, HTML, CSS  ',
  //     description: 'Delivered multiple frontend projects. Focused on responsive, pixel-perfect UI, complex animations, and cross-browser compatibility. Worked with modern frontend architecture and reusable components'
  // },
  {
    link: "https://bw.com.kz/",
    name: "Company website — Vue.js, GSAP  ",
    description:
      "Developed the frontend with complex animations and handled ongoing maintenance.",
  },
  {
    link: "https://sk.kz/",
    name: "News website — Vue.js, HTML, CSS  ",
    description: "Developed the frontend and integrated backend APIs.",
  },
  {
    link: "https://blacksnow.tv/",
    name: "Corporate website — HTML, CSS, JavaScript, Wordpress",
    description: "Built the frontend and provided ongoing support and updates.",
  },
  {
    link: "https://jurekten.kz/",
    name: "Gratitude sharing platform — Vue.js ",
    description:
      "Developed the frontend for a web app allowing users to express and share gratitude.",
  },
  {
    link: "https://www.ersai.kz/",
    name: "Corporate website — HTML, CSS, JavaScript  ",
    description: "Built the frontend and provided ongoing support and updates.",
  },
  {
    link: "https://jandig-s.com/",
    name: "Company website — HTML, CSS, JavaScript  ",
    description: "Developed the frontend and handled ongoing maintenance.",
  },
  {
    link: "https://prhub.bw.com.kz/",
    name: "Podcast platform website — Vue.js  ",
    description: "Built the frontend for a podcast-focused company website",
  },
  {
    link: "https://chinastudies.kz/",
    name: "Chinese studies center website — HTML, CSS, JavaScript",
    description:
      "Developed and maintained the frontend, including adding new pages and updating existing content",
  },
  {
    link: "https://at-travel.kz/",
    name: "Horse riding community website — HTML, CSS, JavaScript  ",
    description:
      "Developed the frontend and handled setup and ongoing site maintenance.",
  },
  {
    link: "https://qa.armandastar.kz/",
    name: "Movie website — HTML, CSS, JavaScript  ",
    description:
      "Implemented the frontend layout based on design specifications.",
  },
  {
    link: "https://armandastar.kz/",
    name: "Corporate website — Vue.js, GSAP  ",
    description:
      "Built the frontend with advanced animations and maintained the site post-launch.",
  },
  {
    link: "https://annual-report2018.kmg.kz/",
    name: "Financial report website — HTML, CSS, JavaScript  ",
    description:
      "Implemented the frontend layout for a company financial report.",
  },
  {
    link: "https://ozinnenbasta.kz/",
    name: "Social campaign website — HTML, CSS, GSAP  ",
    description:
      "Implemented the frontend with animated layouts for a series of social videos.",
  },
  {
    link: "https://dowork.kz/",
    name: "Company website — HTML, CSS  ",
    description: "Frontend development and maintenance.",
  },
  {
    link: "https://qa.armandastar.kz/",
    name: "Movie website — HTML, CSS  ",
    description: "Frontend layout implementation.",
  },
  {
    link: "https://altynoimaq.kz/",
    name: "Contest website — HTML, CSS, JavaScript  ",
    description:
      "Developed the frontend and handled ongoing maintenance and updates.",
  },
  {
    link: "https://emeraldtower.kz/",
    name: "Property website — HTML, CSS, JavaScript  ",
    description:
      "Improved the frontend and added new features to extend functionality.",
  },
  // {
  //     name: 'Tolqyn Podcast company website — Vue.js',
  //     description: 'Developed the frontend for a company website focused on podcast content. (currently inactive)'
  // },
]);
</script>

<style scoped></style>
