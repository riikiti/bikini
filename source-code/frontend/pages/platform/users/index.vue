<script setup lang="ts">
  import { cn } from '~/lib/utils'
  import { Button } from '@/components/ui/button'
  import Badge from '~/components/ui/badge/Badge.vue'
  import { Heart } from 'lucide-vue-next'
  import { Star } from 'lucide-vue-next'
  import { ArchiveRestore } from 'lucide-vue-next'
  import { GalleryHorizontalEnd } from 'lucide-vue-next'
  import { Trophy } from 'lucide-vue-next'
  import { MailPlus } from 'lucide-vue-next'
  import { LikeButton, TooltipButton } from '~/components/buttons'
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
      avatar:
        'https://bikini-star.com/cache/avatar/2850/NhM9YhNWjKdRG-FYUkDsyu_6aDerRLxMN-UPWYhlZeMC89bk6GAHhg8jUsE0wexn_1693299126CA-158x158.jpg'
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
      avatar:
        'https://bikini-star.com/cache/avatar/2850/NhM9YhNWjKdRG-FYUkDsyu_6aDerRLxMN-UPWYhlZeMC89bk6GAHhg8jUsE0wexn_1693299126CA-158x158.jpg'
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
      avatar:
        'https://bikini-star.com/cache/avatar/2850/NhM9YhNWjKdRG-FYUkDsyu_6aDerRLxMN-UPWYhlZeMC89bk6GAHhg8jUsE0wexn_1693299126CA-158x158.jpg'
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
      avatar:
        'https://bikini-star.com/cache/avatar/2850/NhM9YhNWjKdRG-FYUkDsyu_6aDerRLxMN-UPWYhlZeMC89bk6GAHhg8jUsE0wexn_1693299126CA-158x158.jpg'
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
      avatar:
        'https://bikini-star.com/cache/avatar/2850/NhM9YhNWjKdRG-FYUkDsyu_6aDerRLxMN-UPWYhlZeMC89bk6GAHhg8jUsE0wexn_1693299126CA-158x158.jpg'
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
      avatar:
        'https://bikini-star.com/cache/avatar/2850/NhM9YhNWjKdRG-FYUkDsyu_6aDerRLxMN-UPWYhlZeMC89bk6GAHhg8jUsE0wexn_1693299126CA-158x158.jpg'
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
      avatar:
        'https://bikini-star.com/cache/avatar/2850/NhM9YhNWjKdRG-FYUkDsyu_6aDerRLxMN-UPWYhlZeMC89bk6GAHhg8jUsE0wexn_1693299126CA-158x158.jpg'
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
      avatar:
        'https://bikini-star.com/cache/avatar/2850/NhM9YhNWjKdRG-FYUkDsyu_6aDerRLxMN-UPWYhlZeMC89bk6GAHhg8jUsE0wexn_1693299126CA-158x158.jpg'
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
      avatar:
        'https://bikini-star.com/cache/avatar/2850/NhM9YhNWjKdRG-FYUkDsyu_6aDerRLxMN-UPWYhlZeMC89bk6GAHhg8jUsE0wexn_1693299126CA-158x158.jpg'
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
      avatar:
        'https://bikini-star.com/cache/avatar/2850/NhM9YhNWjKdRG-FYUkDsyu_6aDerRLxMN-UPWYhlZeMC89bk6GAHhg8jUsE0wexn_1693299126CA-158x158.jpg'
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
      avatar:
        'https://bikini-star.com/cache/avatar/2850/NhM9YhNWjKdRG-FYUkDsyu_6aDerRLxMN-UPWYhlZeMC89bk6GAHhg8jUsE0wexn_1693299126CA-158x158.jpg'
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
      avatar:
        'https://bikini-star.com/cache/avatar/2850/NhM9YhNWjKdRG-FYUkDsyu_6aDerRLxMN-UPWYhlZeMC89bk6GAHhg8jUsE0wexn_1693299126CA-158x158.jpg'
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
      avatar:
        'https://bikini-star.com/cache/avatar/2850/NhM9YhNWjKdRG-FYUkDsyu_6aDerRLxMN-UPWYhlZeMC89bk6GAHhg8jUsE0wexn_1693299126CA-158x158.jpg'
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
      avatar:
        'https://bikini-star.com/cache/avatar/2850/NhM9YhNWjKdRG-FYUkDsyu_6aDerRLxMN-UPWYhlZeMC89bk6GAHhg8jUsE0wexn_1693299126CA-158x158.jpg'
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
      avatar:
        'https://bikini-star.com/cache/avatar/2850/NhM9YhNWjKdRG-FYUkDsyu_6aDerRLxMN-UPWYhlZeMC89bk6GAHhg8jUsE0wexn_1693299126CA-158x158.jpg'
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
      avatar:
        'https://bikini-star.com/cache/avatar/2850/NhM9YhNWjKdRG-FYUkDsyu_6aDerRLxMN-UPWYhlZeMC89bk6GAHhg8jUsE0wexn_1693299126CA-158x158.jpg'
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
      avatar:
        'https://bikini-star.com/cache/avatar/2850/NhM9YhNWjKdRG-FYUkDsyu_6aDerRLxMN-UPWYhlZeMC89bk6GAHhg8jUsE0wexn_1693299126CA-158x158.jpg'
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
      avatar:
        'https://bikini-star.com/cache/avatar/2850/NhM9YhNWjKdRG-FYUkDsyu_6aDerRLxMN-UPWYhlZeMC89bk6GAHhg8jUsE0wexn_1693299126CA-158x158.jpg'
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
      avatar:
        'https://bikini-star.com/cache/avatar/2850/NhM9YhNWjKdRG-FYUkDsyu_6aDerRLxMN-UPWYhlZeMC89bk6GAHhg8jUsE0wexn_1693299126CA-158x158.jpg'
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
      avatar:
        'https://bikini-star.com/cache/avatar/2850/NhM9YhNWjKdRG-FYUkDsyu_6aDerRLxMN-UPWYhlZeMC89bk6GAHhg8jUsE0wexn_1693299126CA-158x158.jpg'
    }
  ]
  // /all-users -param-> userId ->result: <array> etc check reference doc
</script>

<template>
  <the-header />
  <the-wrapper class="mt-12">
    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-16 gap-x-4">
      <div
        v-for="card in usersMock"
        class="rounded overflow-hidden relative bg-white dark:bg-muted border shadow-accent"
      >
        <div class="absolute top-2 left-2 z-20">
          <badge variant="destructive">Рейтинг: {{ card.rating }}</badge>
        </div>
        <tooltip-button class="absolute top-2 right-2 z-20" direction="bottom">
          <template #trigger>
            <like-button>
              <star fill="currentColor" />
            </like-button>
          </template>
          <template #content>Добавить в избранное :)</template>
        </tooltip-button>
        <div class="relative overflow-hidden rounded-md">
          <img
            :src="card.avatar"
            alt="portfolio"
            width="100%"
            height="100%"
            :class="cn('h-full w-full object-cover transition-all lg:hover:scale-105')"
          />
        </div>
        <div class="space-y-1 mt-3 px-4">
          <h3 class="text-xl font-medium leading-none">
            {{ card.username }}
          </h3>
        </div>
        <div class="grid grid-cols-5 mt-2 px-4 self-center pb-2 pt-2">
          <tooltip-button direction="bottom">
            <template #trigger>
              <like-button default-color="text-gray-300" class="w-full">
                <heart size="32" fill="currentColor" />
              </like-button>
            </template>
            <template #content>Добавить в избранное :)</template>
          </tooltip-button>
          <tooltip-button direction="bottom">
            <template #trigger>
              <like-button default-color="text-gray-300" class="w-full">
                <mail-plus :size="32" />
              </like-button>
            </template>
            <template #content>Добавить в избранное :)</template>
          </tooltip-button>
          <tooltip-button direction="bottom">
            <template #trigger>
              <like-button default-color="text-gray-300" class="w-full">
                <archive-restore :size="32" />
              </like-button>
            </template>
            <template #content>Добавить в избранное :)</template>
          </tooltip-button>
          <tooltip-button direction="bottom">
            <template #trigger>
              <like-button default-color="text-gray-300" class="w-full">
                <gallery-horizontal-end :size="32" fill="currentColor" />
              </like-button>
            </template>
            <template #content>Добавить в избранное :)</template>
          </tooltip-button>
          <tooltip-button direction="bottom">
            <template #trigger>
              <like-button default-color="text-gray-300" class="w-full">
                <trophy :size="32" fill="currentColor" />
              </like-button>
            </template>
            <template #content>Добавить в избранное :)</template>
          </tooltip-button>
        </div>
      </div>
    </div>
  </the-wrapper>
</template>
