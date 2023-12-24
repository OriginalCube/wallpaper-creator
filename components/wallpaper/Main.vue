<template>
	<div
		class="flex h-full w-full flex-col items-center justify-center"
		:style="`background-color:${
			create.songData.background
				? create.songData.background
				: PresetData[app.presetIndex].background
		}`"
	>
		<WallpaperVisualizer />
		<img
			class="h-[550px] w-[550px] object-fill"
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
