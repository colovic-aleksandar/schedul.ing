var notification = document.getElementsByClassName('notification');
var pickSubmit = document.getElementById('pick-submit');
var filter = document.getElementById('date-input');
// generisemo danasnji datum
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;
// today ima vrednost danasnjeg datuma

if (window.location.href.indexOf("login") === -1) {
    (function () {
        console.log(document.cookie);
        var id = document.cookie.slice(7);

        if (window.location.href.indexOf("login") === -1) {
            fetch(`http://localhost:8080/users/${id}`).then(response => {
                console.log(response);
                return response.json();
            }).then(data => {

                headerName=document.getElementById("headerName");
            himgsmall=document.getElementById("headerNameSmall");
            userimg=document.getElementById("userImage");
            uimgsmall=document.getElementById("userImageSmall");
            helloname=document.getElementById("helloName");

                if(headerName!=null){
                headerName.innerText = data.firstName + " " + data.lastName;
                }

                if(himgsmall!=null){
                himgsmall.innerText = data.firstName;
                }


                if(userimg !=null){ 
                userimg.src = data.photo;
                }
                if(uimgsmall !=null){
                uimgsmall.src = data.photo;
                }
                if(helloname !=null){ 
                helloname.innerText = "Hello " + data.firstName + " " + data.lastName + "!";
                }

            })

        }

    })();
}


(function () {
    console.log(document.cookie);
    var id = document.cookie.slice(7);
    if (window.location.href.indexOf("login") === -1) {
    fetch(`http://localhost:8080/schedules/${id}`).then(response => {
        console.log(response);
        return response.json();
    }).then(data => {
        // console.log( data[0].user.firstName);
        var myList = document.getElementById("myList");
        var divAccept = document.getElementById("acceptButton");
        for (i = 0; i < data.length; i++) {
            var newEvent = document.createElement("a");
            var hostName = document.createElement("b");
            var dateType = document.createElement("b");
            var acceptButton = document.createElement("button");
            acceptButton.classList.add("btn");
            acceptButton.classList.add("btns");
            acceptButton.classList.add("ml-1");
            acceptButton.classList.add("mr-2");
            acceptButton.classList.add("p-0");
            acceptButton.value = data[i].id;
            console.log(data[i].id);
            acceptButton.setAttribute("id", "acceptButton");
            acceptButton.onclick = function () {
                var schedule_id = document.getElementById("acceptButton").value;
                var user_id = document.cookie.slice(7);

                if (window.location.href.indexOf("login") === -1) {
                    fetch(`http://localhost:8080/acceptButton/${schedule_id}`, {
                            method: 'PUT',
                            headers: {
                                "Accept": "application/json",
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                id: user_id
                            })
                        })

                        .then(response => {
                            console.log(response);
                            return response.text();
                        }).then((data) => {
                            window.location.href = 'http://localhost:8080/HomePage'
                        })
                }

            }
            var accept = document.createElement("i");
            accept.className = "fas fa-check";


            var decline = document.createElement("i");
            decline.className = "fas fa-times";

            var declineButton = document.createElement("button");
            declineButton.classList.add("btn");
            declineButton.classList.add("btns");
            declineButton.classList.add("m-0");
            declineButton.classList.add("p-0");
            declineButton.value = data[i].id;
            declineButton.setAttribute("id", "declineButton");


            declineButton.onclick = function () {
                var schedule_id = document.getElementById("declineButton").value;
                var user_id = document.cookie.slice(7);
                if (window.location.href.indexOf("login") === -1) {
                    fetch(`http://localhost:8080/declineButton/${schedule_id}`, {
                            method: 'PUT',
                            headers: {
                                "Accept": "application/json",
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                id: user_id
                            })
                        })

                        .then(response => {
                            console.log(response);
                            return response.text();
                        }).then((data) => {
                            window.location.href = 'http://localhost:8080/HomePage'
                        })
                }
            }

            hostName.innerHTML = data[i].user.firstName + " " + data[i].user.lastName;
            dateType.innerHTML = data[i].event.type + "  ";
            newEvent.innerHTML = " added you to a new event ";
            if (myList != null) {
                myList.appendChild(hostName);
                myList.appendChild(newEvent);
                myList.appendChild(dateType);
            }
            if (dateType != null) {
                dateType.appendChild(acceptButton);
                dateType.appendChild(declineButton);
                var br = document.createElement("br");
                dateType.append(br);
            }
            if (acceptButton != null) {
                acceptButton.appendChild(accept);
            }
            if (declineButton != null)

            {
                declineButton.append(decline);
            }


        }

    })
}
})();




//event listener kada se klikne checkmark na datedropperu

if (pickSubmit != null || pickSubmit != undefined) {
    pickSubmit.onclick = function () {

        var notification = document.getElementsByClassName('notification');
        var date = document.getElementsByClassName("dateTime");
        for (var i = 0; i < date.length; i++) {
            console.log(date[i].innerHTML.slice(0, 10));
            notification[i].dataset.date = date[i].innerHTML.slice(0, 10);
        }


        for (var i = 0; i < notification.length; i++) {
            //na pocetku prikazuje sve notifikacije u news feedu
            notification[i].style.display = "block";

            //uzima vrednost iz atributa data-date
            date = notification[i].dataset.date;

            //ako ne izabere datum vec samo klikne na checkmark dodeljuje mu se danasnji datum
            if (filter.value == "") {
                filter.value = today;
            }
            //proverava ako odabrani datum razlicit od datuma koji je vezan za notifikaciju
            if (date != filter.value) {
                notification[i].style.display = "none";

            }
        }

    }
}

function dateParsedNews() {
    var dateParsed = document.querySelectorAll(".dateParsed");
    console.log(dateParsed);
    var dataSetTime
    var res = [];
    for (i = 0; i < dateParsed.length; i++) {
        res[i] = dateParsed[i].outerText.split("T");
    }
    console.log(res);
    for (i = 0; i < dateParsed.length; i++) {
        dateParsed[i].innerHTML = res[i].join(" ");
    }
}
dateParsedNews();