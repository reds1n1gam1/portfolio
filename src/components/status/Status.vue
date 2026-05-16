<template>
  <div class="rounded-lg border bg-card text-card-foreground shadow-sm h-full">
    <div class="flex flex-col space-y-1.5 p-6" type="button" aria-haspopup="dialog" aria-expanded="false"
      aria-controls="radix-:R5l3qnnb:" data-state="closed" role="button">
      <div class="flex justify-center mb-2">
        <span class="relative flex h-4 w-4"><span
            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span><span
            class="relative inline-flex h-4 w-4 rounded-full bg-green-400"></span></span>
      </div>
      <h3 class="text-2xl font-semibold leading-none tracking-tight text-center">
        {{ Status.FREE }}
      </h3>
    </div>
  </div>
</template>

<script setup lang="ts">
enum Status {
  FREE = "Available for work!",
  WORKING = "Not available for work!"
}
</script>

<style scoped></style>
