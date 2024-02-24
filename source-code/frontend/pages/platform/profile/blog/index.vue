<script setup lang="ts">
  import { definePageMeta, useUserStore } from '#imports'
  import UserAvatar from '~/components/TheHeader/UserAvatar.vue'
  import { Heart, Pencil, SendHorizontal } from 'lucide-vue-next'
  import { LikeButton } from '~/components/buttons'
  import GhostButton from '~/components/TheHeader/GhostButton.vue'
  import { Button } from '~/components/ui/button'
  import { ref } from 'vue'

  definePageMeta({
    layout: 'profile-layout',
    key: 'blog',
    middleware: 'profile'
  })

  const userStore = useUserStore()
  const text = ref('')
  const active = ref(false)
</script>

<template>
  <!--  Blog post form            -->
  <div class="px-8 pt-8 pb-4 shadow-sm rounded-xl bg-white dark:bg-muted">
    <app-textarea v-model="text" placeholder="Ввети новость..." />
    <div class="mt-4 flex justify-between">
      <ghost-button class="flex whitespace-nowrap w-max">
        <pencil :size="20" />
        <div class="ml-4">Прикрепить файл</div>
      </ghost-button>
      <Button class="rounded-xl">
        <send-horizontal :size="20" />
        <div class="ml-4">Добавить пост</div>
      </Button>
    </div>
  </div>
  <!--              -->
  <div class="mt-4">
    <!--    Post            -->
    <div class="px-8 py-4 shadow-sm rounded-xl bg-white dark:bg-muted flex flex-col gap-4">
      <!--      Post-header            -->
      <div class="flex">
        <user-avatar :img="userStore.avatar" :name="userStore.username">
          <template #additional>
            <div class="text-sm text-gray-400">3 hours ago</div>
          </template>
        </user-avatar>
      </div>
      <!--   Post content               -->
      <div class="flex flex-col gap-4">
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto fugiat hic illum
            ipsum labore nihil omnis porro quae quidem ratione saepe tenetur, voluptas, voluptate
            voluptates voluptatibus voluptatum. Cupiditate, odit.
          </p>
        </div>
        <div class="relative w-full h-[600px] rounded-xl overflow-hidden">
          <img
            src="https://sun9-71.userapi.com/impg/Wy2UceqGjeh85E5l4iSsb2pK39GTu4KLuYu6nA/VAW05XdiS0Y.jpg?size=646x970&quality=96&sign=79be2ebeefc49f1fed4ed70e455f36b5&c_uniq_tag=mgBZNXbPQzrjcl6Iyt9qSMGI9BUrF94UEqcWlyX-46Y&type=album"
            alt=""
            class="absolute w-full h-full top-0 left-0 object-contain"
          />
        </div>
      </div>
      <!--         Post action         -->
      <div class="border-t dark:border-t-white flex items-center gap-4 pt-4">
        <like-button
          class="rounded-xl w-max bg-gradient-to-r from-green-400 to-blue-500 px-4 flex items-center gap-2 hover:from-red-400/90 hover:to-blue-500/90 cursor-pointer"
          :default-color="active ? 'text-red-600' : 'text-white'"
          :active-color="active ? 'bg-red-100 text-red-600' : ''"
        >
          <heart :fill="active ? 'currentColor' : 'none'" :size="20" />
          <div>47</div>
        </like-button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
