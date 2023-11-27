<template>
	<div class="mt-4 w-2/5 h-24 flex flex-col items-center justify-center">
		<input class="w-11/12" type="range" />
		<div class="flex items-center justify-evenly">
			<UButton
				icon="i-mdi-refresh"
				class="bg-transparent hover:bg-transparent"
				size="xl"
			/>
			<UButton
				icon="i-mdi-rewind"
				class="bg-transparent hover:bg-transparent"
				size="xl"
			/>
			<UButton
				icon="i-mdi-pause"
				class="bg-transparent hover:bg-transparent"
				size="xl"
			/>
			<UButton
				icon="i-mdi-fast-forward"
				class="bg-transparent hover:bg-transparent"
				size="xl"
			/>
			<UButton
				icon="i-mdi-shuffle"
				class="bg-transparent hover:bg-transparent"
				size="xl"
			/>
		</div>
	</div>
</template>

<script setup lang="ts"></script>
