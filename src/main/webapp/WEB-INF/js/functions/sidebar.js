var collapseContent = document.getElementById("navbarToggleExternalContent");


if(window.innerWidth < 769){
    collapseContent.classList.add("collapse");
}
    
window.addEventListener('resize', () => {
    if(window.innerWidth < 768){
        collapseContent.classList.add("collapse");
    }
    else
        collapseContent.classList.remove("collapse");
});

var toggleButton = document.getElementsByClassName("btn_toggle")[0];

toggleButton.addEventListener('click', () => {
    if(toggleButton.classList.contains("is-active"))
        toggleButton.classList.remove("is-active");
    else
        toggleButton.classList.add("is-active");
})