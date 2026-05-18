<template>
  <div class="rounded-lg border bg-card text-card-foreground shadow-sm h-full">
    <div class="flex flex-col space-y-1.5 p-6">
      <div class="flex justify-between">
        <div class="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-pin">
            <line x1="12" x2="12" y1="17" y2="22"></line>
            <path
              d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z">
            </path>
          </svg>
          <p>Location</p>
        </div>
      </div>
      <p class="text-sm text-primary">{{ LOCATION }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

const LOCATION = inject('location')
</script>

<style scoped></style>
