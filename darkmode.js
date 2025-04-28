let darkmode = localStorage.getItem("darkmode");
var themeSwitch = document.querySelector("input[name=checkbox]");

var skills = document.querySelector("#skills");
/*var portfolio = document.querySelector("#portfolio");*/
var testimonials = document.querySelector("#testimonials");
var footer = document.querySelector("#footer");

const enableDarkmode = () => {
    document.body.classList.add('dark-background');
    skills.classList.replace('light-background', 'mid-background');
    /*portfolio.classList.replace('light-background', 'dark-background');*/
    testimonials.classList.replace('light-background', 'dark-background');
    footer.classList.replace('light-background', 'dark-background');
    localStorage.setItem('darkmode', 'active');
}

const disableDarkmode = () => {
    document.body.classList.remove('dark-background');
    skills.classList.replace('dark-background', 'light-background');
    /*portfolio.classList.replace('dark-background', 'light-background');*/
    testimonials.classList.replace('dark-background', 'light-background');
    footer.classList.replace('dark-background', 'light-background');
    localStorage.setItem('darkmode', null);
}

if (darkmode === "active") {
    enableDarkmode();
    themeSwitch.checked = true;
}

themeSwitch.addEventListener("change", function () {
    darkmode = localStorage.getItem("darkmode");

    if (this.checked) {
        
        enableDarkmode();
    }
    else {
        
        disableDarkmode();
    }
})