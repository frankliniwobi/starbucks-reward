<script setup>
defineProps({
  img: String
})
</script>

<template>
  <div
    class="flex flex-col sm:flex-row sm:p-4 sm:py-6 justify-center items-center transition-all ease-in-out duration-700 gap-5"
  >
    <div class="delay-150">
      <slot name="img" />
    </div>

    <div class="flex flex-col justify-center items-center sm:items-start gap-5">
      <h4 class="font-semibold text-lg text-center sm:text-left sm:text-2xl">
        <slot name="heading" />
      </h4>
      <p class="text-center text-sm font-light sm:text-left sm:text-lg leading-[22px]">
        <slot name="body" />
      </p>
    </div>
  </div>
</template>
