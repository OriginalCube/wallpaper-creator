<template>
	<div ref="visualizerRef" class="w-2/5 h-28 flex items-end justify-between">
		<div
			v-for="n in 32"
			ref="line"
			:key="n"
			:style="
				`width: ${lineWidth}px; marginRight: ${lineWidth}px; height: ${
					lineHeight * Math.random()
				}px; backgroundColor : ` + create.songData.foreground
			"
			:class="`bg-[${create.songData.background}]`"
		/>
	</div>
</template>

<script setup lang="ts">
const create = useCreate()
const app = useApp()

const visualizerRef = ref()
const lineWidth = ref(0)
const lineHeight = ref(0)

watch(visualizerRef, () => {
	lineWidth.value = visualizerRef.value.clientWidth / 72
	lineHeight.value = visualizerRef.value.clientHeight * 0.95
})
</script>
