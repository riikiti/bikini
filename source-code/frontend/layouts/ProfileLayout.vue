<script lang="ts" setup>
  import { NAlert, NSpace } from 'naive-ui'
  import { useAuthStore } from '~/stores/auth'
  import { storeToRefs } from 'pinia'

  const authStore = useAuthStore()

  const { check } = storeToRefs(authStore)
</script>

<template>
  <the-header />
  <div v-if="check.length" class="mt-2 sticky top-16 z-30">
    <div class="max-w-[1366px] mx-auto mt-2">
      <n-alert title="Ваш профиль не активен." type="warning" closable>
        <n-space vertical size="large">
          <div v-for="(checkItem, idx) in check" :key="idx">
            <div class="flex items-center gap-1">
              <span>{{ checkItem.title }}</span>
              <router-link
                v-if="checkItem.route"
                class="text-black font-medium"
                :to="checkItem.route"
                >{{ checkItem.routeName }}</router-link
              >
            </div>
          </div>
        </n-space>
      </n-alert>
    </div>
  </div>
  <the-wrapper class="pt-12">
    <slot />
  </the-wrapper>
</template>
