<script setup>
import SecondaryButton from '@/components/SecondaryButton.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import { ref } from 'vue'

const navIsOpen = ref(false)

const toggleNav = () => {
  navIsOpen.value = !navIsOpen.value
}
</script>

<template>
  <header class="bg-white w-full px-4 sm:px-8">
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-10 justify-between">
        <a href="#" class="py-4 sm:py-8"
          ><img src="@/assets/logo.svg" alt="logo" class="size-8"
        /></a>
        <div class="sm:flex hidden gap-6 items-center">
          <a
            href="#"
            class="text-dark hover:text-primary transition-colors duration-500 font-semibold py-8"
            >MENU</a
          >
          <a
            href="#"
            class="text-dark hover:text-primary transition-colors duration-500 font-semibold relative py-9"
          >
            REWARDS
            <div class="border-b-primary border-b-[8px] w-full h-3 absolute bottom-0"></div>
          </a>
          <a
            href="#"
            class="text-dark hover:text-primary transition-colors duration-500 font-semibold py-8"
            >GIFT CARDS</a
          >
        </div>
      </div>
      <div class="sm:flex hidden gap-12 justify-between items-center">
        <a href="" class="font-medium hover:text-primary flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6"
          >
            <path
              fill-rule="evenodd"
              d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              clip-rule="evenodd"
            />
          </svg>
          Find a store
        </a>
        <div class="flex gap-4">
          <SecondaryButton :dark="true"> Sign in </SecondaryButton>
          <PrimaryButton :dark="true">Join now</PrimaryButton>
        </div>
      </div>
      <div class="py-4 sm:hidden">
        <button
          type="button"
          v-if="!navIsOpen"
          @click="toggleNav"
          class="hover:bg-light transition-all duration-400 rounded-full p-1.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <button
          type="button"
          v-if="navIsOpen"
          @click="toggleNav"
          class="hover:bg-light transition-all duration-700 rounded-full p-1.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-7"
          >
            <path
              fill-rule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>
  <!-- Sub Header  -->
  <div
    class="sticky top-0 bg-secondary z-20 p-2 px-4 sm:p-4 sm:pl-24 flex justify-between place-items-center"
  >
    <h3 class="text-light font-bold text-sm sm:text-md">STARBUCKS® REWARDS</h3>
    <SecondaryButton class="sm:hidden"> Join in the app </SecondaryButton>
  </div>

  <!-- Mobile Nav -->
  <!-- <div v-if="navIsOpen" class="sm:hidden absolute flex w-full overscroll-none top-[73px] z-20"> -->
  <div
    v-if="navIsOpen"
    class="sm:hidden absolute flex w-full overscroll-none top-[73px] z-30 border-t-2"
  >
    <div @click="toggleNav" class="w-[20%] bg-gray-500/30"></div>
    <div class="bg-white w-[80%] p-10 pb-52">
      <div class="flex flex-col pb-8 border-b-2 gap-8">
        <a href="#" class="text-lg text-[#000000DE] font-medium">Menu</a>
        <a href="#" class="text-lg text-[#000000DE] font-medium">Rewards</a>
        <a href="#" class="text-lg text-[#000000DE] font-medium">Gift Cards</a>
      </div>

      <div class="space-y-4 mt-8">
        <div class="flex gap-5">
          <SecondaryButton :dark="true">Sign in</SecondaryButton>
          <PrimaryButton :dark="true">Join now</PrimaryButton>
        </div>

        <a href="" class="font-medium hover:text-primary flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6"
          >
            <path
              fill-rule="evenodd"
              d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              clip-rule="evenodd"
            />
          </svg>
          Find a store
        </a>
      </div>
    </div>
  </div>
</template>
