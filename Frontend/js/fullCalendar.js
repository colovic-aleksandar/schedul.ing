var fakeId = 2;
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var preloader = document.getElementById('loader');
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done');
    }
  }, 500)
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
    // timeZone: 'local',
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next,addEventButton',
      center: 'title',
      right: 'today,timeGridWeek,dayGridMonth,listMonth'
    },
    editable: true,
    selectable: true,
    eventStartEditable: true,
    eventDurationEditable: true,
    businessHours: {
      // days of week. an array of zero-based day of week integers (0=Sunday)
      daysOfWeek: [1, 2, 3, 4, 5], // Monday - Thursday

      startTime: '07:00', // a start time (10am in this example)
      endTime: '18:00', // an end time (6pm in this example)
    },
    eventClick: function (info) {
      var a = calendar.getEventById(info.event.id);
      var modalInfo = document.getElementById("infoModal");
      var spanCloseInfo = document.getElementsByClassName("close")[1];
      modalInfo.style.display = "block";
      document.getElementById("infoTitle").innerHTML = info.event.title;
      var infoStr = info.event.start;
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var infoEnd = info.event.end;
      var monthStart = months[infoStr.getMonth()];
      var monthEnd = months[infoEnd.getMonth()];
      var dayStart = days[infoStr.getDay()];
      var dayEnd = days[infoEnd.getDay()];
      document.getElementById("infoStart").innerHTML = dayStart + " " + infoStr.getDate() + "/" + monthStart + "/" + infoStr.getFullYear();
      document.getElementById("infoEnd").innerHTML = dayEnd + " " + infoEnd.getDate() + "/" + monthEnd + "/" + infoEnd.getFullYear();
      spanCloseInfo.onclick = function () {

        document.getElementById("editForm").reset();
        document.getElementById("edit").style.display = "none";
        document.getElementById("info").style.display = "block";
        modalInfo.style.display = "none";
      };

      document.getElementById("deleteButton").onclick = function () {
        info.event.remove();
        modalInfo.style.display = "none";
      };
      document.getElementById("editButton").onclick = function () {
        document.getElementById("info").style.display = "none";
        document.getElementById("edit").style.display = "block";
        document.getElementById("editTitle").value = info.event.title;
        var momentStart = info.event.start.getTime();
        var momentStr = moment(momentStart).format("YYYY-MM-DDThh:mm");
        var momentEnd = info.event.end.getTime();
        var momentE = moment(momentEnd).format("YYYY-MM-DDThh:mm");
        document.getElementById("editStr").value = momentStr;
        console.log(info.event.start.toISOString().slice(0, 16));
        console.log(info.event.start.getTime());
        console.log(info.event.start.toISOString().slice(0, 16));
        console.log(momentStr, momentE);
        document.getElementById("editEnd").value = momentE;
        console.log(calendar.getEvents());

      };



      document.getElementById("editDoneButton").onclick = function () {
        var editedTitle = document.getElementById("editTitle").value;
        var editedStart = document.getElementById("editStr").value;
        var editedEnd = document.getElementById("editEnd").value;

        calendar.getEventById(info.event.id).setProp('title', editedTitle)
        calendar.getEventById(info.event.id).setDates(new Date(editedStart), new Date(editedEnd));
        document.getElementById("editForm").reset();
        document.getElementById("info").style.display = "block";
        document.getElementById("edit").style.display = "none";
        modalInfo.style.display = "none";
      };
    },

    events: [{
        id: 0,
        title: 'Colovic',
        start: '2020-11-12',
        end: '2020-11-15'
      },
      {
        id: 1,
        title: 'Antic',
        start: '2020-11-08',
        end: '2020-11-10'
      }
    ],
    customButtons: {
      addEventButton: {
        text: 'Add Event',
        click: function () {
          var modal = document.getElementById("myModal");
          var spanClose = document.getElementsByClassName("close")[0];
          modal.style.display = "block";

          document.getElementById("btnAdd").onclick = function () {
            var dateStr = document.getElementById("dateStr").value;
            var dateEnd = document.getElementById("dateEnd").value;
            var eventTitle = document.getElementById("eventTitle").value;

            var str = new Date(dateStr);
            var end = new Date(dateEnd);
            var title = eventTitle;
            var addForm = document.getElementById("addForm");
            addForm.reset();
            if (!isNaN(str.valueOf()) && !isNaN(end.valueOf())) {
              var obj = {
                id: fakeId,
                title: title,
                start: str,
                end: end
              };
              calendar.addEvent(obj);
              fakeId++;
              // alert('Success');
              modal.style.display = "none";
            } else {
              alert('Invalid date.');
              modal.style.display = "none";
            }

          };
          spanClose.onclick = function () {
            modal.style.display = "none";
          }

        }
      }

    }
  });

  calendar.render();

});


window.onload = function () {
  document.getElementById("edit").style.display = "none";
}


let search= document.getElementById('search');
let usersList = document.getElementById('users');
// Filter Items



search.addEventListener('keyup', (e) => {
  const text = e.target.value.toLowerCase();
  const users = usersList.getElementsByClassName('user');
  Array.from(users).forEach((user) => {
    let userName = user.firstElementChild.nextElementSibling.textContent;
    

    if(userName.toLowerCase().indexOf(text) != -1){
      user.style.display = 'flex';
      user.display = 'block';
    } else {
      user.style.display = 'none';
      
    }
  });
});