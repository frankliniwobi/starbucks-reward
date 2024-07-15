<script setup>
import GettingStartedList from '@/components/GettingStartedList.vue'
import InlineLink from '@/components/InlineLink.vue'
</script>

<template>
  <section class="mt-44 sm:mt-0 p-5 py-16 space-y-10">
    <div class="space-y-5">
      <h2 class="text-center font-medium text-2xl">Getting started is easy</h2>
      <p class="text-[14px] leading-[22px] text-center font-normal">
        Earn stars and get Rewarded in a few easy steps.
      </p>
    </div>

    <div class="flex flex-col gap-10 sm:flex-row sm:px-12">
      <GettingStartedList :index="1">
        <template #heading>
          <span class="sm:hidden">Download the Starbucks® app.</span>
          <span class="hidden sm:block">Create an account </span>
        </template>

        <template #body>
          <span class="sm:hidden">
            <InlineLink>Join in the app</InlineLink>
            to get access to the full range of Starbucks Rewards benefits. You can also
            <InlineLink>join online.</InlineLink>
          </span>
          <span class="hidden sm:block">
            To get started, <InlineLink>Join now.</InlineLink> You can also
            <InlineLink>join in the app</InlineLink> to get access to the full range of Starbucks®
            Rewards benefits.
          </span>
        </template>
      </GettingStartedList>

      <GettingStartedList :index="2">
        <template #heading>Order and pay how you’d like </template>
        <template #body>
          Use cash, credit/debit card or save some time and pay right through the app. You’ll
          collect Stars all ways. <InlineLink>Learn how</InlineLink>
        </template>
      </GettingStartedList>

      <GettingStartedList :index="3">
        <template #heading>Earn Stars, get Rewards </template>
        <template #body>
          As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start
          redeeming with as little as 25 Stars!
        </template>
      </GettingStartedList>
    </div>
  </section>
</template>
