<script setup lang="ts">
  import { FwbDropdown, FwbListGroup, FwbListGroupItem } from 'flowbite-vue'
</script>

<template>
  <the-header />
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <fwb-dropdown text="Menu">
    <fwb-list-group>
      <fwb-list-group-item>Profile</fwb-list-group-item>
      <fwb-list-group-item>Settings</fwb-list-group-item>
      <fwb-list-group-item>Messages</fwb-list-group-item>
      <fwb-list-group-item>Download</fwb-list-group-item>
    </fwb-list-group>
  </fwb-dropdown>
</template>

<style scoped></style>
