<template>
	<div
		ref="visualizerRef"
		class="flex h-28 w-[550px] items-end justify-between"
	>
		<div
			v-for="n in 32"
			ref="line"
			:key="n"
			class="bg-white text-white"
			:style="`width: ${lineWidth}px; marginRight: ${lineWidth}px; height: ${
				lineHeight * Math.random()
			}px; background-color:${
				lineColor.length ? lineColor : PresetData[app.presetIndex].foreground
			}`"
		/>
	</div>
</template>

<script setup lang="ts">
import PresetData from '@/public/SongData.json'
const create = useCreate()
const app = useApp()

const visualizerRef = ref()
const lineWidth = ref(0)
const lineHeight = ref(0)

const lineColor = computed(() => create.songData.foreground)

watch(visualizerRef, () => {
	lineWidth.value = 550 / 72
	lineHeight.value = visualizerRef.value.clientHeight * 0.95
})
</script>
