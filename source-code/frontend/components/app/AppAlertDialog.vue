<script setup lang="ts">
  import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogCancel,
    AlertDialogAction,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogContent,
    AlertDialogTitle,
    AlertDialogDescription
  } from '~/components/ui/alert-dialog'

  interface IProps {
    title: string
    description?: string
  }
  const props = withDefaults(defineProps<IProps>(), {
    description: ''
  })

  const emits = defineEmits<{
    (e: 'cancel'): void
    (e: 'confirm'): void
  }>()

  const handleCancel = () => {
    emits('cancel')
  }
  const handleSubmit = () => {
    emits('confirm')
  }
</script>

<template>
  <alert-dialog>
    <alert-dialog-content>
      <alert-dialog-header>
        <alert-dialog-title> {{ title }} </alert-dialog-title>
      </alert-dialog-header>
      <alert-dialog-description>
        {{ description }}
      </alert-dialog-description>
      <alert-dialog-footer>
        <alert-dialog-cancel @click="handleCancel()">Cancel</alert-dialog-cancel>
        <alert-dialog-action @click="handleSubmit()">Confirm</alert-dialog-action>
      </alert-dialog-footer>
    </alert-dialog-content>
  </alert-dialog>
</template>

<style scoped></style>
