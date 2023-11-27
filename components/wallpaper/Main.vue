<template>
	<div
		class="w-full h-full flex flex-col items-center justify-center"
		:style="'background-color: ' + PresetData[app.presetIndex].background"
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
const app = useApp()
</script>
