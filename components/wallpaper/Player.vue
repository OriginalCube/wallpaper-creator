<template>
	<div class="mt-4 w-2/5 h-24 flex flex-col items-center justify-center">
		<p
			class="text-md py-2 text-white"
			:style="`text-shadow: 1px 1px 3px ${create.songData.textColor}`"
		>
			{{
				create.songData.name.length
					? create.songData.name
					: PresetData[useApp().presetIndex].name
			}}
		</p>
		<input class="w-11/12" type="range" />
		<div class="flex items-center gap-12 justify-evenly mt-6">
			<img src="/assets/images/replay.png" class="w-6" />
			<img src="/assets/images/backward.png" class="w-6" />
			<img src="/assets/images/pause.png" class="w-8" />
			<img src="/assets/images/forward.png" class="w-6" />
			<img src="/assets/images/shuffle.png" class="w-6" />
		</div>
	</div>
</template>

<script setup lang="ts">
import PresetData from '@/public/SongData.json'
const create = useCreate()
</script>
