<script setup lang="ts">
  import { NEmpty, NGrid, NGridItem, NIcon } from 'naive-ui'
  import ContestCard from '~/components/contest/ContestCard.vue'
  import { onMounted, ref } from 'vue'
  import { Camera } from 'lucide-vue-next'
  import contestRepository from '~/services/repository/contestRepository'

  interface IProps {
    isActiveContest?: boolean
  }

  const props = withDefaults(defineProps<IProps>(), {
    isActiveContest: true
  })

  const userList = ref(null)

  const fetchActivePlayers = async () => {
    try {
      const response = await contestRepository.allModelList()
      userList.value = response.data.contest
    } catch (e) {
      console.log(e)
    }
  }

  onMounted(async () => {
    await fetchActivePlayers()
  })
</script>

<template>
  <n-grid
    v-if="userList && userList.users.length > 0"
    cols="2 m:3 l:4"
    :x-gap="10"
    :y-gap="10"
    responsive="screen"
  >
    <n-grid-item v-for="(player, idx) in userList.users" :key="idx">
      <contest-card
        :contest-item="player"
        :is-ending-contest="!isActiveContest"
        @save="fetchActivePlayers()"
      />
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
</template>

<style scoped></style>
