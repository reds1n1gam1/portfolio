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
        <a target="_blank" href="https://nextjs.org">
          <div
            class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
          >
            <div class="bg-orange-400 w-2 h-2 mr-2 rounded-full"></div>
            <span class="font-mono">Next.js</span>
          </div> </a
        ><a target="_blank" href="https://reactjs.org">
          <div
            class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
          >
            <div class="bg-teal-400 w-2 h-2 mr-2 rounded-full"></div>
            <span class="font-mono">React</span>
          </div> </a
        ><a target="_blank" href="https://git-scm.com">
          <div
            class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
          >
            <div class="bg-blue-400 w-2 h-2 mr-2 rounded-full"></div>
            <span class="font-mono">Git</span>
          </div> </a
        ><a target="_blank" href="https://figma.com">
          <div
            class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
          >
            <div class="bg-blue-400 w-2 h-2 mr-2 rounded-full"></div>
            <span class="font-mono">Figma</span>
          </div> </a
        ><a target="_blank" href="https://www.mysql.com">
          <div
            class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
          >
            <div class="bg-blue-400 w-2 h-2 mr-2 rounded-full"></div>
            <span class="font-mono">MySQL</span>
          </div> </a
        ><a target="_blank" href="https://www.typescriptlang.org">
          <div
            class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
          >
            <div class="bg-rose-400 w-2 h-2 mr-2 rounded-full"></div>
            <span class="font-mono">TypeScript</span>
          </div> </a
        ><a target="_blank" href="https://www.docker.com">
          <div
            class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
          >
            <div class="bg-teal-400 w-2 h-2 mr-2 rounded-full"></div>
            <span class="font-mono">Docker</span>
          </div> </a
        ><a target="_blank" href="https://tailwindcss.com">
          <div
            class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
          >
            <div class="bg-green-400 w-2 h-2 mr-2 rounded-full"></div>
            <span class="font-mono">Tailwind CSS</span>
          </div> </a
        ><a target="_blank" href="https://www.framer.com/motion">
          <div
            class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
          >
            <div class="bg-blue-400 w-2 h-2 mr-2 rounded-full"></div>
            <span class="font-mono">Framer Motion</span>
          </div> </a
        ><a target="_blank" href="https://www.mongodb.com">
          <div
            class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
          >
            <div class="bg-fuchsia-400 w-2 h-2 mr-2 rounded-full"></div>
            <span class="font-mono">MongoDB</span>
          </div> </a
        ><a target="_blank" href="https://wordpress.org">
          <div
            class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
          >
            <div class="bg-cyan-400 w-2 h-2 mr-2 rounded-full"></div>
            <span class="font-mono">Wordpress</span>
          </div> </a
        ><a target="_blank" href="https://convex.dev">
          <div
            class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
          >
            <div class="bg-purple-400 w-2 h-2 mr-2 rounded-full"></div>
            <span class="font-mono">Convex</span>
          </div> </a
        ><a target="_blank" href="https://ui.shadcn.com">
          <div
            class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
          >
            <div class="bg-purple-400 w-2 h-2 mr-2 rounded-full"></div>
            <span class="font-mono">shadcn/ui</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconFileStack } from "@tabler/icons-vue";
</script>

<style scoped></style>
