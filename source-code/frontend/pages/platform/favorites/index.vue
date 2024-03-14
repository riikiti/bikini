<script setup lang="ts">
  import { h } from 'vue'
  import {
    Heart,
    MailPlus,
    Star,
    ArchiveRestore,
    GalleryHorizontalEnd,
    Trophy
  } from 'lucide-vue-next'
  import { NIcon, NImage, NTag } from 'naive-ui'
  import { definePageMeta } from '#imports'

  definePageMeta({
    layout: 'profile-layout',
    key: 'settings',
    middleware: 'auth'
  })

  const usersMock = [
    {
      id: 1,
      username: 'Ket',
      actions: {
        canSendMessage: true,
        canWiningContest: false,
        hasBoxContent: false,
        hasBlogContent: false
      },
      rating: 5000,
      modelInFavourite: true,
      activeCommunicatation: false,
      avatar: 'https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg'
    },
    {
      id: 1,
      username: 'Ket',
      actions: {
        canSendMessage: true,
        canWiningContest: false,
        hasBoxContent: false,
        hasBlogContent: false
      },
      rating: 5000,
      modelInFavourite: true,
      activeCommunicatation: false,
      avatar: 'https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg'
    },
    {
      id: 1,
      username: 'Ket',
      actions: {
        canSendMessage: true,
        canWiningContest: false,
        hasBoxContent: false,
        hasBlogContent: false
      },
      rating: 5000,
      modelInFavourite: true,
      activeCommunicatation: false,
      avatar: 'https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg'
    },
    {
      id: 1,
      username: 'Ket',
      actions: {
        canSendMessage: true,
        canWiningContest: false,
        hasBoxContent: false,
        hasBlogContent: false
      },
      rating: 5000,
      modelInFavourite: true,
      activeCommunicatation: false,
      avatar: 'https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg'
    },
    {
      id: 1,
      username: 'Ket',
      actions: {
        canSendMessage: true,
        canWiningContest: false,
        hasBoxContent: false,
        hasBlogContent: false
      },
      rating: 5000,
      modelInFavourite: true,
      activeCommunicatation: false,
      avatar: 'https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg'
    },
    {
      id: 1,
      username: 'Ket',
      actions: {
        canSendMessage: true,
        canWiningContest: false,
        hasBoxContent: false,
        hasBlogContent: false
      },
      rating: 5000,
      modelInFavourite: true,
      activeCommunicatation: false,
      avatar: 'https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg'
    },
    {
      id: 1,
      username: 'Ket',
      actions: {
        canSendMessage: true,
        canWiningContest: false,
        hasBoxContent: false,
        hasBlogContent: false
      },
      rating: 5000,
      modelInFavourite: true,
      activeCommunicatation: false,
      avatar: 'https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg'
    },
    {
      id: 1,
      username: 'Ket',
      actions: {
        canSendMessage: true,
        canWiningContest: false,
        hasBoxContent: false,
        hasBlogContent: false
      },
      rating: 5000,
      modelInFavourite: true,
      activeCommunicatation: false,
      avatar: 'https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg'
    },
    {
      id: 1,
      username: 'Ket',
      actions: {
        canSendMessage: true,
        canWiningContest: false,
        hasBoxContent: false,
        hasBlogContent: false
      },
      rating: 5000,
      modelInFavourite: true,
      activeCommunicatation: false,
      avatar: 'https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg'
    },
    {
      id: 1,
      username: 'Ket',
      actions: {
        canSendMessage: true,
        canWiningContest: false,
        hasBoxContent: false,
        hasBlogContent: false
      },
      rating: 5000,
      modelInFavourite: true,
      activeCommunicatation: false,
      avatar: 'https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg'
    },
    {
      id: 1,
      username: 'Ket',
      actions: {
        canSendMessage: true,
        canWiningContest: false,
        hasBoxContent: false,
        hasBlogContent: false
      },
      rating: 5000,
      modelInFavourite: true,
      activeCommunicatation: false,
      avatar: 'https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg'
    },
    {
      id: 1,
      username: 'Ket',
      actions: {
        canSendMessage: true,
        canWiningContest: false,
        hasBoxContent: false,
        hasBlogContent: false
      },
      rating: 5000,
      modelInFavourite: true,
      activeCommunicatation: false,
      avatar: 'https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg'
    },
    {
      id: 1,
      username: 'Ket',
      actions: {
        canSendMessage: true,
        canWiningContest: false,
        hasBoxContent: false,
        hasBlogContent: false
      },
      rating: 5000,
      modelInFavourite: true,
      activeCommunicatation: false,
      avatar: 'https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg'
    },
    {
      id: 1,
      username: 'Ket',
      actions: {
        canSendMessage: true,
        canWiningContest: false,
        hasBoxContent: false,
        hasBlogContent: false
      },
      rating: 5000,
      modelInFavourite: true,
      activeCommunicatation: false,
      avatar: 'https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg'
    },
    {
      id: 1,
      username: 'Ket',
      actions: {
        canSendMessage: true,
        canWiningContest: false,
        hasBoxContent: false,
        hasBlogContent: false
      },
      rating: 5000,
      modelInFavourite: true,
      activeCommunicatation: false,
      avatar: 'https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg'
    },
    {
      id: 1,
      username: 'Ket',
      actions: {
        canSendMessage: true,
        canWiningContest: false,
        hasBoxContent: false,
        hasBlogContent: false
      },
      rating: 5000,
      modelInFavourite: true,
      activeCommunicatation: false,
      avatar: 'https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg'
    }
  ]
  // /all-users -param-> userId ->result: <array> etc check reference doc
</script>

<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-16 gap-x-4">
    <div
      v-for="card in usersMock"
      class="rounded overflow-hidden relative bg-white dark:bg-muted border shadow-accent"
    >
      <div class="absolute top-2 left-2 z-20">
        <n-tag round strong :bordered="false">
          <template #icon>
            <n-icon :component="h(Trophy)" />
          </template>
          {{ card.rating }}
        </n-tag>
      </div>
      <div class="absolute top-2 right-2 z-20 text-gray-300 hover:text-red-600">
        <n-icon :size="32">
          <star fill="currentColor" />
        </n-icon>
      </div>
      <div class="h-[250px] relative overflow-hidden rounded-md">
        <n-image :src="card.avatar" width="100%" height="100%" object-fit="cover" class="w-full" />
      </div>
      <div class="space-y-1 mt-3">
        <h3 class="text-xl font-medium leading-none">
          {{ card.username }}
        </h3>
      </div>
      <div class="grid grid-cols-5 mt-2 self-center pb-2 pt-2">
        <div class="text-gray-300 hover:text-red-600">
          <n-icon :size="32">
            <heart fill="transparent" />
          </n-icon>
        </div>
        <div class="text-gray-300 hover:text-red-600">
          <n-icon :size="32">
            <mail-plus :size="32" />
          </n-icon>
        </div>
        <div class="text-gray-300 hover:text-red-600">
          <n-icon :size="32">
            <archive-restore :size="32" />
          </n-icon>
        </div>
        <div class="text-gray-300 hover:text-red-600">
          <n-icon :size="32">
            <gallery-horizontal-end :size="32" fill="currentColor" />
          </n-icon>
        </div>
        <div class="text-gray-300 hover:text-red-600">
          <n-icon :size="32">
            <trophy :size="32" />
          </n-icon>
        </div>
      </div>
    </div>
  </div>
</template>
