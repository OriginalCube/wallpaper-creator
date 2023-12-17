<template>
	<!-- Modal -->
	<UCard
		:ui="{
			ring: '',
			divide: 'divide-y divide-gray-100 dark:divide-gray-800',
		}"
	>
		<template #header>
			<p class="text-xl">Confirmation</p>
		</template>
		<div class="flex flex-col gap-4">
			<p class="text-xl">Name: {{ create.songData.name }}</p>
			<p class="text-xl">Song: {{ create.songData.song }}</p>
			<p class="text-xl">Image: {{ create.songData.image }}</p>
			<p class="text-xl">Background: {{ create.songData.background }}</p>
			<p class="text-xl">Foreground: {{ create.songData.foreground }}</p>
		</div>
		<template #footer>
			<div class="w-full h-auto flex items-center justify-evenly">
				<UButton
					label="Cancel"
					size="md"
					@click="() => cancelConfirmation('confirm')"
				/>
				<UButton label="Add Song" size="md" @click="addSong" />
			</div>
		</template>
	</UCard>
</template>

<script setup lang="ts">
const create = useCreate()
const props = defineProps<{ cancelConfirmation: any }>()

const addSong = () => {
	if (create.addSong()) props.cancelConfirmation('confirm')
}
</script>
