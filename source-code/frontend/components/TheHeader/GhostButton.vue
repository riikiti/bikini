<script setup lang="ts">
  interface IProps {
    link?: string
  }
  const props = defineProps<IProps>()
  const { link } = toRefs(props)
</script>

<template>
  <a
    v-if="link"
    :href="link"
    class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 w-10 h-10 inline-flex items-center justify-center"
  >
    <slot />
  </a>
  <button
    v-else
    class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 w-10 h-10 inline-flex items-center justify-center"
  >
    <slot />
  </button>
</template>

<style scoped></style>
