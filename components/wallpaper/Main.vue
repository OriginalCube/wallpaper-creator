<template>
	<div
		class="w-full h-full flex flex-col items-center justify-center"
		:style="'background-color: ' + create.songData.background"
	>
		<WallpaperVisualizer />
		<img
			class="w-2/5"
			:src="`/images/${PresetData[app.presetIndex].name}.jpg`"
		/>
		<WallpaperPlayer />
	</div>
</template>

<script lang="ts" setup>
import PresetData from '@/public/SongData.json'

const create = useCreate()
watch(create.songData, () => console.log(create.songData))
const app = useApp()
</script>
