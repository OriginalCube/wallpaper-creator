export type CustomField = {
	header: string
	fields: {
		name: string
		type: string
		model: 'image' | 'song' | 'foreground' | 'background' | 'textColor' | 'name'
		value?: string
	}[]
}

export type SidePanel = {
	[key: string]: any
	add: {
		buttons: {
			icon: string
			iconColor: string
			bgColor: string
			label: string
			action: () => void
		}[]
		addFiles: CustomField
		changeColor: CustomField
		confirm: Object
	}
}
