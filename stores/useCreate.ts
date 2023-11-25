export const useCreate = defineStore('create', () => {
	const toast = useToast()

	const songIndex = ref(0)
	const initialValue = {
		name: '',
		song: '',
		image: '',
		foreground: '',
		background: '',
		textColor: '',
	}
	const songData = reactive<any>({ ...initialValue })

	const list = ref([])

	const missingData = (): boolean => {
		for (const key in songData) {
			if (songData[key] === '') return false
		}
		return true
	}

	const addSong = () => {
		if (missingData()) {
			list.value.push(songData)
			songData.value = { ...initialValue }
		} else {
			console.log('toaster')
			toast.add({ title: 'Complete all fields.' })
		}
		console.log(list.value)
	}

	return { songData, songIndex, addSong }
})
