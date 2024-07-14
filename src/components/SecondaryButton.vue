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
      'p-1.5 px-4 outline outline-1  rounded-full text-sm  font-semibold': true,
      'outline-dark text-dark hover:bg-slate-100': dark,
      'text-light outline-light hover:bg-slate-700': !dark
    }"
  >
    <slot />
  </button>
</template>
