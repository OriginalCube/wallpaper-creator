<template>
	<div class="w-full h-auto flex items-start justify-center">
		<div class="w-11/12 flex flex-col gap-4 h-auto">
			<p class="text-xl">Name: {{ create.songData.name }}</p>
			<p class="text-xl">Song: {{ create.songData.song }}</p>
			<p class="text-xl">Image: {{ create.songData.image }}</p>
			<p class="text-xl">Background: {{ create.songData.background }}</p>
			<p class="text-xl">Foreground: {{ create.songData.foreground }}</p>
			<div class="w-full h-auto flex items-center justify-center">
				<UButton label="Add Song" size="md" @click="create.addSong" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const create = useCreate()
</script>
