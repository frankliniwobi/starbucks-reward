<script setup>
defineProps({
  dark: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button
    :class="{
      'p-1.5 px-4  rounded-full text-sm text-light font-semibold': true,
      ' bg-dark hover:bg-dark/70': dark,
      ' bg-primary hover:bg-primary/70': !dark
    }"
  >
    <slot />
  </button>
</template>
