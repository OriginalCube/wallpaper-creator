<template>
	<UCard class="absolute top-36 right-4 w-80">
		<template #header>
			<div class="flex items-center justify-between">
				<p class="text-md">Playlist</p>
				<UButton color="red" @click="app.displayPlaylist" />
			</div>
		</template>
		<div class="h-72 w-full flex flex-col gap-4">
			<div
				class="flex items-center justify-center"
				v-for="(song, index) in items"
				:key="index"
			>
				<div class="flex items-center justify-between gap-2 w-full">
					<p class="text-md w-auto">
						{{ `${index + 1}. ${song.name}` }}
					</p>
					<div class="flex items-center justify-center gap-4">
						<UTooltip text="Edit">
							<UButton
								icon="i-heroicons-pencil-square"
								size="sm"
								square
								variant="solid"
							/>
						</UTooltip>
						<UTooltip text="Delete">
							<UButton
								icon="i-heroicons-trash"
								size="sm"
								square
								variant="solid"
								@click="() => deleteSong(index)"
						/></UTooltip>
					</div>
				</div>
			</div>
		</div>
	</UCard>
</template>

<script setup lang="ts">
const app = useApp()
const create = useCreate()

const items = computed(() => create.list)

defineProps<{ deleteSong: any; updateSong: any }>()
</script>
