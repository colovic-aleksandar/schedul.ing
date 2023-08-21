window.onload = function () {
    document.getElementById("edit").style.setProperty("display", "none", "important");
    setTimeout(function () {
        var preloader = document.getElementById('loader');
        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
    }, 900)
}


var btnEdit = document.getElementById("btnEdit");
btnEdit.addEventListener('click', function () {
    btnEdit.style.display = 'none';
    document.getElementById("inputFullName").value = document.getElementById("fullName").innerText;
    document.getElementById("date-input").value = document.getElementById("birthDate").innerText;
    document.getElementById("inputPosition").value = document.getElementById("position").innerText;
    // document.getElementById("inputEmail").value = document.getElementById("email").innerText;
    document.getElementById("inputOffice").value = document.getElementById("office").innerText;
    document.getElementById("inputSeniority").value = document.getElementById("seniority").innerText;
    document.getElementById("inputNumber").value = document.getElementById("number").innerText;
    document.getElementById("main").classList.add("edit-panel-active");
    // document.getElementById("user").style.setProperty("display", "none", "important");   
    document.getElementById("content").style.setProperty("display", "none", "important");
    document.getElementById("imgInput").style.setProperty("display", "none");
    document.getElementById("edit").style.setProperty("display", "flex", "important");;
    document.getElementById("btnImage").addEventListener("click", function () {
        document.getElementById("imgInput").click();
    })
    // 4d7d93 
});
var slika;
var loadFile = function (event) {
    var image = document.getElementById('image');
    var imageUser = document.getElementById('imgUser');
    image.src = URL.createObjectURL(event.target.files[0]);
    imgHeader.src = URL.createObjectURL(event.target.files[0]);
    slika = URL.createObjectURL(event.target.files[0]);
};

var btnDone = document.getElementById("btnDone");
btnDone.addEventListener('click', function () {
    btnEdit.style.display = 'block'
    var formElements = document.getElementById("form");
    var formData = new FormData(formElements);
    console.log(formData);
    formData.forEach(x => console.log(x));
    var imagegege = document.getElementById("imgInput");
    console.log(imagegege.value);
    document.getElementById("edit").style.setProperty("display", "none", "important");
    document.getElementById("content").style.setProperty("display", "flex", "important");
    document.getElementById("fullName").innerText = formData.get('inputFullName');
    // document.getElementById("headerName").innerText = formData.get('inputFullName');
    document.getElementById("birthDate").innerText = formData.get('date-input');
    document.getElementById("position").innerText = formData.get('inputPosition');
    document.getElementById("office").innerText = formData.get('inputOffice');
    document.getElementById("email").innerText = formData.get('inputEmail');
    if (slika) {
        document.getElementById("imgUser").src = slika;
        document.getElementById("imgHeader").src = slika;
    }
    // var input = document.querySelector('input[type=file]');
    // file = input.files[0];
    // document.getElementById("imgUser1").value = imagegege.files[0];

});


$('#date-input').dateDropper();