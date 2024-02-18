<script setup lang="ts">
  import GhostButton from '~/components/TheHeader/GhostButton.vue'
  import { Camera, Pencil, Mail, SendHorizontal, Heart, MessageSquareMore } from 'lucide-vue-next'
  import { Button } from '~/components/ui/button'
  import { RoutesNames } from '~/services/routes-names'
  import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
  import UserAvatar from '~/components/TheHeader/UserAvatar.vue'
  import { useUserStore } from '~/stores/user'
  import { LikeButton } from '~/components/buttons'

  const text = ref('')
  const active = ref(false)
  const userStore = useUserStore()
</script>

<template>
  <the-header />
  <the-wrapper class="mt-12 pb-12">
    <div>
      <div class="relative">
        <!--Profile header bg-->
        <div class="relative rounded-xl overflow-hidden">
          <div class="h-[350px]">
            <img
              src="~/assets/images/profile/test-bg.jpeg"
              class="max-h-full w-full object-cover"
            />
          </div>
          <Button size="icon" class="absolute top-4 right-4 h-14 w-14 rounded-2xl dark:text-white">
            <camera :size="34" />
          </Button>
        </div>
        <!--   profile avatar   -->
        <div class="absolute bottom-0 left-6">
          <div
            class="relative w-[200px] h-[200px] rounded-xl overflow-hidden group/item transition-all duration-300"
          >
            <img src="~/assets/images/profile/user-default.png" />
            <div
              class="group/edit invisible group-hover/item:visible transition-all duration-300 absolute bottom-0 left-0 right-0 w-full h-1/4 flex items-center text-white justify-center backdrop-blur-[10px] bg-slate-600 cursor-pointer"
            >
              <camera :size="34" />
            </div>
          </div>
        </div>
        <!--  prfoile subheader    -->
        <div class="h-[100px] pl-[250px] pr-6 flex items-center justify-between gap-12">
          <div class="flex items-center gap-12">
            <div>dfsdf</div>
            <div>dfsdf</div>
            <div>dfsdf</div>
            <div>dfsdf</div>
          </div>
          <div class="flex items-center gap-8">
            <Button as-child class="rounded-xl">
              <nuxt-link :to="RoutesNames.EDIT_PROFILE" class="flex items-center">
                <pencil :size="20" />
                <div class="ml-4">Редактировать профиль</div>
              </nuxt-link>
            </Button>
            <Button as-child class="rounded-xl">
              <nuxt-link :to="RoutesNames.EDIT_PROFILE" class="flex items-center">
                <mail :size="20" />
                <div class="ml-4">Написать</div>
              </nuxt-link>
            </Button>
          </div>
        </div>
      </div>
      <separator class="my-4"></separator>
    </div>
    <div class="grid grid-cols-[250px_1fr_250px] gap-12">
      <div>Profile Info</div>
      <div class="">
        <div>
          <tabs default-value="gallery" class="w-full">
            <tabs-list class="grid w-full grid-cols-3 bg-white dark:bg-muted">
              <tabs-trigger value="gallery"> Gallery </tabs-trigger>
              <tabs-trigger value="blog"> Blog </tabs-trigger>
              <tabs-trigger value="box"> Box </tabs-trigger>
            </tabs-list>
            <tabs-content value="gallery">
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
                <div
                  class="px-8 py-4 shadow-sm rounded-xl bg-white dark:bg-muted flex flex-col gap-4"
                >
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto
                        fugiat hic illum ipsum labore nihil omnis porro quae quidem ratione saepe
                        tenetur, voluptas, voluptate voluptates voluptatibus voluptatum. Cupiditate,
                        odit.
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
            </tabs-content>
            <tabs-content value="blog">
              <div class="px-8 pt-8 pb-4 shadow-sm rounded-xl bg-white dark:bg-muted"></div>
              <div class="grid grid-cols-3 gap-8">
                <app-dropzone />
              </div>
            </tabs-content>
            <tabs-content value="box"> Box field </tabs-content>
          </tabs>
        </div>
      </div>
      <div>Some Info</div>
    </div>
  </the-wrapper>
</template>
