<script setup>
defineProps({
  active: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button
    :class="[
      'px-3 pb-4 sm:pb-6  font-semibold text-lg sm:text-xl flex items-center justify-center ease-in-out transition-colors duration-700',
      active ? 'border-b-4 border-b-primary' : ''
    ]"
  >
    <span>
      <slot />
    </span>
    <span class="pl-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="size-3 fill-amber-600"
      >
        <path
          fill-rule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
          clip-rule="evenodd"
        />
      </svg>
    </span>
  </button>
</template>
