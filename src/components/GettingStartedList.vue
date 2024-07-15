<script setup>
defineProps({
  index: {
    type: Number
  }
})
</script>

<template>
  <div class="flex sm:flex-col sm:items-center sm:text-center gap-4 sm:px-1 sm:gap-8">
    <div
      class="p-3 border-2 rounded-full shrink-0 size-12 border-primary flex justify-center items-center font-semibold text-xl text-primary"
    >
      {{ index }}
    </div>
    <div class="flex flex-col gap-4">
      <h2 class="text-base font-medium sm:text-xl sm:font-semibold">
        <slot name="heading" />
      </h2>
      <p class="text-sm font-light text-justify sm:text-center sm:px-1.5">
        <slot name="body" />
      </p>
    </div>
  </div>
</template>
