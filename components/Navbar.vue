<template>
  <div class="w-full bg-blue-500 h-16 flex items-center px-4 gap-6">
    <NuxtLink to="/">
      <UButton label="Wallpaper Creator" icon="i-mdi-wallpaper" size="xl" />
    </NuxtLink>
    <UButton label="Add Song" icon="i-mdi-book-plus" size="xl" />
    <UButton
      label="Check Song List"
      icon="i-mdi-format-list-bulleted"
      size="xl"
    />
    <UButton label="Download" icon="i-mdi-download" size="xl" />
  </div>
</template>

<script lang="ts" setup>
const useApp = useApp();
</script>
