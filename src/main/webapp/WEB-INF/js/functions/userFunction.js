var fetchedFirstName;
var fetchedLastName;
var fetchedBirth;
var fetchedEmail;
var fetchedNumber;
var fetchedSeniority;
var fetchedPosition;
var fetchedOffice;
var id;
(function () {
    id = document.cookie.slice(7);
    if (window.location.href.indexOf("login") === -1) {
        fetch(`http://localhost:8080/users/${id}`).then(response => {
            return response.json();
        }).then(data => {
            fetchedBirth = new Date(data.dateOfBirth);
            fetchedFirstName = data.firstName;
            fetchedEmail = data.email;
            fetchedLastName = data.lastName;
            fetchedSeniority = data.seniority;
            fetchedPosition = data.jobTitle;
            fetchedOffice = data.companyLocation;
            fetchedNumber = data.phoneNumber;
            fetchedPhoto = data.photo;
            fullname=document.getElementById("fullName");
            imgUser=document.getElementById("imgUser");
            headerName=document.getElementById("headerName");
            himgsmall=document.getElementById("headerNameSmall");
            userimg=document.getElementById("userImage");
            uimgsmall=document.getElementById("userImageSmall");
            email=document.getElementById("email");
            bdate=document.getElementById("birthDate");
            number=document.getElementById("number");
          position= document.getElementById("position");
        office=  document.getElementById("office");

            if(fullname !=null){
            fullname.innerText = fetchedFirstName + " " + fetchedLastName;
            }

            if(headerName !=null){
            headerName.innerText = fetchedFirstName + " " + fetchedLastName;
            }

            if(himgsmall !=null){
            himgsmall.innerText = fetchedFirstName;
            }

            if(userimg !=null){
            userimg.src = fetchedPhoto;
            }

            if(uimgsmall !=null){
            uimgsmall.src = fetchedPhoto;
            }

            if(imgUser!=null)
            {
            imgUser.src = fetchedPhoto;
            }

            if(email !=null){
            email.innerText = fetchedEmail;
            }

            if(bdate !=null){
            bdate.innerText = fetchedBirth.toLocaleDateString();
            }

            if(number !=null){
            number.innerText = fetchedNumber;
            }

            if(position !=null){
            position.innerText = fetchedSeniority + " " + fetchedPosition;
            }

            if(office !=null){
            office.innerText = fetchedOffice;
            }
        })
    }
})();

window.onload = function () {
    var edit = document.getElementById("edit");
    if (edit != null) {
        edit.style.setProperty("display", "none", "important");
        setTimeout(function () {
            var preloader = document.getElementById('loader');
            if(preloader!=null)

            {
                if (!preloader.classList.contains('done')) {
                    preloader.classList.add('done');
                }
            }
            
        }, 1000);
    }
};


var btnEdit = document.getElementById("btnEdit");
if (btnEdit != null) {
    btnEdit.addEventListener('click', function () {
        btnEdit.style.display = 'none';
        document.getElementById("inputFirstName").value = fetchedFirstName;
        document.getElementById("inputLastName").value = fetchedLastName;
        document.getElementById("date-input").value = fetchedBirth.toLocaleDateString();
        document.getElementById("inputPosition").value = fetchedPosition;
        ;
        if (fetchedOffice == "Nis") {
            document.getElementById("selectOffice").selectedIndex = "0";
        } else if (fetchedOffice == "Beograd") {
            document.getElementById("selectOffice").selectedIndex = "1";
        } else {
            document.getElementById("selectOffice").selectedIndex = "2";
        }
        if (fetchedSeniority == "Junior") {
            document.getElementById("selectSeniority").selectedIndex = "0";
        } else if (fetchedSeniority == "Medior") {
            document.getElementById("selectSeniority").selectedIndex = "1";
        } else {
            document.getElementById("selectSeniority").selectedIndex = "2";
        }
        document.getElementById("inputNumber").value = fetchedNumber;
        document.getElementById("image").src = fetchedPhoto;
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
}
var slika;
var loadFile = function (event) {
    var image = document.getElementById('image');
    var imgUser = document.getElementById('imgUser');
    image.src = URL.createObjectURL(event.target.files[0]);
    var imageFile = event.target.files[0];
    console.log(imageFile);
    imgUser.src = URL.createObjectURL(event.target.files[0]);
    slika = URL.createObjectURL(event.target.files[0]);
    const fd = new FormData();
    fd.append('imageFile', imageFile);
    console.log(fd.get("imageFile"));
    var id = document.cookie.slice(7);
    console.log(id);
    if (window.location.href.indexOf("login") === -1) {
        fetch(`http://localhost:8080/uploadAvatar/${id}`, {
                method: 'PUT',
                body: fd
            })
            .then(response => {
                console.log(response);
                return response.text();
            }).then(data => {
                console.log(data);
            })
    }
};

var btnDone = document.getElementById("btnDone");
if (btnDone != null) {


    btnDone.onclick = function () {
        var putFirstName = document.getElementById("inputFirstName").value;
        var putLastName = document.getElementById("inputLastName").value;
        var putBirth = (new Date(document.getElementById("date-input").value).getTime());
        console.log(putBirth);
        var putPosition = document.getElementById("inputPosition").value;
        var putSeniority = document.getElementById("selectSeniority");
        var putNumber = document.getElementById("inputNumber").value;
        var putOffice = document.getElementById("selectOffice");
        var senioritySelected = putSeniority.options[putSeniority.selectedIndex].text;
        var officeSelected = putOffice.options[putOffice.selectedIndex].text;
        if (window.location.href.indexOf("login") === -1) {
            fetch(`http://localhost:8080/users/${id}`, {
                method: 'PUT',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: putFirstName,
                    lastName: putLastName,
                    dateOfBirth: putBirth,
                    companyLocation: officeSelected,
                    jobTitle: putPosition,
                    seniority: senioritySelected,
                    phoneNumber: putNumber
                })
            }).then(response => {
                console.log(response);
                return response.json();
            }).then(data => {
                console.log(data);
                fetchedBirth = new Date(data.dateOfBirth);
                fetchedFirstName = data.firstName;
                fetchedLastName = data.lastName;
                fetchedSeniority = data.seniority;
                fetchedPosition = data.jobTitle;
                fetchedPhoto = data.photo;
                fetchedOffice = data.companyLocation;
                fetchedNumber = data.phoneNumber;
            })

        }
        btnEdit.style.display = 'block'
        var formElements = document.getElementById("form");
        var formData = new FormData(formElements);
        console.log(formData);
        formData.forEach(x => console.log(x));
        var imagegege = document.getElementById("imgInput");
        console.log(imagegege.value);
        document.getElementById("edit").style.setProperty("display", "none", "important");
        document.getElementById("content").style.setProperty("display", "flex", "important");
        document.getElementById("fullName").innerText = formData.get('inputFirstName') + " " + formData.get('inputLastName');
        document.getElementById("headerName").innerText = formData.get('inputFirstName') + " " + formData.get('inputLastName');
        document.getElementById("birthDate").innerText = formData.get('date-input');
        document.getElementById("position").innerText = formData.get('inputSeniority') + " " + formData.get('inputPosition');
        document.getElementById("office").innerText = formData.get('inputOffice');
        document.getElementById("email").innerText = fetchedEmail;
        if (slika) {
            document.getElementById("imgUser").src = slika;
            document.getElementById("image").src = slika;
            document.getElementById("userImage").src = slika;
            document.getElementById("userImageSmall").src = slika;
        }

    };
}