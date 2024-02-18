<script setup lang="ts">
  import { Label } from '~/components/ui/label'
  import { Textarea } from '~/components/ui/textarea'
  import { useAttrs } from 'vue'
  interface IProps {
    defaultValue?: string | number
    modelValue?: string | number
    label?: string
  }
  const props = withDefaults(defineProps<IProps>(), {
    label: ''
  })
  const attrs = useAttrs()
</script>

<template>
  <Label v-if="label">{{ label }}</Label>
  <Textarea :value="modelValue" class="resize-none h-[100px]" v-bind="attrs" />
</template>
