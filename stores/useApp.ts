export const useApp = defineStore('app', () => {
	const sideContent = ref<string>('add')
	const presetIndex = ref<number>(0)

	const changeAddingState = (e: string) => (sideContent.value = e)

	watch(sideContent, () => console.log(sideContent.value))

	return { sideContent, changeAddingState, presetIndex }
})
