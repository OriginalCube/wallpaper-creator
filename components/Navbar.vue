<template>
	<div class="w-full h-16 flex items-center px-4 gap-6 bg-preset-primary">
		<NuxtLink to="/">
			<UButton
				class="bg-preset-secondary text-preset-primary"
				label="Wallpaper Creator V_1.0"
				icon="i-mdi-wallpaper"
				size="xl"
			/>
		</NuxtLink>
		<UButton
			class="bg-preset-secondary text-preset-primary"
			label="Add Song"
			icon="i-mdi-book-plus"
			size="xl"
			@click="changeAddingState('add')"
		/>
		<UButton
			class="bg-preset-secondary text-preset-primary"
			label="Check Song List"
			icon="i-mdi-format-list-bulleted"
			size="xl"
			@click="changeAddingState('playlist')"
		/>
		<UButton
			class="bg-preset-secondary text-preset-primary"
			label="Download"
			icon="i-mdi-download"
			size="xl"
		/>
	</div>
</template>

<script lang="ts" setup>
const { changeAddingState } = useApp()
</script>
