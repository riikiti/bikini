<script setup lang="ts">
  import { NCard, NTabPane, NTabs } from 'naive-ui'
  import GeneralSettingsForm from '~/components/settings/GeneralSettingsForm.vue'
  import ModelSettingsForm from '~/components/settings/ModelSettingsForm.vue'
  import { useUserStore } from '~/stores/user'
  import { EUserAccountType } from '~/services/enums'

  const userStore = useUserStore()
</script>

<template>
  <the-header />
  <the-wrapper class="mt-12">
    <n-tabs v-if="userStore.role === EUserAccountType.MODEL_ACCOUNT" type="segment" animated>
      <n-tab-pane name="oasis" tab="Общие настройки">
        <n-card title="Общие настройки" size="large">
          <div class="text-gray-400 text-lg mb-4">
            Для смены е-мейла обратитесь к
            <a href="" class="underline text-gray-400">модератору</a>
          </div>
          <!-- todo: вынести в отдельный компонент ибо 2 формы хранить на стр такое себе         -->
          <general-settings-form />
        </n-card>
      </n-tab-pane>
      <n-tab-pane name="test" tab="Настройки модели">
        <n-card title="Настройки модели" size="large">
          <model-settings-form />
        </n-card>
      </n-tab-pane>
    </n-tabs>
    <n-card v-else title="Общие настройки" size="large">
      <general-settings-form />
    </n-card>
    <!--    <Card>
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription
          >Для смены е-мейла обратитесь к
          <a href="" class="underline">модератору</a></CardDescription
        >
      </CardHeader>
      <separator class="mb-4" />
      <CardContent>
        <form>
          <div class="grid items-center w-full gap-4">
            <div class="flex flex-col space-y-1.5">
              <Label for="name">Username</Label>
              <Input id="name" placeholder="Type name" />
            </div>
            <div class="flex flex-col sm:flex-row md:gap-8">
              <div class="flex flex-grow flex-col">
                <app-select
                  :data="languages"
                  label="Country"
                  :selected="values.language"
                  @select="selectValue"
                />
              </div>
              <div class="flex flex-grow flex-col">
                <Label for="newPassword">City</Label>
                <Input id="newPassword" type="password" placeholder="Type city" />
              </div>
            </div>

            <separator class="mt-2 mb-2" />

            <Label for="password" class="mb-2">Change Password</Label>
            <div class="flex flex-col sm:flex-row md:gap-8">
              <div class="flex flex-grow flex-col space-y-1.5">
                <Label for="password">Password</Label>
                <Input id="password" type="password" placeholder="Type password" />
              </div>
              <div class="flex flex-grow flex-col space-y-1.5">
                <Label for="newPassword">Repeat Password</Label>
                <Input id="newPassword" type="password" placeholder="Type password" />
              </div>
            </div>
            <separator class="my-4" />
            <div class="flex flex-col sm:flex-row md:gap-8"></div>
          </div>
        </form>
      </CardContent>
      <CardFooter class="flex justify-between px-6 pb-6">
        <Button variant="outline"> Cancel </Button>
        <Button class="dark:text-white">Save changes</Button>
      </CardFooter>
    </Card>-->
  </the-wrapper>
</template>

<style scoped></style>
