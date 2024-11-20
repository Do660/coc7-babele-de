Hooks.on('init', () => {

	if(typeof Babele !== 'undefined') {

		Babele.get().register({
			module: 'coc7-babele-de',
			lang: 'de',
			dir: 'compendium'
		});
		
		document.getElementById("logo").src="/modules/coc7-babele-de/img/tentacleanvil.webp";
	}
});
