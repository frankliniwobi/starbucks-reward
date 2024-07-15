<script setup>
import InlineLink from '@/components/InlineLink.vue'
</script>

<template>
  <div class="flex flex-row sm:flex-col sm:items-center sm:text-center gap-4 sm:px-1 sm:gap-8">
    <div class="rounded-full sm:size-24 flex justify-center items-start">
      <slot name="img" />
    </div>
    <div class="flex flex-col gap-4">
      <h2 class="text-base text-left sm:text-center font-medium sm:text-xl sm:font-semibold">
        <slot name="heading" />
      </h2>
      <p class="text-sm font-light text-left sm:text-center">
        <slot name="body" />
      </p>
      <InlineLink class="block text-xs sm:text-sm">Learn more</InlineLink>
    </div>
  </div>
</template>
