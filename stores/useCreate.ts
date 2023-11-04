export const useCreate = defineStore('create', () => {
	const songData = reactive({
		name: '',
		filename: '',
		image: '',
		foregroundColor: '',
		backgroundColor: '',
		textColor: '',
	})

	return { songData }
})
