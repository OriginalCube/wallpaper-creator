import PresetData from '@/public/SongData.json'
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
	const songData = ref<any>({ ...initialValue })

	const list = ref<any>([])

	const missingData = (): boolean => {
		for (const key in songData.value) {
			if (songData.value[key] === '') return false
		}
		return true
	}

	const addSong = () => {
		const isEmpty = missingData()
		if (isEmpty) {
			list.value.push(songData.value)
			songData.value = { ...initialValue }
			return true
		} else {
			toast.add({ title: 'Complete all fields.' })
		}
		return false
	}

	const removeSong = (id: number) => {
		list.value = list.value.splice(id, 1)
	}

	return { songData, songIndex, addSong, list, removeSong }
})
