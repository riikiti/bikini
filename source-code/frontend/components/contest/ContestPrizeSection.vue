<script setup lang="ts">
  import type { IContestPrize } from '~/services/models'

  interface IProps {
    prizeList: IContestPrize[]
  }
  const props = defineProps<IProps>()
</script>

<template>
  <div id="prizes" class="pb-12">
    <div class="text-xl md:text-[48px] mb-16">Наши призы</div>
    <div v-if="prizeList.length" class="gap-8 columns-1 md:columns-3 h-full my-8">
      <div v-for="(prize, index) in prizeList" :key="index" class="flex flex-col items-center">
        <div class="relative">
          <div
            :class="[
              'w-[200px] h-[200px] rounded-full shadow-lg flex overflow-hidden relative',
              { '-mt-12': prize.place === 1 }
            ]"
          >
            <img :src="prize.image" alt="" />
          </div>
          <div
            :class="[
              'absolute w-[48px] h-[48px] rounded-full  bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex items-center justify-center font-bold text-2xl',
              {
                'bg-yellow-300': prize.place === 1
              },
              {
                'bg-cyan-400': prize.place === 2
              },
              {
                'bg-violet-400': prize.place === 3
              }
            ]"
          >
            {{ prize.place }}
          </div>
        </div>

        <div class="text-2xl text-center mt-3">{{ prize.name }}</div>
        <div>{{ prize.description }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
