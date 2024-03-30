<script setup lang="ts">
  import { NEmpty, NGrid, NGridItem, NIcon } from 'naive-ui'
  import ContestCard from '~/components/contest/ContestCard.vue'
  import { Camera } from 'lucide-vue-next'
  import contestRepository from '~/services/repository/contestRepository'

  const userList = ref(null)

  const fetchActivePlayers = async () => {
    const response = await contestRepository.allModelList()
    const { data } = response
    userList.value = data.contest
  }

  onMounted(async () => {
    await fetchActivePlayers()
  })
</script>

<template>
  <div class="mt-16">
    <div class="text-[48px] mb-16">Участницы конкурса</div>
    <n-grid
      v-if="userList && userList.users.length > 0"
      cols="2 m:3 l:4"
      :x-gap="10"
      :y-gap="10"
      responsive="screen"
    >
      <n-grid-item v-for="(player, idx) in userList.users" :key="idx">
        <contest-card :contest-item="player" @save="fetchActivePlayers()" />
      </n-grid-item>
    </n-grid>
    <div v-else>
      <n-empty description="Участниц пока нет(">
        <template #icon>
          <n-icon :size="36" color="#19A058">
            <Camera />
          </n-icon>
        </template>
      </n-empty>
    </div>
  </div>
</template>

<style scoped></style>
