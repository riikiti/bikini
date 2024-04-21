<script setup lang="ts">
  import { NGradientText, NSpace } from 'naive-ui'
</script>

<template>
  <n-space vertical align="center" justify="center">
    <n-gradient-text type="success">
      <div class="text-2xl sm:text-6xl">{{ activeContest.name }}</div>
    </n-gradient-text>
    <div v-if="prizes">
      <div class="text-3xl font-bold my-8 mb-16 text-center">Победительницы</div>
      <div class="gap-8 columns-3 h-full my-8">
        <div v-for="(prize, index) in prizes" :key="index" class="flex flex-col items-center">
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
    <div class="mt-6">
      <span class="text-xl sm:text-3xl text-center"
        >c
        <n-gradient-text type="info">
          <div>{{ activeContest?.start }}</div>
        </n-gradient-text>
        по
        <n-gradient-text type="error">
          <div>{{ activeContest?.finish }}</div>
        </n-gradient-text>
      </span>
    </div>
  </n-space>
</template>

<style scoped></style>
