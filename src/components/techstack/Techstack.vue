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
import { IconFileStack } from "@tabler/icons-vue";
import { ref, type Ref } from "vue";

type TechnologyItem = {
  name: string;
  link?: string;
  circleClass?: string;
};

const techItems: Ref<TechnologyItem[]> = ref([
  {
    name: "Next.js",
    link: "https://nextjs.org",
    circleClass: "bg-orange-400 w-2 h-2 mr-2 rounded-full",
  },
  {
    name: "React",
    link: "https://reactjs.org",
    circleClass: "bg-teal-400 w-2 h-2 mr-2 rounded-full",
  },
  {
    name: "Git",
    link: "https://git-scm.com",
    circleClass: "bg-blue-400 w-2 h-2 mr-2 rounded-full",
  },
  {
    name: "Figma",
    link: "https://figma.com",
    circleClass: "bg-blue-400 w-2 h-2 mr-2 rounded-full",
  },
  {
    name: "MySQL",
    link: "https://www.mysql.com",
    circleClass: "bg-blue-400 w-2 h-2 mr-2 rounded-full",
  },
  {
    name: "TypeScript",
    link: "https://www.typescriptlang.org",
    circleClass: "bg-rose-400 w-2 h-2 mr-2 rounded-full",
  },
  {
    name: "Docker",
    link: "https://www.docker.com",
    circleClass: "bg-teal-400 w-2 h-2 mr-2 rounded-full",
  },
  {
    name: "Tailwind CSS",
    link: "https://tailwindcss.com",
    circleClass: "bg-green-400 w-2 h-2 mr-2 rounded-full",
  },
  {
    name: "Framer Motion",
    link: "https://www.framer.com/motion",
    circleClass: "bg-blue-400 w-2 h-2 mr-2 rounded-full",
  },
  {
    name: "MongoDB",
    link: "https://www.mongodb.com",
    circleClass: "bg-fuchsia-400 w-2 h-2 mr-2 rounded-full",
  },
  {
    name: "Wordpress",
    link: "https://wordpress.org",
    circleClass: "bg-cyan-400 w-2 h-2 mr-2 rounded-full",
  },
  {
    name: "Convex",
    link: "https://convex.dev",
    circleClass: "bg-purple-400 w-2 h-2 mr-2 rounded-full",
  },
  {
    name: "shadcn/ui",
    link: "https://ui.shadcn.com",
    circleClass: "bg-purple-400 w-2 h-2 mr-2 rounded-full",
  },
]);
</script>

<style scoped></style>
