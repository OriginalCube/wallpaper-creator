<template>
	<div class="w-1/3 h-full flex items-center">
		<EditModal />
		<EditSidePanel :data="SidePanelActions[app.sideContent]" />
		<EditSideAction
			v-if="section.length"
			:data="SidePanelActions[app.sideContent][section]"
			:section="section"
		/>
	</div>
</template>

<script lang="ts" setup>
import type { SidePanel } from '@/utils/types'
const app = useApp()
const section = ref('addFiles')

const SidePanelActions: SidePanel = {
	add: {
		buttons: [
			{
				icon: 'i-mdi-add',
				iconColor: 'white',
				bgColor: 'black',
				label: 'Add assets',
				action: () => (section.value = 'addFiles'),
			},
			{
				icon: 'i-mdi-invert-colors',
				iconColor: 'white',
				bgColor: 'black',
				label: 'Customize Colors',
				action: () => (section.value = 'changeColor'),
			},
			{
				icon: 'i-mdi-check-circle',
				iconColor: 'white',
				bgColor: 'black',
				label: 'Confirmation',
				action: () => (section.value = 'confirm'),
			},
		],
		addFiles: {
			header: 'Upload',
			fields: [
				{
					name: 'Customize song name',
					type: 'text',
					model: 'name',
				},
				{
					name: 'Song',
					type: 'uploader',
					model: 'song',
				},
				{
					name: 'Image',
					type: 'uploader',
					model: 'image',
				},
			],
		},
		changeColor: {
			header: 'Customize colors',
			fields: [
				{
					name: 'Background Color',
					type: 'color',
					model: 'background',
					value: 'background',
				},
				{
					name: 'Foreground Color',
					type: 'color',
					model: 'foreground',
					value: 'foreground',
				},
				{
					name: 'Text Color',
					type: 'color',
					model: 'textColor',
					value: 'textColor',
				},
			],
		},
		confirm: {
			header: 'Confirm Data',
			type: 'confirmation',
		},
	},
}
</script>
