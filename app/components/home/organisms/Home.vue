<template>
  <div class="h-screen bg-neutral-900 p-4">
    <div
      class="flex h-full flex-col items-center justify-center gap-2 rounded-4xl bg-white bg-gradient-to-br"
    >
      <HomeTitle />
      <HomeContent />
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeTitle from "@/components/home/atoms/HomeTitle.vue";
import HomeContent from "~/components/home/molecules/HomeContent.vue";
</script>
