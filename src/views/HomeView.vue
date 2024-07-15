<script setup>
import HeaderSection from '@/components/sections/HeaderSection.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import FavouritesSection from '@/components/sections/FavouritesSection.vue'
import GettingStartedSection from '@/components/sections/GettingStartedSection.vue'
import EndlessSection from '@/components/sections/EndlessSection.vue'
import CardCashSection from '@/components/sections/CardCashSection.vue'
import RewardsSection from '@/components/sections/RewardsSection.vue'
import QuestionSection from '@/components/sections/QuestionSection.vue'
import InfoSection from '@/components/sections/InfoSection.vue'
</script>

<template>
  <div class="relative">
    <HeaderSection />
    <main>
      <HeroSection />
      <GettingStartedSection />
      <FavouritesSection />
      <EndlessSection />
      <CardCashSection />
      <RewardsSection />
      <QuestionSection />
      <InfoSection />
    </main>
  </div>
</template>
