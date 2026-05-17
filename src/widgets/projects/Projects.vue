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
import type { ProjectCardType } from "@/shared/types/project-card";
import { type Ref, ref } from "vue";


const projects: Ref<ProjectCardType[]> = ref([
  {
    link: "https://cvzdarma.cz",
    image: "/_next/image?url=%2Fprojects%2Fcvzdarma-project.png&amp;w=3840&amp;q=100",
    title: "Resume creator tool with AI",
    description: "Create your resume in a few minutes. The tool will help you with the content and design.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Prisma",
      "OpenAI",
      "Server actions",
      "shadcn / ui",
      "nodemailer",
      "Clerk",
    ]
  },
  {
    title: 'Long-term Angular Product under NDA',
    image: '/images/nda-project.jpg',
    description: 'A large-scale production Angular application developed and maintained as part of a product team. The project is not publicly available due to NDA restrictions',
    technologies: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'REST APIs', 'HTML', 'CSS', 'SCSS', 'Git']
  },
  {
    title: 'Commercial frontend work · 10–15 projects',
    image: '/images/nda-project.jpg',
    description: 'A collection of commercial frontend projects focused mainly on UI implementation, responsive layouts, pixel-perfect HTML/CSS, animations, cross-browser compatibility, and visual polish. These projects are not publicly available due to NDA restrictions',
    technologies: ['Angular', 'HTML', 'CSS', 'SCSS', 'JavaScript', 'GSAP', 'Figma', 'Git',]
  },
  {
    link: "https://bw.com.kz/",
    title: "Company website — Vue.js, GSAP  ",
    description:
      "Developed the frontend with complex animations and handled ongoing maintenance.",
  },
  {
    link: "https://sk.kz/",
    title: "News website — Vue.js, HTML, CSS  ",
    description: "Developed the frontend and integrated backend APIs.",
  },
  {
    link: "https://blacksnow.tv/",
    title: "Corporate website — HTML, CSS, JavaScript, Wordpress",
    description: "Built the frontend and provided ongoing support and updates.",
  },
  {
    link: "https://jurekten.kz/",
    title: "Gratitude sharing platform — Vue.js ",
    description:
      "Developed the frontend for a web app allowing users to express and share gratitude.",
  },
  {
    link: "https://www.ersai.kz/",
    title: "Corporate website — HTML, CSS, JavaScript  ",
    description: "Built the frontend and provided ongoing support and updates.",
  },
  {
    link: "https://jandig-s.com/",
    title: "Company website — HTML, CSS, JavaScript  ",
    description: "Developed the frontend and handled ongoing maintenance.",
  },
  {
    link: "https://prhub.bw.com.kz/",
    title: "Podcast platform website — Vue.js  ",
    description: "Built the frontend for a podcast-focused company website",
  },
  {
    link: "https://chinastudies.kz/",
    title: "Chinese studies center website — HTML, CSS, JavaScript",
    description:
      "Developed and maintained the frontend, including adding new pages and updating existing content",
  },
  {
    link: "https://at-travel.kz/",
    title: "Horse riding community website — HTML, CSS, JavaScript  ",
    description:
      "Developed the frontend and handled setup and ongoing site maintenance.",
  },
  {
    link: "https://qa.armandastar.kz/",
    title: "Movie website — HTML, CSS, JavaScript  ",
    description:
      "Implemented the frontend layout based on design specifications.",
  },
  {
    link: "https://armandastar.kz/",
    title: "Corporate website — Vue.js, GSAP  ",
    description:
      "Built the frontend with advanced animations and maintained the site post-launch.",
  },
  {
    link: "https://annual-report2018.kmg.kz/",
    title: "Financial report website — HTML, CSS, JavaScript  ",
    description:
      "Implemented the frontend layout for a company financial report.",
  },
  {
    link: "https://ozinnenbasta.kz/",
    title: "Social campaign website — HTML, CSS, GSAP  ",
    description:
      "Implemented the frontend with animated layouts for a series of social videos.",
  },
  {
    link: "https://dowork.kz/",
    title: "Company website — HTML, CSS  ",
    description: "Frontend development and maintenance.",
  },
  {
    link: "https://qa.armandastar.kz/",
    title: "Movie website — HTML, CSS  ",
    description: "Frontend layout implementation.",
  },
  {
    link: "https://altynoimaq.kz/",
    title: "Contest website — HTML, CSS, JavaScript  ",
    description:
      "Developed the frontend and handled ongoing maintenance and updates.",
  },
  {
    link: "https://emeraldtower.kz/",
    title: "Property website — HTML, CSS, JavaScript  ",
    description:
      "Improved the frontend and added new features to extend functionality.",
  },
  {
    title: 'Tolqyn Podcast company website — Vue.js',
    description: 'Developed the frontend for a company website focused on podcast content. (currently inactive)'
  },
]);
</script>

<style scoped></style>
