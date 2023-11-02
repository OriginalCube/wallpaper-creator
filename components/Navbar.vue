<template>
  <div class="w-full bg-slate-200 h-16 flex items-center px-4 gap-6">
    <NuxtLink to="/">
      <UButton
        label="Wallpaper Creator V_1.0"
        icon="i-mdi-wallpaper"
        size="xl"
      />
    </NuxtLink>
    <UButton
      label="Add Song"
      icon="i-mdi-book-plus"
      size="xl"
      @click="changeAddingState('add')"
    />
    <UButton
      label="Check Song List"
      icon="i-mdi-format-list-bulleted"
      size="xl"
    />
    <UButton label="Download" icon="i-mdi-download" size="xl" />
  </div>
</template>

<script lang="ts" setup>
const { changeAddingState } = useApp();
</script>
