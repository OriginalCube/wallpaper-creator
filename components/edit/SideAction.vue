<template>
	<div
		class="w-10/12 h-full bg-preset-primary flex flex-col items-center text-preset-semantics"
	>
		<p class="text-3xl font-semibold text-left w-full px-2 py-1">
			{{ data.header }}
		</p>

		<!-- Field -->
		<div class="w-full h-auto" v-if="section !== 'confirm'">
			<div class="w-full h-auto" v-for="field in data.fields">
				<KeepAlive>
					<SidebarActionText v-if="field.type === 'text'" :data="field" />
				</KeepAlive>

				<KeepAlive>
					<SidebarActionUploader
						v-if="field.type === 'uploader'"
						:data="field"
					/>
				</KeepAlive>

				<KeepAlive>
					<SidebarActionColor v-if="field.type === 'color'" :data="field" />
				</KeepAlive>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { CustomField } from '@/utils/types'

const create = useCreate()
defineProps<{ data: CustomField; section: string }>()
</script>
