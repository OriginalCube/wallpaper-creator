<template>
	<div
		class="w-10/12 h-full bg-preset-primary flex flex-col items-center text-preset-semantics"
		v-if="data?.fields.length"
	>
		<p class="text-3xl font-semibold text-left w-full px-2 py-1">
			{{ data.header }}
		</p>

		<!-- Field -->
		<div class="w-full h-auto" v-for="field in data?.fields">
			<!-- Uploader -->
			<div
				class="w-full h-[300px] flex items-center flex-col my-4"
				:class="field.type === 'uploader' ? 'block' : 'hidden'"
			>
				<div class="dropzone w-11/12" ref="" />
			</div>

			<!-- Text -->
			<div
				class="w-full h-auto flex items-center gap-4 m-2"
				v-if="field.type === 'color'"
			>
				<input
					class="w-[40px] h-[40px]"
					type="color"
					v-model="create.songData[field.value]"
				/>
				<p class="text-xl font-medium">{{ field.name }}</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { CustomField } from '@/utils/types'
import 'dropzone/dist/dropzone.css'

const create = useCreate()
withDefaults(defineProps<{ data: CustomField | null }>(), { data: null })
</script>
