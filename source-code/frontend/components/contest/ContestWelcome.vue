<script setup lang="ts">
  import { ChevronDown } from 'lucide-vue-next'
  import { NGradientText, NSpace } from 'naive-ui'
  import type { IContestBlock } from '~/services/models'

  interface IProps {
    contest: IContestBlock
  }

  const props = defineProps<IProps>()
</script>

<template>
  <n-space vertical align="center" class="h-screen" justify="center">
    <n-gradient-text type="success">
      <div class="text-[64px]">{{ contest.name }}</div>
    </n-gradient-text>
    <div class="text-xl md:text-3xl max-w-[1024px] text-center text-gray-500">
      Присоединяйтесь к нашему фотоконкурсу и продемонстрируйте свой уникальный взгляд на мир. Мы
      ищем потрясающие, оригинальные изображения, которые рассказывают историю и вызывают эмоции.
      Независимо от того, являетесь ли вы опытным профессионалом или начинающим любителем, мы
      приветствуем ваши работы!
    </div>
    <div class="mt-6">
      <span class="text-3xl text-center"
        >c
        <n-gradient-text type="info">
          <div>{{ contest.start }}</div>
        </n-gradient-text>
        по
        <n-gradient-text type="error">
          <div>{{ contest.finish }}</div>
        </n-gradient-text>
      </span>
    </div>
    <div
      class="text-gray-800 cursor-pointer absolute bottom-2 md:bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div class="animate-bounce">
        <ChevronDown :size="48" />
      </div>
    </div>
  </n-space>
</template>
