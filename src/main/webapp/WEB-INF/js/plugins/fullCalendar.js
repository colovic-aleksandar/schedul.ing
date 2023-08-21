var fakeId = 2;


var scheduledEvent;
var select = document.getElementById("selectEvent");
var output = "";
var container = document.getElementById("findUsers");
(function () {
  if (window.location.href.indexOf("login") === -1) {
    console.log("10");
    fetch("http://localhost:8080/events").then(response => {
      return response.json();
    }).then(data => {
      for (i = 0; i < data.length; i++) {
        var option = document.createElement("option");
        option.value = data[i].id;
        option.innerHTML = data[i].type;
        option.classList.add("hover");
        if(select !=null)
        {

        
        select.appendChild(option);
        }
      }
    })
  }
  if (window.location.href.indexOf("login") === -1) {
    fetch("http://localhost:8080/users").then(response => {
      return response.json();
    }).then(data => {

      for (i = 0; i < data.length; i++) {
        if (idUser != data[i].id) {
          output += `<div class="row wrapper__width justify-content-between align-items-center user">
                     <img src="${data[i].photo}" alt="User" class="wrapper__searchPhoto">
                     <p class="wrapper__fullName">${data[i].firstName} ${data[i].lastName}</p>
                     <input type="checkbox" class="checkbox" name="user" id="${data[i].id}">

                      </div>`;
        }
      }

      if(container !=null)
      {
        container.innerHTML = output;
      }

    })
  }
})()






document.addEventListener('DOMContentLoaded', function () {
  (function () {
    if (window.location.href.indexOf("login") === -1) {
      fetch("http://localhost:8080/schedules/all").then(response => {
        return response.json();
      }).then(data => {
        scheduledEvent = data;
        for (i = 0; i < scheduledEvent.length; i++) {
          calendar.addEvent({
            groupId: scheduledEvent[i].user.id,
            id: scheduledEvent[i].event.id,
            title: scheduledEvent[i].event.type,
            start: moment(new Date(scheduledEvent[i].dateAndTime[0], scheduledEvent[i].dateAndTime[1] - 1, scheduledEvent[i].dateAndTime[2], scheduledEvent[i].dateAndTime[3], scheduledEvent[i].dateAndTime[4])).format("YYYY-MM-DDTHH:mm"),
            end: moment(new Date(scheduledEvent[i].endTime[0], scheduledEvent[i].endTime[1] - 1, scheduledEvent[i].endTime[2], scheduledEvent[i].endTime[3], scheduledEvent[i].endTime[4])).format("YYYY-MM-DDTHH:mm"),
            creatorId: scheduledEvent[i].event.user,
            editable: false
          })
        }
      })
    }

  })();
  setTimeout(function () 
  {
    var preloader = document.getElementById('loader');
    if (preloader != null ) 
    {
      if (!preloader.classList.contains('done')) {
        preloader.classList.add('done');
      }
    }
  }, 1000)
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
    //    editable: true,
    selectable: true,
    eventStartEditable: true,
    eventDurationEditable: true,
    //    businessHours: {
    //      // days of week. an array of zero-based day of week integers (0=Sunday)
    //      daysOfWeek: [1, 2, 3, 4, 5], // Monday - Thursday
    //
    //      startTime: '07:00', // a start time (10am in this example)
    //      endTime: '18:00', // an end time (6pm in this example)
    //    },
    eventClick: function (info) {
      if (info.event.groupId != idUser) {
        document.getElementById("deleteButton").style.setProperty("display", "none");

      }
      document.getElementById("editButton").style.setProperty("display", "none");
      var a = calendar.getEventById(info.event.id);
      var modalInfo = document.getElementById("infoModal");
      var spanCloseInfo = document.getElementsByClassName("close")[1];
      modalInfo.style.display = "block";
      document.getElementById("infoTitle").innerHTML = `<i class='fas fa-calendar-alt'></i> ${info.event.title}`;
      var infoStr = info.event.start;
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var infoEnd = info.event._instance.range.end;
      var monthStart = months[infoStr.getMonth()];
      var monthEnd = months[infoEnd.getMonth()];
      var dayStart = days[infoStr.getDay()];
      var dayEnd = days[infoEnd.getDay()];
      var minStart = info.event.start.getMinutes();

      if (minStart < 10) {
        minStart = '0' + minStart;
      } else {
        minStart = minStart + '';
      }
      var hoursStart = info.event.start.getHours();

      if (hoursStart < 10) {
        hoursStart = '0' + hoursStart;
      } else {
        hoursStart = hoursStart + '';
      }
      var minEnd = info.event._instance.range.end.getMinutes();

      if (minEnd < 10) {
        minEnd = '0' + minEnd;
      } else {
        minEnd = minEnd + '';
      }
      var hoursEnd = info.event._instance.range.end.getHours();

      if (hoursEnd < 10) {
        hoursEnd = '0' + hoursEnd;
      } else {
        hoursEnd = hoursEnd + '';
      }
      document.getElementById("infoStart").innerHTML = "<span class='wrapper__spanBold'><i class='far fa-clock'></i> Start: <br>Date: </span>" + dayStart + " " + infoStr.getDate() + "/" + monthStart + "/" + infoStr.getFullYear() + "<br> <span class='wrapper__spanBold'>Time: </span>" + hoursStart + ":" + minStart;
      document.getElementById("infoEnd").innerHTML = "<span class='wrapper__spanBold'><i class='far fa-clock'></i> End: <br>Date: </span>" + dayEnd + " " + infoEnd.getDate() + "/" + monthEnd + "/" + infoEnd.getFullYear() + "<br> <span class='wrapper__spanBold'>Time: </span>" + hoursEnd + ":" + minEnd;
      spanCloseInfo.onclick = function () {

        document.getElementById("editForm").reset();
        document.getElementById("edit").style.display = "none";
        document.getElementById("info").style.display = "block";
        modalInfo.style.display = "none";
      };

      document.getElementById("deleteButton").onclick = function () {
        var vreme = '2020-12-13T15:00:00';
        var min = info.event.start.getMinutes();

        if (min < 10) {
          min = '0' + min;
        } else {
          min = min + '';
        }
        var dateStart = info.event.start.toISOString().slice(0, 11) + info.event.start.getHours() + ":" + min + ":00";
        if (window.location.href.indexOf("login") === -1) {
        fetch("http://localhost:8080/schedule", {
          method: "DELETE",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: info.event.id,
            dateAndTime: dateStart
          })
        }).then(response => {
          return response.text();
        }).then(data => {
          console.log(data);
          console.log(JSON.stringify({
            id: info.event.id,
            dateAndTime: dateStart
          }));
        });
        info.event.remove();
        modalInfo.style.display = "none";
      };
    }
      document.getElementById("editButton").onclick = function () {
        document.getElementById("info").style.display = "none";
        document.getElementById("edit").style.display = "block";
        document.getElementById("editTitle").value = info.event.title;
        var momentStart = info.event.start.getTime();
        var momentStr = moment(momentStart).format("YYYY-MM-DDTHH:mm");
        var momentEnd = info.event._instance.range.end.getTime();
        var momentE = moment(momentEnd).format("YYYY-MM-DDTHH:mm");
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

    //    events: [{
    //        id: 9,
    //        title: 'Colovic',
    //        start: '2020-11-12',
    //        end: '2020-11-15'
    //      },
    //      {
    //        id: 10,
    //        title: 'Antic',
    //        start: '2020-11-08',
    //        end: '2020-11-10'
    //      }
    //    ],
    customButtons: {
      addEventButton: {
        text: 'Add Event',
        click: function () {
          var modal = document.getElementById("myModal");
          var spanClose = document.getElementsByClassName("close")[0];
          modal.style.display = "block";

          document.getElementById("btnAdd").onclick = function () {

            var checkboxValues = {};
            var checkboxes = document.querySelectorAll('input[name="user"]:checked');
            for (i = 0; i < checkboxes.length; i++) {
              checkboxValues[i] = checkboxes[i].id;
            }
            console.log(checkboxValues);
            var dateStr = document.getElementById("dateStr").value;
            var dateEnd = document.getElementById("dateEnd").value;
            var eventType = document.getElementById("selectEvent");
            eventSelected = eventType.options[eventType.selectedIndex].value;
            selectedType = eventType.options[eventType.selectedIndex].text;
            //            console.log(eventType.options[eventType.selectedIndex]);
            var str = new Date(dateStr);
            console.log(str);
            var end = new Date(dateEnd);
            //            var title = eventTitle;
            var addForm = document.getElementById("addForm");
            addForm.reset();
            if (!isNaN(str.valueOf()) && !isNaN(end.valueOf())) {
              var scheduleStr = moment(str).format("YYYY-MM-DDTHH:mm:ss");
              var scheduleEnd = moment(end).format("YYYY-MM-DDTHH:mm:ss");
              console.log(JSON.stringify({
                user: idUser,
                event: eventSelected,
                dateAndTime: scheduleStr,
                endTime: scheduleEnd,
                users: checkboxValues
              }));

              fetch("http://localhost:8080/schedule", {
                method: "POST",
                headers: {
                  "Accept": "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  user: idUser,
                  event: eventSelected,
                  dateAndTime: scheduleStr,
                  endTime: scheduleEnd,
                  users: checkboxValues
                })
              }).then(response => {
                console.log(response);
                return response.text();
              }).then(data => {
                console.log(data);
                calendar.addEvent({
                  groupId: idUser,
                  id: eventSelected,
                  title: selectedType,
                  start: scheduleStr,
                  end: scheduleEnd,
                });
                //                        console.log(JSON.stringify({id: info.event.id, dateAndTime: dateStart}));
              });

              //              calendar.addEvent(obj);
              fakeId++;
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

var idUser;
(function () {
  console.log(document.cookie);
  idUser = document.cookie.slice(7);
  if (window.location.href.indexOf("login") === -1) {
    fetch(`http://localhost:8080/users/${idUser}`).then(response => {
      console.log(response);
      return response.json();
    }).then(data => {
      document.getElementById("headerName").innerText = data.firstName + " " + data.lastName;
      document.getElementById("headerNameSmall").innerText = data.firstName;
      document.getElementById("userImage").src = data.photo;
      document.getElementById("userImageSmall").src = data.photo;
    })
  }
})();



window.onload = function () {
  document.getElementById("edit").style.display = "none";
}

let search = document.getElementById('search');
let usersList = document.getElementById('users');
// Filter Items

if (search != null) {


  search.addEventListener('keyup', (e) => {
    const text = e.target.value.toLowerCase();
    const users = usersList.getElementsByClassName('user');
    Array.from(users).forEach((user) => {
      let userName = user.firstElementChild.nextElementSibling.textContent;


      if (userName.toLowerCase().indexOf(text) != -1) {
        user.style.display = 'flex';
        user.display = 'block';
      } else {
        user.style.display = 'none';

      }
    });
  });
}

//var triggered = false;
//document.getElementById("selectAll").onclick = function() {
//    var selectAll = document.querySelectorAll('input[name="user"]');
//    if(!triggered){
//    for(i=0;i<selectAll.length;i++) {
//        selectAll[i].checked = true;
//        triggered = true;
//    }} else {
//    for(i=0;i<selectAll.length;i++) {
//            selectAll[i].checked = false;
//            triggered = false;
//        }
//    }
//}
var isEnabled = true;
var isDisabled = false;



var selectAll = document.getElementById("selectall");
var deselectAll = document.getElementById("deselectall");
var selectAllCheckBox = document.getElementsByClassName("checkbox");

if (selectAll != null) {


  selectAll.onclick = function () {
    for (var i = 0; i < selectAllCheckBox.length; i++) {
      selectAllCheckBox[i].checked = true
    }
    selectAll.style.display = "none";
    deselectAll.style.display = "flex";
    selectAll.classList.remove("d-flex");
  };
}
if (deselectAll != null) {
  deselectAll.onclick = function () {
    for (var i = 0; i < selectAllCheckBox.length; i++) {
      selectAllCheckBox[i].checked = false;
    }
    selectAll.style.display = "flex";
    deselectAll.style.display = "none";
  };
}