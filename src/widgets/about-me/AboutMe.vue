<template>
  <div
    class="mx-auto w-full max-w-screen-xl px-6 md:px-20 pb-10 pt-5 md:pb-20 md:pt-10"
  >
    <h2 class="text-4xl font-bold mb-4">About me</h2>
    <div class="grid sm:grid-cols-2 gap-4 sm:gap-8">
      <div class="grid gap-4">
        <Connect/>
      </div>
      <div class="flex flex-col gap-4">
        <div class="grid grid-cols-2 gap-4">
          <Status/>
          <Location/>
        </div>
        <Techstack/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Connect from "@/components/connect/Connect.vue";
import Location from "@/components/location/Location.vue";
import Status from "@/components/status/Status.vue";
import Techstack from "@/components/techstack/Techstack.vue";
</script>

<style scoped></style>
