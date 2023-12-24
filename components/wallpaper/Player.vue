<template>
	<div class="mt-4 flex h-24 w-2/5 flex-col items-center justify-center">
		<p
			class="text-md py-2 text-white"
			:style="`text-shadow: 1px 1px 3px ${create.songData.textColor}`"
		>
			{{
				create.songData.name.length
					? create.songData.name
					: PresetData[app.presetIndex].name
			}}
		</p>
		<input class="w-11/12" type="range" />
		<div class="mt-6 flex items-center justify-evenly gap-12">
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
const app = useApp()
</script>
