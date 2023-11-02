<template>
  <UModal v-model="onMount">
    <div class="p-8 flex flex-col gap-2 items-center justify-between">
      <p class="text-md">
        This is still an early version so bugs can happen please report it on my
        github if any issue exists.
      </p>
      <UButton size="sm" color="blue" class="px-4" @click="onMount = false"
        ><p>Close</p></UButton
      >
    </div>
  </UModal>
</template>

<script lang="ts" setup>
const onMount = ref(false);

onMounted(() => {
  onMount.value = false;
});
</script>
