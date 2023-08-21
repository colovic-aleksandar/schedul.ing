// var sidebarLinks = document.getElementsByClassName("sidebarLink");
// var sidebarLinkContainers = document.getElementsByClassName("sidebarLinkContainer");
// var sidebarIcons = document.getElementsByClassName("sidebarIcon");


// for(i=0; i < sidebarLinks.length; i++){
//     sidebarLinks[i].addEventListener("click", (event) => {
//         var selectedLink = event.target;
//         var selectedLinkParent = selectedLink.parentElement;
//         var selectedLinkIcon = selectedLink.previousSibling.previousSibling;
        
//         selectedLink.classList.add("selected");
//         selectedLinkParent.classList.add("selected");
//         selectedLinkIcon.classList.add("selected");
        
//         for(j = 0; j < sidebarLinks.length; j++){
//             if(selectedLink.innerHTML !== sidebarLinks[j].innerHTML
//                 && selectedLinkParent !== sidebarLinkContainers[j]){
//                 sidebarLinks[j].classList.remove("selected");
//                 sidebarLinkContainers[j].classList.remove("selected");
//             }
//         }
//         for(j = 0; j < sidebarIcons.length; j++){
//             if(selectedLinkIcon !== sidebarIcons[j])
//                 sidebarIcons[j].classList.remove("selected");
//         }
//     });
// }

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

var toggleButton = document.getElementsByClassName("wrapper__dashboard_toggle--button")[0];

toggleButton.addEventListener('click', () => {
    if(toggleButton.classList.contains("is-active"))
        toggleButton.classList.remove("is-active");
    else
        toggleButton.classList.add("is-active");
})