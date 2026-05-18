<template>
  <div class="rounded-lg border bg-card text-card-foreground shadow-sm h-full">
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
</template>

<script setup lang="ts">
import {
  IconMailFilled,
  IconBrandLinkedinFilled,
  IconBrandGithubFilled,
} from "@tabler/icons-vue";
</script>

<style scoped></style>
