<template>
	<!-- Text -->
	<div class="flex h-auto w-full flex-col items-center justify-center gap-2">
		<p class="w-full p-2 px-4 text-xl font-medium">{{ data.name }}</p>
		<UInput
			v-model="create.songData[data.model]"
			class="w-11/12 bg-preset-primary text-preset-semantics"
		/>
	</div>
</template>

<script setup lang="ts">
const create = useCreate()
defineProps<{ data: { name: string; model: 'name' } }>()
</script>
