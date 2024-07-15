<script setup>
import HeaderSection from '@/components/sections/HeaderSection.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import FavouritesSection from '@/components/sections/FavouritesSection.vue'
import GettingStartedSection from '@/components/sections/GettingStartedSection.vue'
import EndlessSection from '@/components/sections/EndlessSection.vue'
</script>

<template>
  <div class="relative">
    <HeaderSection />
    <main>
      <HeroSection />
      <GettingStartedSection />
      <FavouritesSection />
      <EndlessSection />
    </main>
  </div>
</template>
