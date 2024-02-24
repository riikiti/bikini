<script setup lang="ts">
  import GhostButton from '~/components/TheHeader/GhostButton.vue'
  import { Lock, MoreVertical, Pencil } from 'lucide-vue-next'
  import { Button } from '~/components/ui/button'
  import { toRefs } from 'vue'
  import { DropdownMenu } from '~/components/ui/dropdown-menu'
  import { useUserStore } from '~/stores/user'
  import { storeToRefs } from 'pinia'
  import type { IBoxPostItem } from '~/services/models'

  const userStore = useUserStore()

  interface IProps {
    boxItem: IBoxPostItem
  }
  const props = defineProps<IProps>()
  const { boxItem } = toRefs(props)
  const { currentUserId } = storeToRefs(userStore)

  const emits = defineEmits<{
    (e: 'remove', value: number): void
  }>()

  const emitRemoveBlock = () => {
    emits('remove', boxItem.value.id)
  }
  const isOpenAlert = ref(false)
  const handelOpenAlert = () => {
    isOpenAlert.value = true
  }
</script>

<template>
  <div class="grid overflow-hidden rounded-2xl w-full">
    <div class="flex justify-between bg-white p-4">
      <div class="text-gray-400 font-light">{{ boxItem.created_at }}</div>
      <div v-if="boxItem.user_id === currentUserId" class="text-gray-400 text-lg font-light">
        <dropdown-menu>
          <dropdown-menu-trigger as-child>
            <ghost-button class="flex whitespace-nowrap w-max">
              <more-vertical :size="20" />
            </ghost-button>
          </dropdown-menu-trigger>
          <dropdown-menu-content class="px-2">
            <dropdown-menu-item as-child class="w-full">
              <Button variant="destructive" size="md" @click="handelOpenAlert()"
                >Удалить бокс</Button
              >
            </dropdown-menu-item>
          </dropdown-menu-content>
        </dropdown-menu>
      </div>
    </div>
    <div v-if="!boxItem.isPaid" class="h-[625px] w-full relative p-8 flex flex-col justify-between">
      <div
        class="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/profile/blur-cover.webp')] bg-no-repeat bg-cover z-[-1]"
      />
      <div class="font-extrabold text-3xl mb-4 text-white">
        {{ boxItem.description }}
      </div>
      <div class="w-[300px] flex flex-col items-center mx-auto">
        <div class="font-bold text-white mb-3">{{ boxItem.price }} ₽ / Навсегда</div>
        <Button class="rounded-xl">
          <lock :size="20" />
          <div class="ml-4">Купить бокс</div>
        </Button>
      </div>
    </div>
  </div>
  <app-alert-dialog
    v-model:open="isOpenAlert"
    title="Are you absolutely sure?"
    description="This action cannot be undone. This will permanently delete your account and remove your data from our servers.
"
    @confirm="emitRemoveBlock()"
  />
</template>

<style scoped></style>
