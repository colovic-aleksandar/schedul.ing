let btn1 = document.getElementById("button-check");
let offOn = document.getElementById("off-on");
let htmll = document.documentElement;
let logo = document.getElementById("asset");
function darkmode() {
   

    document.body.style.transition = "0.5s";
    htmll.dataset.mode = "dark";
    if (offOn !== null || offOn !== undefined || btn1 !== null || btn1 !== undefined) {
        offOn.innerHTML = "&#x2714;"

        btn1.classList.add("pl-2");
        logo.setAttribute('src', 'Resources/enjoyingLogo/2x/asset2.png');
        localStorage.setItem('isDarkMode', true);
    }
}

function lightmode() {

    
    if (offOn !== null || offOn !== undefined || btn1 !== null || btn1 !== undefined) {
        htmll.dataset.mode = "light";
        localStorage.setItem('isDarkMode', false);
        offOn.textContent = "";
        btn1.classList.remove("pl-2");
        logo.setAttribute('src', 'Resources/enjoyingLogo/2x/asset.png');




        if (localStorage.getItem('isDarkMode') === 'true') {
            darkmode()
        }
    };
};

if (btn1 !== null ) {

    btn1.addEventListener("click", () => {


        if (localStorage.getItem('isDarkMode') === 'true') {

            lightmode()

        } else {
            darkmode();

        };

    });
}