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
  <n-space vertical align="center" class="min-h-[700px]" justify="center">
    <span class="text-3xl sm:text-4xl md:text-[64px] line-height-[100%] sm:leading-normal">
      <n-gradient-text type="success" class="whitespace-normal text-center">
        {{ contest.name }}
      </n-gradient-text>
    </span>
    <div class="text-xl md:text-2xl max-w-[1024px] text-center text-gray-500">
      Присоединяйтесь к нашему фотоконкурсу и продемонстрируйте свой уникальный взгляд на мир. Мы
      ищем потрясающие, оригинальные изображения, которые рассказывают историю и вызывают эмоции.
      Независимо от того, являетесь ли вы опытным профессионалом или начинающим любителем, мы
      приветствуем ваши работы!
    </div>
    <div class="flex items-center mt-3">
      <span class="text-3xl text-center"
        >c
        <n-gradient-text type="info" class="whitespace-normal">
          <div>{{ contest.start }}</div>
        </n-gradient-text>
        по
        <n-gradient-text type="error" class="whitespace-normal">
          <div>{{ contest.finish }}</div>
        </n-gradient-text>
      </span>
    </div>
  </n-space>
</template>
