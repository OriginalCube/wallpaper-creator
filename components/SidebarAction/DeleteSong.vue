<template>
	<UCard
		:ui="{
			ring: '',
			divide: 'divide-y divide-gray-100 dark:divide-gray-800',
		}"
	>
		<template #header>
			<p class="text-xl">Confirm action</p>
		</template>
		<div
			class="flex flex-col items-center justify-center w-11/12 m-auto gap-10"
		>
			<p class="text-md">Are you sure you want to delete {{ deleteId + 1 }}?</p>
			<div class="flex items-center justify-evenly w-full">
				<UButton
					label="Cancel"
					secondary
					size="xl"
					@click="() => closeModal('delete')"
				/>
				<UButton label="Confirm" primary size="xl" @click="deleteSong" />
			</div>
		</div>
	</UCard>
</template>

<script setup lang="ts">
const props = defineProps<{ deleteId: any; closeModal: any }>()
const create = useCreate()

const deleteSong = () => {
	create.removeSong(props.deleteId)
	props.closeModal('delete')
}
</script>
