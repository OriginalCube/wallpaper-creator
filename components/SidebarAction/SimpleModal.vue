<template>
	<UCard
		:ui="{
			ring: '',
			divide: 'divide-y divide-gray-100 dark:divide-gray-800',
		}"
	>
		<template #header>
			<p class="text-xl">{{ header }}</p>
		</template>
		<div class="flex flex-col items-center justify-center gap-2 text-base">
			<p>{{ subtitle }}</p>
			<div class="flex gap-2">
				<UButton
					label="Cancel"
					secondary
					size="xl"
					@click="() => closeModal('simple')"
				/>
				<UButton label="Confirm" primary size="xl" @click="action" />
			</div>
		</div>
	</UCard>
</template>

<script setup lang="ts">
defineProps<{
	header: string
	subtitle: string
	action: any
	closeModal: any
}>()
</script>
