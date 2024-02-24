<script setup lang="ts">
  import { RoutesNames } from '~/services/routes-names'
  import { Camera, Pencil, Mail } from 'lucide-vue-next'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
</script>

<template>
  <div>
    <div class="relative">
      <!--Profile header bg-->
      <div class="relative rounded-xl overflow-hidden">
        <div class="h-[350px]">
          <img
            src="../../assets/images/profile/test-bg.jpeg"
            class="max-h-full w-full object-cover"
          />
        </div>
        <Button size="icon" class="absolute top-4 right-4 h-14 w-14 rounded-2xl dark:text-white">
          <camera :size="34" />
        </Button>
      </div>
      <!--   Profile avatar   -->
      <div class="absolute bottom-0 left-6">
        <div
          class="relative w-[200px] h-[200px] rounded-xl overflow-hidden group/item transition-all duration-300"
        >
          <img src="../../assets/images/profile/user-default.png" />
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
            <nuxt-link-locale :to="RoutesNames.EDIT_PROFILE" class="flex items-center">
              <pencil :size="20" />
              <div class="ml-4">{{ $t('profile.header.edit_profile') }}</div>
            </nuxt-link-locale>
          </Button>
          <Button as-child class="rounded-xl">
            <nuxt-link-locale :to="RoutesNames.EDIT_PROFILE" class="flex items-center">
              <mail :size="20" />
              <div class="ml-4">{{ $t('profile.header.send') }}</div>
            </nuxt-link-locale>
          </Button>
        </div>
      </div>
    </div>
    <separator class="my-4"></separator>
  </div>
</template>
