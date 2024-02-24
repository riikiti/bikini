<template>
  <the-header />
  <the-wrapper class="mt-12 pb-12">
    <profile-header />
    <div class="grid grid-cols-[250px_1fr_250px] gap-12">
      <profile-sidebar />
      <div>
        <div class="mt-6">
          <slot />
        </div>
      </div>
      <profile-sidebar />
    </div>
  </the-wrapper>
</template>
