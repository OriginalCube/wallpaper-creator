<template>
	<!-- Uploader -->
	<div class="w-full h-[300px] flex items-center flex-col my-4">
		<p class="text-2xl p-4 text-left w-full">{{ data.name }}</p>
		<div
			class="dropzone w-11/12 flex items-center justify-center"
			ref="dropRef"
		/>
		<p class="text-xl p-2">Name of file</p>
		<p
			class="text-md w-4/5 text-ellipsis text-center overflow-hidden h-auto p-[1px]"
		>
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
const imageUrl = inject('imageUrl') as any

onMounted(() => {
	if (dropRef.value !== null) {
		const dropzone = new Dropzone(dropRef.value, {
			headers: {},
			addRemoveLinks: true,
			uploadMultiple: false,
			autoProcessQueue: false,
			maxFilesize: 250, // MB
			thumbnailHeight: 500,
			thumbnailWidth: 500,
			maxFiles: 1,
			resizeMimeType: 'image/webp',
			url: '_blank',
			acceptedFiles: props.data.model === 'image' ? 'image/*' : 'audio/*',
		})

		dropzone.on('addedfile', (file: any) => {
			if (props.data.model !== 'image')
				useToast().add({
					title: 'Success',
					description: 'Only image files will be previewed.',
				})
			props.data.model
				? (create.songData[props.data.model] = file.name)
				: console.error('No model found.')
		})

		dropzone.on('thumbnail', (_, dataUri) => {
			if (props.data.model === 'image') imageUrl.value = dataUri
		})

		dropzone.on('removedfile', () =>
			props.data.model
				? (create.songData[props.data.model] = '')
				: console.error('No model found.'),
		)
	}
})
</script>
