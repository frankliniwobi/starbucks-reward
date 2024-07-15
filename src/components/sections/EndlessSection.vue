<script setup>
import EndlessExtraList from '@/components/EndlessExtraList.vue'
</script>

<template>
  <section class="sm:mt-0 p-5 py-16 space-y-10">
    <div class="space-y-5 px-2">
      <h2 class="text-center font-medium text-2xl">Endless Extras</h2>
      <p class="text-sm sm:max-w-md mx-auto sm:text-center text-justify font-light">
        Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy
        ordering, tasty Rewards and—yes, free coffee.
      </p>
    </div>

    <div class="flex flex-col gap-12 sm:gap-3 sm:flex-row sm:px-12">
      <EndlessExtraList>
        <template #img>
          <img class="w-64" src="@/assets/img/extra-1.webp" alt="image" />
        </template>
        <template #heading>
          <span>Fun freebies </span>
        </template>

        <template #body>
          <span>
            Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea
            refills.
          </span>
        </template>
      </EndlessExtraList>

      <EndlessExtraList>
        <template #img>
          <img class="w-64" src="@/assets/img/extra-2.webp" alt="image" />
        </template>
        <template #heading>Order & pay ahead </template>
        <template #body>
          Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.
        </template>
      </EndlessExtraList>

      <EndlessExtraList>
        <template #img>
          <img class="w-64" src="@/assets/img/extra-3.webp" alt="image" />
        </template>
        <template #heading>Get to free faster </template>
        <template #body>
          Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.
        </template>
      </EndlessExtraList>
    </div>
  </section>
</template>
