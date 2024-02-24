<script setup lang="ts">
  import GhostButton from '~/components/TheHeader/GhostButton.vue'
  import { Pencil, SendHorizontal, Heart } from 'lucide-vue-next'
  import { Button } from '~/components/ui/button'
  import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
  import UserAvatar from '~/components/TheHeader/UserAvatar.vue'
  import { useUserStore } from '~/stores/user'
  import { LikeButton } from '~/components/buttons'
  import AppDropzone from '~/components/app/AppDropzone/AppDropzone.vue'
  import type { Ref } from 'vue'
  import { ref } from 'vue'
  import type { IBoxPostItem, IPhoto } from '~/services/models'

  const text = ref('')
  const active = ref(false)
  const userStore = useUserStore()
</script>

<template>
  <the-header />
  <the-wrapper class="mt-12 pb-12">
    <profile-header />
    <div class="grid grid-cols-[250px_1fr_250px] gap-12">
      <profile-sidebar />
      <div>
        <div>
          <tabs default-value="gallery" class="w-full">
            <tabs-list class="grid w-full grid-cols-3 bg-white dark:bg-muted">
              <tabs-trigger value="gallery"> Gallery </tabs-trigger>
              <tabs-trigger value="blog"> Blog </tabs-trigger>
              <tabs-trigger value="box"> Box </tabs-trigger>
            </tabs-list>
            <tabs-content value="gallery"> </tabs-content>
          </tabs>
        </div>
      </div>
      <profile-sidebar />
    </div>
  </the-wrapper>
</template>
<style>
  @import url('../../node_modules/primevue/resources/themes/aura-light-green/theme.css');
</style>
