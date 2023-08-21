let btn1 = document.getElementById("button-check");
let offOn = document.getElementById("off-on");
let htmll = document.documentElement;
let logo=document.getElementById("asset");

function darkmode()
{
    document.body.style.transition = "0.5s";
    htmll.dataset.mode = "dark";
    offOn.innerHTML="&#x2714;"
    btn1.classList.add("pl-2");
    logo.setAttribute('src', '../resources/enjoying logo/2x/asset2.png');
    localStorage.setItem('isDarkMode', true);
   
}

function lightmode()
{
    htmll.dataset.mode = "light";
    localStorage.setItem('isDarkMode', false);
    offOn.textContent="";
    btn1.classList.remove("pl-2");
    logo.setAttribute('src', '../resources/enjoying logo/2x/asset.png');
}

if (localStorage.getItem('isDarkMode') === 'true' ) {
    darkmode()
}

// else{
//     lightmode();
// }

btn1.addEventListener("click", () => {

    
    if (localStorage.getItem('isDarkMode') === 'true' ) {
        
       lightmode()

    } else {
        darkmode();
       
    }

})