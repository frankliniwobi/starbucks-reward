<script setup>
import InlineLink from '@/components/InlineLink.vue'
</script>

<template>
  <section>
    <div class="py-20 px-5 space-y-4 sm:px-32">
      <h3 class="text-xl font-medium sm:text-2xl">Questions?</h3>
      <p class="text-xs sm:text-sm font-light max-w-[364px]">
        We want to help in any way we can. You can ask your barista anytime or we’ve answered the
        most commonly asked terms
        <InlineLink>
          right over here
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
        .
      </p>
    </div>
  </section>
</template>
