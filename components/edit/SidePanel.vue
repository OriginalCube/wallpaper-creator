<template>
	<div
		class="w-2/12 h-full border-r-[1px] border-preset-semantics bg-preset-primary"
	>
		<div
			v-for="button in data.buttons"
			class="h-auto w-auto pa-1 flex flex-col items-center justify-evenly gap-4 pt-4"
		>
			<UTooltip
				:text="button.label"
				:popper="{ placement: 'right' }"
				@click="button.action"
			>
				<UButton size="xl" :icon="button.icon" :color="button.color" />
			</UTooltip>
		</div>
	</div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ data: any }>(), { data: {} })
</script>
