<template>
	<!-- Uploader -->
	<div class="w-full h-[300px] flex items-center flex-col my-4">
		<p class="text-2xl p-4 text-left w-full">{{ data.name }}</p>
		<div
			class="dropzone w-11/12 flex items-center justify-center"
			ref="dropRef"
		/>
		<p class="text-xl p-2" @click="console.log(create.songData)">
			Name of file
		</p>
		<p class="text-md p-[1px]">
			{{ data.model ? create.songData[data.model] : 'unavailable' }}
		</p>
	</div>
</template>

<script lang="ts" setup>
import Dropzone from 'dropzone'
import 'dropzone/dist/dropzone.css'
const props = defineProps<{
	data: { name: string; model: 'image' | 'song' }
}>()

const create = useCreate()
const dropRef = ref(null)

onMounted(() => {
	if (dropRef.value !== null) {
		const dropzone = new Dropzone(dropRef.value, {
			headers: {},
			addRemoveLinks: true,
			uploadMultiple: false,
			autoProcessQueue: false,
			maxFilesize: 250, // MB
			maxFiles: 1,
			resizeMimeType: 'image/webp',
			url: '_blank',
			acceptedFiles: props.data.model === 'image' ? 'image/*' : 'audio/*',
		})

		dropzone.on('addedfile', (file) =>
			props.data.model
				? (create.songData[props.data.model] = file.name)
				: console.error('No model found.'),
		)

		dropzone.on('removedfile', () =>
			props.data.model
				? (create.songData[props.data.model] = '')
				: console.error('No model found.'),
		)
	}
})
</script>
