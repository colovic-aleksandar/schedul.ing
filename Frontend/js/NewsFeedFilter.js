var notification = document.getElementsByClassName('notification');
var pickSubmit = document.getElementById('pick-submit');

// generisemo danasnji datum
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;
// today ima vrednost danasnjeg datuma

//event listener kada se klikne checkmark na datedropperu
pickSubmit.addEventListener("click", () => {
    var filter = document.getElementById('date-input');
    
    for (var i = 0; i < notification.length; i++) {
        //na pocetku prikazuje sve notifikacije u news feedu
        notification[i].style.display = "block";
        //uzima vrednost iz atributa data-date
        date = notification[i].dataset.date;
        //ako ne izabere datum vec samo klikne na checkmark dodeljuje mu se danasnji datum
        if (filter.value == "") {
            filter.value = today;
            console.log(filter.value); 
        }
        //proverava ako odabrani datum razlicit od datuma koji je vezan za notifikaciju
        if (date != filter.value) {
            console.log(filter.value);   
            notification[i].style.display = "none";

        }
    }

})