<template>
	<div
		class="w-full h-full flex flex-col items-center justify-center"
		:style="`background-color:${
			create.songData.background
				? create.songData.background
				: PresetData[app.presetIndex].background
		}`"
	>
		<WallpaperVisualizer />
		<img
			class="w-[550px] h-[550px] object-fill"
			:src="
				imageUrl.length
					? imageUrl
					: `/images/${PresetData[app.presetIndex].name}.jpg`
			"
		/>
		<WallpaperPlayer />
	</div>
</template>

<script lang="ts" setup>
import PresetData from '@/public/SongData.json'

const imageUrl = inject('imageUrl') as any
const musicUrl = inject('musicUrl') as any

const create = useCreate()
const app = useApp()
</script>
