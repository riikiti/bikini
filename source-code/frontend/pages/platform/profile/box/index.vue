<script setup lang="ts">
  import { definePageMeta } from '#imports'
  import type { IBoxPostItem } from '~/services/models'
  import { ref, type Ref } from 'vue'

  definePageMeta({
    layout: 'profile-layout',
    key: 'box',
    middleware: 'profile'
  })

  const boxList: Ref<IBoxPostItem[]> = ref([])
  const fetchBoxes = async () => {
    await fetch('/mock/mock-box-item.json')
      .then(response => response.json())
      .then(data => {
        boxList.value = data.boxes as IBoxPostItem[]
      })
  }
  fetchBoxes()
  const removeBoxById = value => {
    console.log('emit remove: ', value)
  }
</script>

<template>
  <div class="grid gap-6 mt-4">
    <box-card
      v-for="boxItem in boxList"
      :key="boxItem.id"
      :box-item="boxItem"
      @remove="removeBoxById($event)"
    />
  </div>
</template>

<style scoped></style>
