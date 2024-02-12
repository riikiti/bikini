<script setup lang="ts">
  import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/components/ui/tooltip'
  interface IProps {
    direction: 'top' | 'right' | 'bottom' | 'left'
  }
  defineProps<IProps>()
</script>

<template>
  <div>
    <tooltip-provider>
      <tooltip>
        <tooltip-trigger as-child>
          <slot name="trigger" />
        </tooltip-trigger>
        <tooltip-content :side="direction">
          <slot name="content" />
        </tooltip-content>
      </tooltip>
    </tooltip-provider>
  </div>
</template>

<style scoped></style>
