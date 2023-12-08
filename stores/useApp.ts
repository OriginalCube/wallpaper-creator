import PresetData from '@/public/SongData.json'
export const useApp = defineStore('app', () => {
	const sideContent = ref<string>('add')
	const presetIndex = ref<number>(0)

	const changeAddingState = (e: string) => (sideContent.value = e)

	const updateIndex = () => {
		console.log(presetIndex)
		if (presetIndex.value + 1 < PresetData.length) {
			presetIndex.value += 1
		} else {
			presetIndex.value = 0
		}
	}

	return { sideContent, changeAddingState, presetIndex, updateIndex }
})
