<script setup>
import StarButton from '@/components/StarButton.vue'
import TabItem from '@/components/TabItem.vue'
import { ref } from 'vue'

const activeTab = ref(25)
</script>

<template>
  <section>
    <div class="bg-light">
      <h2 class="py-5 px-3 pt-10 text-center font-medium sm:text-2xl md:text-3xl sm:pb-10 text-xl">
        Get your favorites for free
      </h2>
      <div class="flex justify-between sm:max-w-md mx-auto">
        <StarButton @click="activeTab = 25" :active="activeTab == 25">25</StarButton>
        <StarButton @click="activeTab = 100" :active="activeTab == 100">100</StarButton>
        <StarButton @click="activeTab = 200" :active="activeTab == 200">200</StarButton>
        <StarButton @click="activeTab = 300" :active="activeTab == 300">300</StarButton>
        <StarButton @click="activeTab = 400" :active="activeTab == 400">400</StarButton>
      </div>
    </div>
    <div class="bg-semi p-5 pb-10">
      <TabItem v-show="activeTab == 25">
        <template #img>
          <img src="@/assets/img/coffee-25.webp" alt="image" />
        </template>
        <template #heading> Customize your drink </template>
        <template #body>
          Make your drink just right with an extra espresso shot, nondairy milk or a dash of your
          favorite syrup.
        </template>
      </TabItem>

      <TabItem v-show="activeTab == 100">
        <template #img>
          <img src="@/assets/img/coffee-100.webp" alt="image" />
        </template>
        <template #heading>
          Brewed hot or iced coffee or tea, bakery item, packaged snack and more
        </template>
        <template #body>
          Treat yourself to an iced coffee, buttery croissant, bag of chips and more.
        </template>
      </TabItem>

      <TabItem v-show="activeTab == 200">
        <template #img>
          <img src="@/assets/img/coffee-200.webp" alt="image" />
        </template>
        <template #heading>
          Handcrafted drink (Cold Brew, lattes and more) or hot breakfast
        </template>
        <template #body>
          Turn good mornings great with a delicious handcrafted drink of your choice, breakfast
          sandwich or oatmeal on us.
        </template>
      </TabItem>

      <TabItem v-show="activeTab == 300">
        <template #img>
          <img src="@/assets/img/coffee-300.webp" alt="image" />
        </template>
        <template #heading> Sandwich, protein box or at-home coffee </template>
        <template #body>
          Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including
          Starbucks VIA Instant®.
        </template>
      </TabItem>

      <TabItem v-show="activeTab == 400">
        <template #img>
          <img src="@/assets/img/coffee-400.webp" alt="image" />
        </template>
        <template #heading> Select Starbucks® merchandise </template>
        <template #body>
          Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.
        </template>
      </TabItem>
    </div>
  </section>
</template>
