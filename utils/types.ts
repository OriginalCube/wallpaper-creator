export type CustomField = {
	header: string
	fields: {
		name: string
		type: string
		positiveBtn?: string | boolean
		value?: string
		store?: typeof ref
		action?: () => void
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
	}
}
