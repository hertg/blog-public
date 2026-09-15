document.addEventListener("DOMContentLoaded", onLoad);

var rootElement = document.documentElement;


var theme = localStorage.getItem("theme");
if (!theme) {
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    theme = prefersDark ? "dark" : "light";
}
setTheme(theme);

function setTheme(theme) {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
}

function showOrHideBackToTop(elem) {
    if (rootElement.scrollTop > rootElement.clientHeight) {
        elem.classList.remove("hidden");
    } else {
        elem.classList.add("hidden");
    }
}

function onLoad() {
    // back to top scroll button
    var backToTop = document.getElementById("back-to-top");
    document.addEventListener("scroll", function (_) {
        showOrHideBackToTop(backToTop);
    });
    showOrHideBackToTop(backToTop);

    // light and dark theme
    var darkModeToggle = document.getElementById("dark-mode-toggle");
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", function (_) {
            var currentTheme = localStorage.getItem("theme");
            setTheme(currentTheme == "dark" ? "light" : "dark");
        });
    }

    // katex (TODO)
    /*var mathElems = document.getElementsByClassName("katex");
    for (const mathElem of mathElems) {
        katex.render(String.raw`c = \pm\sqrt{a^2 + b^2}`, mathElem, {
            throwOnError: true
        });
    }*/
}
