<template>
	<!-- Text -->
	<div class="w-full h-auto flex flex-col gap-2 items-center justify-center">
		<p class="text-xl font-medium w-full p-2 px-4">{{ data.name }}</p>
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
