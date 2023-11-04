<template>
	<div class="w-1/3 h-full flex items-center">
		<EditModal />
		<EditSidePanel :data="SidePanelActions[app.sideContent]" />
		<EditSideAction
			v-if="section.length"
			:data="SidePanelActions[app.sideContent][section]"
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
				icon: 'i-mdi-rename-box-outline',
				iconColor: 'white',
				bgColor: 'black',
				label: 'Customize Names',
				action: () => console.log('hello world'),
			},
		],
		addFiles: {
			header: 'Upload',
			fields: [
				{ name: 'Song Name', type: 'text', value: 'name' },
				{
					name: 'Upload Song',
					type: 'uploader',
					positiveBtn: 'Upload',
					action: () => console.log('upload'),
				},
				{
					name: 'Upload Image',
					type: 'uploader',
					positiveBtn: 'Upload',
					action: () => console.log('upload'),
				},
			],
		},
		changeColor: {
			header: 'Customize colors',
			fields: [
				{
					name: 'Background Color',
					type: 'color',
					value: 'background',
				},
				{
					name: 'Foreground Color',
					type: 'color',
					value: 'foreground',
				},
				{
					name: 'Text Color',
					type: 'color',
					value: 'textColor',
				},
			],
		},
	},
}
</script>
