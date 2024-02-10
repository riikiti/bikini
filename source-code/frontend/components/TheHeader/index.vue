<script setup lang="ts">
  import SwitcherTheme from '~/components/TheHeader/SwitcherTheme.vue'
  import { Mail } from 'lucide-vue-next'
  import GhostButton from '~/components/TheHeader/GhostButton.vue'
</script>

<template>
  <div class="sticky top-0 border-b border-gray-200">
    <div class="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex gap-2">
          <div class="shrink-0 flex items-center">
            <nuxt-link to="/dashboard" class="hover:no-underline">
              <div class="font-extrabold text-slate-600 text-2xl dark:text-white">
                ★ Bikini Star
              </div>
            </nuxt-link>
          </div>
          <div></div>
        </div>
        <div class="flex items-center gap-2">
          <switcher-theme />
          <ghost-button link="/messages">
            <Mail />
          </ghost-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
