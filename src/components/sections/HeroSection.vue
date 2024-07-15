<script setup>
import PrimaryButton from '@/components/PrimaryButton.vue'
</script>

<template>
  <section class="flex flex-col sm:flex-row gap-4 sm:gap-0 bg-semi relative">
    <div
      class="flex flex-col sm:shrink-0 sm:py-[185px] sm:w-[40%] gap-6 sm:gap-8 justify-center sm:justify-normal items-center sm:items-start z-10 p-8"
    >
      <h1 class="text-xl sm:text-2xl md:text-4xl text-dark text-center sm:text-left font-semibold">
        FREE COFFEE <br />
        IS A TAP AWAY
      </h1>
      <p class="font-medium text-center sm:text-left text-dark text-md">
        Join now to start earning Rewards.
      </p>
      <PrimaryButton class="sm:hidden">Join in the app</PrimaryButton>
      <PrimaryButton class="hidden text-lg sm:block">Join now</PrimaryButton>
      <p class="text-dark underline text-sm sm:hidden">Or join online</p>
      <p class="text-dark hidden text-lg sm:block">
        Or <span class="underline cursor-pointer">join in the app</span> for the best experience
      </p>
    </div>
    <div class="sm:hidden">
      <img class="absolute top-0" src="@/assets/img/star-mobile.jpg" alt="star" />
    </div>
    <div class="hidden sm:block">
      <img class="h-full w-[100%]" src="@/assets/img/star.png" alt="star" />
    </div>
  </section>
</template>
