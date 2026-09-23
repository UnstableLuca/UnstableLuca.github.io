/* =========================================================
   LANGUAGE
========================================================= */

const languageButton = document.getElementById("language-toggle");

let currentLanguage =
    localStorage.getItem("language") || "en";


function updateLanguage() {

    const elements =
        document.querySelectorAll("[data-en][data-es]");

    elements.forEach(element => {

        const translation =
            element.getAttribute(`data-${currentLanguage}`);

        if (translation !== null) {
            element.textContent = translation;
        }

    });


    if (currentLanguage === "en") {

        languageButton.textContent = "ES";

    } else {

        languageButton.textContent = "EN";

    }


    document.documentElement.lang = currentLanguage;

    localStorage.setItem(
        "language",
        currentLanguage
    );
}


languageButton.addEventListener("click", () => {

    currentLanguage =
        currentLanguage === "en"
            ? "es"
            : "en";

    updateLanguage();

});


/* =========================================================
   THEME
========================================================= */

const themeButton =
    document.getElementById("theme-toggle");

let currentTheme =
    localStorage.getItem("theme") || "dark";


function updateTheme() {

    if (currentTheme === "light") {

        document.body.classList.add("light-mode");

        themeButton.textContent = "☀";

    } else {

        document.body.classList.remove("light-mode");

        themeButton.textContent = "☾";

    }


    localStorage.setItem(
        "theme",
        currentTheme
    );
}


themeButton.addEventListener("click", () => {

    currentTheme =
        currentTheme === "dark"
            ? "light"
            : "dark";

    updateTheme();

});


/* =========================================================
   MOBILE MENU
========================================================= */

const mobileMenuButton =
    document.getElementById("mobile-menu-button");

const mobileMenu =
    document.getElementById("mobile-menu");


mobileMenuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");


    if (mobileMenu.classList.contains("open")) {

        mobileMenuButton.textContent = "×";

    } else {

        mobileMenuButton.textContent = "☰";

    }

});


const mobileLinks =
    mobileMenu.querySelectorAll("a");


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

        mobileMenuButton.textContent = "☰";

    });

});


window.addEventListener("resize", () => {

    if (window.innerWidth > 900) {

        mobileMenu.classList.remove("open");

        mobileMenuButton.textContent = "☰";

    }

});


/* =========================================================
   INITIALIZE
========================================================= */

updateLanguage();
updateTheme();