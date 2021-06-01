import general from '../../src/styles/general'

export default {
	homeScreen: {
		backgroundImageProps: {
			imageStyle: { opacity: 0.2, resizeMode: 'repeat' }
		}
	},
	drawer: {
		listItemText: {
			...general.body1,
			textAlign: 'center',
			color: general.colors.primary
		},
		listItemTranslation: {
			display: 'none'
		}
	},
	screenHeader: {
		chapterTitleTr: {
			display: 'none'
		},
		subchapterTitleTr: {
			display: 'none'
		}
	}
}
