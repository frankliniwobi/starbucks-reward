<script setup>
import InlineLink from '@/components/InlineLink.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
</script>

<template>
  <section class="sm:p-7 bg-[url('/barner.webp')]">
    <div class="bg-semi p-5 space-y-12 sm:pb-10">
      <div class="space-y-5 px-2">
        <h2 class="text-center text-xl font-medium sm:pt-8 sm:text-2xl md:text-3xl">
          Keep the Rewards Coming
        </h2>
        <p class="text-xs sm:text-base sm:max-w-4xl mx-auto text-center font-light">
          The Rewards don't stop at your morning coffee. Join Starbucks® Rewards and unlock perks
          from our partners, all while earning more Stars.
        </p>
      </div>

      <div class="flex flex-col gap-10 sm:flex-row">
        <div class="flex items-center gap-3 sm:flex-col sm:justify-center">
          <div class="shrink-0 w-28">
            <img src="@/assets/img/delta-skymiles.webp" alt="image" />
          </div>
          <p class="text-sm font-light sm:text-center max-w-3xl">
            <InlineLink>
              Link your Delta SkyMiles®
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-3 inline"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </InlineLink>
            and Starbucks® Rewards accounts to earn miles on Starbucks Card reloads of $25 or more,
            plus Double Stars on travel days.1
          </p>
        </div>

        <div class="flex items-center gap-3 sm:flex-col sm:justify-center">
          <div class="shrink-0 w-28">
            <img src="@/assets/img/bank-of-america.webp" alt="image" />
          </div>
          <p class="text-sm font-light sm:text-center max-w-3xl">
            <InlineLink>
              Link your Bank of America
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-3 inline"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </InlineLink>
            eligible card and Starbucks® Rewards account to earn 2% Cash Back and Bonus Stars on
            qualifying Starbucks in-app purchases.2
          </p>
        </div>

        <div class="flex items-center gap-3 sm:flex-col sm:justify-center">
          <div class="shrink-0 w-28">
            <img src="@/assets/img/marriott-logo.webp" alt="image" />
          </div>
          <p class="text-sm font-light sm:text-center max-w-3xl">
            <InlineLink>
              Link your Marriott Bonvoy®
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-3 inline"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </InlineLink>
            and Starbucks® Rewards accounts to earn Double Stars during eligible stays, points
            during any Marriott Bonvoy Week and more.3
          </p>
        </div>
      </div>

      <div class="text-center">
        <PrimaryButton>Join Starbucks® Rewards</PrimaryButton>
      </div>
    </div>
  </section>
</template>
