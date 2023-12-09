<template>
	<!-- Color -->
	<div class="w-full h-auto flex items-center gap-4 m-2">
		<input
			class="w-[40px] h-[40px]"
			type="color"
			v-model="create.songData[data.model]"
		/>
		<p class="text-xl font-medium">{{ data.name }}</p>
	</div>
</template>

<script lang="ts" setup>
const create = useCreate()
defineProps<{
	data: { name: string; model: 'foreground' | 'background' | 'textColor' }
}>()
</script>
