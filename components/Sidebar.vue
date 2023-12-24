<template>
	<div class="h-full w-1/3">
		<EditModal />
		<div class="flex h-full w-full items-center">
			<EditSidePanel :data="SidePanelActions[app.sideContent]" />
			<EditSideAction
				v-if="section.length"
				:data="SidePanelActions[app.sideContent][section]"
				:section="section"
			/>
		</div>
		<Playlist
			v-if="app.playlist"
			:deleteSong="deleteSong"
			:updateSong="simpleModalUpdate"
		/>

		<UModal v-model="actionModal" preventClose>
			<SidebarActionConfirmation
				v-if="modalActions.confirm"
				:cancelConfirmation="closeModal"
			/>
			<SidebarActionDeleteSong
				v-if="modalActions.delete"
				:deleteId="deleteId"
				:closeModal="closeModal"
			/>
			<SidebarActionSimpleModal
				v-if="modalActions.simple"
				:header="simpleModalData.header"
				:subtitle="simpleModalData.subtitle"
				:action="simpleModalData.action"
				:close-modal="closeModal"
			/>
		</UModal>
	</div>
</template>

<script lang="ts" setup>
import type { SidePanel } from '@/utils/types'
const app = useApp()
const create = useCreate()
const section = ref('addFiles')
const actionModal = ref(false)
const deleteId = ref(-1)

const initialModalValue = {
	delete: false,
	update: false,
	confirm: false,
	simple: false,
}

const modalActions = reactive(initialModalValue)

const deleteSong = (id: number) => {
	deleteId.value = id
	modalActions.delete = true
	actionModal.value = true
}

const closeModal = (action: 'delete' | 'update' | 'confirm' | 'simple') => {
	modalActions[action] = false
	actionModal.value = false
}

const simpleModalData = reactive({
	header: '',
	subtitle: '',
	action: () => {},
})

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
				action: () => {
					modalActions.confirm = true
					actionModal.value = true
				},
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
