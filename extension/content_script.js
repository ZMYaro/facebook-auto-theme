'use strict';

(function () {
	
	// The Workplace landing and set-up pages do not support dark theme.
	if (location.host.indexOf('www.workplace.com') === 0 || location.host.indexOf('work.workplace.com') === 0) {
		return;
	}
	
	function setOverrideTheme() {
		// Add the `__fb-dark-mode` or `__fb-light-mode` class to the <body>, which
		// overrides Facebook setting those classes on the root <html> element.
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.body.classList.add('__fb-dark-mode');
			document.body.classList.remove('__fb-light-mode');
			return;
		} else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
			document.body.classList.add('__fb-light-mode');
			document.body.classList.remove('__fb-dark-mode');
			return;
		}
		// If `prefers-color-scheme` matches neither, do nothing.
	}

	// Set listeners to update the theme if the user's system theme preference changes.
	window.matchMedia('(prefers-color-scheme: dark)').addListener(setOverrideTheme);
	window.matchMedia('(prefers-color-scheme: light)').addListener(setOverrideTheme);

	// Set to the system theme at load time.
	setOverrideTheme();

})();
