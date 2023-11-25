<template>
	<!-- Color -->
	<div class="w-full h-auto flex items-center gap-4 m-2">
		<input class="w-[40px] h-[40px]" type="color" v-model="color" />
		<p class="text-xl font-medium">{{ data.name }}</p>
	</div>
</template>

<script lang="ts" setup>
const create = useCreate()
const props = defineProps<{
	data: { name: string; model: 'foreground' | 'background' | 'textColor' }
}>()

const color = ref()

watch(color, () => (create.songData[props.data.model] = color.value))
</script>
