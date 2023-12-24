<template>
	<UCard class="absolute right-4 top-36 w-80">
		<template #header>
			<div class="flex items-center justify-between gap-2">
				<p class="text-md">Playlist</p>
				<div class="flex items-center justify-center gap-4">
					<div>
						<UTooltip text="Sort"
							><UButton color="green" @click="app.displayPlaylist" />
						</UTooltip>
					</div>
					<div>
						<UTooltip text="Exit"
							><UButton color="red" @click="app.displayPlaylist" />
						</UTooltip>
					</div>
				</div>
			</div>
		</template>
		<div class="flex h-72 w-full flex-col gap-4">
			<div
				class="flex items-center justify-center"
				v-for="(song, index) in items"
				:key="index"
			>
				<div class="flex w-full items-center justify-between gap-2">
					<p class="text-md w-auto">
						{{ `${index + 1}. ${song.name}` }}
					</p>
					<div class="flex items-center justify-center gap-4">
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
