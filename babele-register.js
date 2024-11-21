Hooks.on('init', () => {

	if(typeof Babele !== 'undefined') {

		Babele.get().register({
			module: 'coc7-babele-de',
			lang: 'de',
			dir: 'compendium'
		});
	}
});
