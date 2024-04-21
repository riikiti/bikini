<script lang="ts" setup>
  import { NAlert, NSpace } from 'naive-ui'
  import { useAuthStore } from '~/stores/auth'
  import { storeToRefs } from 'pinia'
  import { TheFooter } from '#components'

  const authStore = useAuthStore()

  const { check } = storeToRefs(authStore)
</script>

<template>
  <div class="flex flex-col h-full">
    <the-header />
    <div v-if="check.length" class="mt-2 sticky top-16 z-20">
      <div class="max-w-[1366px] mx-auto mt-2">
        <n-alert title="Ваш профиль не активен." type="warning" closable>
          <n-space vertical size="large">
            <div v-for="(checkItem, idx) in check" :key="idx">
              <div class="flex items-center flex-wrap gap-1">
                <span>{{ checkItem.title }}</span>
                <nuxt-link
                  v-if="checkItem.route"
                  class="text-black font-medium"
                  :to="checkItem.route"
                  >{{ checkItem.routeName }}</nuxt-link
                >
              </div>
            </div>
          </n-space>
        </n-alert>
      </div>
    </div>
    <the-wrapper class="py-12 h-max flex-1">
      <slot />
    </the-wrapper>
    <div class="px-2 sm:px-4 h-max">
      <div class="max-w-[1368px] mx-auto h-full">
        <the-footer />
      </div>
    </div>
  </div>
</template>
