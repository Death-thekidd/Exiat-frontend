window.addEventListener("load", function () {
	let layoutName = "Collapsible Menu";
	let corkThemeObject;
	let getcorkThemeObject;
	let getParseObject;
	let ParsedObject;

	let settingsObject = {
		admin: "Exiat frontend",
		settings: {
			layout: {
				name: layoutName,
				toggle: true,
				darkMode: true,
				boxed: true,
				logo: {
					darkLogo: "/logo.svg",
					lightLogo: "/logo2.svg",
				},
			},
		},
		reset: false,
	};

	corkThemeObject = settingsObject;

	try {
		if (settingsObject.reset) {
			localStorage.clear();
		}

		if (localStorage.length === 0) {
			corkThemeObject = settingsObject;
		} else {
			getcorkThemeObject = localStorage.getItem("theme");
			if (getcorkThemeObject === undefined)
				getParseObject = JSON.parse(getcorkThemeObject);
			ParsedObject = getParseObject;

			if (getcorkThemeObject !== null) {
				if (ParsedObject.admin === "Exiat Frontend") {
					if (ParsedObject.settings.layout.name === layoutName) {
						corkThemeObject = ParsedObject;
					} else {
						corkThemeObject = settingsObject;
					}
				} else {
					if (ParsedObject.admin === undefined) {
						corkThemeObject = settingsObject;
					}
				}
			} else {
				corkThemeObject = settingsObject;
			}
		}

		// Get Dark Mode Information i.e darkMode: true or false

		if (corkThemeObject?.settings.layout.darkMode) {
			localStorage.setItem("theme", JSON.stringify(corkThemeObject));
			getcorkThemeObject = localStorage.getItem("theme");
			getParseObject = JSON.parse(getcorkThemeObject);

			if (getParseObject.settings.layout.darkMode) {
				let ifStarterKit =
					document.body.getAttribute("page") === "starter-pack" ? true : false;
				document.body.classList.add("dark");
				if (ifStarterKit) {
					if (document.querySelector(".navbar-logo")) {
						document
							.querySelector(".navbar-logo")
							.setAttribute("src", "/logo.svg");
					}
				} else {
					if (document.querySelector(".navbar-logo")) {
						document
							.querySelector(".navbar-logo")
							.setAttribute(
								"src",
								getParseObject.settings.layout.logo.darkLogo
							);
					}
				}
			}
		} else {
			localStorage.setItem("theme", JSON.stringify(corkThemeObject));
			getcorkThemeObject = localStorage.getItem("theme");
			getParseObject = JSON.parse(getcorkThemeObject);

			if (!getParseObject.settings.layout.darkMode) {
				let ifStarterKit =
					document.body.getAttribute("page") === "starter-pack" ? true : false;
				document.body.classList.remove("dark");
				if (ifStarterKit) {
					if (document.querySelector(".navbar-logo")) {
						document
							.querySelector(".navbar-logo")
							.setAttribute("src", "/logo2.svg");
					}
				} else {
					if (document.querySelector(".navbar-logo")) {
						document
							.querySelector(".navbar-logo")
							.setAttribute(
								"src",
								getParseObject.settings.layout.logo.lightLogo
							);
					}
				}
			}
		}

		// Get Layout Information i.e boxed: true or false

		if (corkThemeObject.settings.layout.boxed) {
			localStorage.setItem("theme", JSON.stringify(corkThemeObject));
			getcorkThemeObject = localStorage.getItem("theme");
			getParseObject = JSON.parse(getcorkThemeObject);

			if (getParseObject.settings.layout.boxed) {
				if (document.body.getAttribute("layout") !== "full-width") {
					document.body.classList.add("layout-boxed");
					if (document.querySelector(".header-container")) {
						document
							.querySelector(".header-container")
							.classList.add("container-xxl");
					}
					if (document.querySelector(".middle-content")) {
						document
							.querySelector(".middle-content")
							.classList.add("container-xxl");
					}
				} else {
					document.body.classList.remove("layout-boxed");
					if (document.querySelector(".header-container")) {
						document
							.querySelector(".header-container")
							.classList.remove("container-xxl");
					}
					if (document.querySelector(".middle-content")) {
						document
							.querySelector(".middle-content")
							.classList.remove("container-xxl");
					}
				}
			}
		} else {
			localStorage.setItem("theme", JSON.stringify(corkThemeObject));
			getcorkThemeObject = localStorage.getItem("theme");
			getParseObject = JSON.parse(getcorkThemeObject);

			if (!getParseObject.settings.layout.boxed) {
				if (document.body.getAttribute("layout") !== "boxed") {
					document.body.classList.remove("layout-boxed");
					if (document.querySelector(".header-container")) {
						document
							.querySelector(".header-container")
							.classList.remove("container-xxl");
					}
					if (document.querySelector(".middle-content")) {
						document
							.querySelector(".middle-content")
							.classList.remove("container-xxl");
					}
				} else {
					document.body.classList.add("layout-boxed");
					if (document.querySelector(".header-container")) {
						document
							.querySelector(".header-container")
							.classList.add("container-xxl");
					}
					if (document.querySelector(".middle-content")) {
						document
							.querySelector(".middle-content")
							.classList.add("container-xxl");
					}
				}
			}
		}
	} catch (error) {
		console.log(error);
	}
});
