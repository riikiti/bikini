<script setup lang="ts">
  import { Label } from '~/components/ui/label'
  import { Input } from '~/components/ui/input'
  import { useAttrs } from 'vue'

  const attrs = useAttrs()
  interface IProps {
    defaultValue?: string | number
    modelValue?: string | number
    label?: string
  }
  const props = withDefaults(defineProps<IProps>(), {
    label: ''
  })
</script>

<template>
  <Label v-if="label">{{ label }}</Label>
  <Input :value="modelValue" v-bind="attrs" />
</template>
