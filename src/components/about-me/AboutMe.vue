<template>
  <div
    class="mx-auto w-full max-w-screen-xl px-6 md:px-20 pb-10 pt-5 md:pb-20 md:pt-10"
  >
    <h2 class="text-4xl font-bold mb-4">About me</h2>
    <div class="grid sm:grid-cols-2 gap-4 sm:gap-8">
      <div class="grid gap-4">
        <div
          class="rounded-lg border bg-card text-card-foreground shadow-sm h-full"
        >
          <div class="flex flex-col space-y-1.5 p-6">
            <div class="flex justify-between">
              <div class="flex items-center gap-2 mb-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-link"
                >
                  <path
                    d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                  ></path>
                  <path
                    d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                  ></path>
                </svg>
                <p>Connect with me</p>
              </div>
            </div>
            <div
              class="flex flex-col gap-2 *:text-muted-foreground *:flex *:items-center"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:madisaginaliyev@gmail.com"
              >
                <IconMailFilled class="mr-3" />madisaginaliyev@gmail.com</a
              ><a href="https://github.com/reds1n1gam1">
                <IconBrandLinkedinFilled class="mr-3" />reds1n1gam1</a
              ><a href="https://www.linkedin.com/in/saginaliyev-madi/">
                <IconBrandGithubFilled class="mr-3" />Madi Saginaliyev</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <div class="grid grid-cols-2 gap-4">
          <div
            class="rounded-lg border bg-card text-card-foreground shadow-sm h-full"
          >
            <div
              class="flex flex-col space-y-1.5 p-6"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:R5l3qnnb:"
              data-state="closed"
              role="button"
            >
              <div class="flex justify-center mb-2">
                <span class="relative flex h-4 w-4"
                  ><span
                    class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
                  ></span
                  ><span
                    class="relative inline-flex h-4 w-4 rounded-full bg-green-400"
                  ></span
                ></span>
              </div>
              <h3
                class="text-2xl font-semibold leading-none tracking-tight text-center"
              >
                Available for work!
              </h3>
            </div>
          </div>
          <div
            class="rounded-lg border bg-card text-card-foreground shadow-sm h-full"
          >
            <div class="flex flex-col space-y-1.5 p-6">
              <div class="flex justify-between">
                <div
                  class="flex items-center gap-2 mb-2 text-sm text-muted-foreground"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-pin"
                  >
                    <line x1="12" x2="12" y1="17" y2="22"></line>
                    <path
                      d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"
                    ></path>
                  </svg>
                  <p>Location</p>
                </div>
              </div>
              <p class="text-sm text-primary">Astana, Kazakhstan</p>
            </div>
          </div>
        </div>
        <div
          class="rounded-lg border bg-card text-card-foreground shadow-sm h-full"
        >
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  IconFileStack,
  IconMailFilled,
  IconBrandLinkedinFilled,
  IconBrandGithubFilled,
} from "@tabler/icons-vue";
</script>

<style scoped></style>
