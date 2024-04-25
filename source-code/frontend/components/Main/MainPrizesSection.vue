<script setup lang="ts">
  import { computed } from 'vue'
  import type { IContestPrize } from '~/services/models'

  const prizeList = [
    {
      description: '123',
      image: 'http://127.0.0.1:8000/storage/prizes/01HRZD9JZA25EMTRG2XNB4HAEB.jpg',
      name: 'Iphone13',
      place: 1
    },
    {
      description: '123',
      image: 'http://127.0.0.1:8000/storage/prizes/01HRZD9JZA25EMTRG2XNB4HAEB.jpg',
      name: 'Iphone13',
      place: 2
    },
    {
      description: '123',
      image: 'http://127.0.0.1:8000/storage/prizes/01HRZD9JZA25EMTRG2XNB4HAEB.jpg',
      name: 'Iphone13',
      place: 3
    }
  ]

  const prizes = computed(() => {
    const sorted = prizeList.sort((a: IContestPrize, b: IContestPrize) => a.place - b.place)
    // Найти индекс элемента с place: 2
    const indexPlace2 = sorted.findIndex((prize: IContestPrize) => prize.place === 2)

    // Переместить элемент с place: 2 в начало массива
    const place2Element = sorted.splice(indexPlace2, 1)[0]
    sorted.unshift(place2Element)
    const indexPlace1 = sorted.findIndex((prize: IContestPrize) => prize.place === 1)
    const place1Element = sorted.splice(indexPlace1, 1)[0]
    const middleIndex = Math.floor(sorted.length / 2)
    sorted.splice(middleIndex, 0, place1Element)
    return sorted || []
  })
</script>

<template>
  <contest-prize-section :prize-list="prizes" />
</template>

<style scoped></style>
