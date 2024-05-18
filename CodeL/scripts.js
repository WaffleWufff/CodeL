function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
        document.getElementsByClassName("search-block")[0].setAttribute("style", "background-image: url('resources/main/light_background.svg');")
        document.getElementsByClassName("top-button")[1].setAttribute("style", "display: none;")
        document.getElementsByClassName("top-button")[2].setAttribute("style", "display: unset;")
        document.getElementById('notfound').children[0].children[0].setAttribute('src', 'resources/icons/not_found_dark.svg');
    } 
    else {
        setTheme('theme-dark');
        document.getElementsByClassName("search-block")[0].setAttribute("style", "background-image: url('resources/main/dark_background.svg');")
        document.getElementsByClassName("top-button")[2].setAttribute("style", "display: none;")
        document.getElementsByClassName("top-button")[1].setAttribute("style", "display: unset;")
        document.getElementById('notfound').children[0].children[0].setAttribute('src', 'resources/icons/not_found.svg');
    }
}

(function () {setTheme('theme-dark');})();

function backToSearch() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.getElementsByTagName('input')[0].focus()
}

function languageSwitch(language) {
    if (language == 'ru') {
        document.location.href = "index-ru.html";
    }
    else {
        document.location.href = "index.html";
    }
}

function searchbarFocus() {
    document.getElementsByClassName('searchbar')[0].setAttribute('style', 'background-color: var(--transparent-btn-bg-hover-color);');
}

function searchbarUnfocus() {
    document.getElementsByClassName('searchbar')[0].setAttribute('style', 'background-color: var(--transparent-btn-bg-color);');
}

function searchByName() {
    idToSearch = document.getElementsByTagName('input')[0].value.toLowerCase().replaceAll(" ", "").replaceAll("-", "").replaceAll(".", "");
    allArticles = document.getElementsByTagName('a');
    matchedArticle = document.getElementById(idToSearch);
    notfoundArticle = document.getElementById('notfound');
    searchBlock = document.getElementsByClassName("search-block")[0];
    searchBlockHeight = parseInt(getComputedStyle(searchBlock).height);

    if (idToSearch) {
        for (article of allArticles) {
            article.style.display = "none";
        }
        if (matchedArticle) {
            matchedArticle.style.display = "unset";
        }
        else {
            notfoundArticle.style.display = "unset";
        }
    }
    else {
        for (article of allArticles) {
            article.style.display = "unset";
            notfoundArticle.style.display = "none";
        }
    }

    document.body.scrollTop = searchBlockHeight + 1;
    document.documentElement.scrollTop = searchBlockHeight + 1;
}

function searchByCategory(category) {
    allArticles = document.getElementsByTagName('a');
    matchedArticles = document.getElementsByClassName(category);
    searchBlock = document.getElementsByClassName("search-block")[0];
    searchBlockHeight = parseInt(getComputedStyle(searchBlock).height);
    notfoundArticle = document.getElementById('notfound');

    if (category != 'All') {
        for (article of allArticles) {
            article.style.display = "none";
        }
        for (article of matchedArticles) {
            article.style.display = "unset";
        }
    }
    else {
        for (article of allArticles) {
            article.style.display = "unset";
            notfoundArticle.style.display = "none";
        }
    }

    document.body.scrollTop = searchBlockHeight + 1;
    document.documentElement.scrollTop = searchBlockHeight + 1;
}