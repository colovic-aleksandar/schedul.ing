import { getUserById, getUsers, getSchedules, getEvents, getEventAtendees, 
         postEventType, deleteUserById, deleteScheduleById, deleteEventTypeById } 
from '../services/services.js';

//ovo da zavrsim 

// const allSchedulesURL = 'http://localhost:8080/schedules/all';
// const allUsersURL = 'http://localhost:8080/admin/users';
// const allEventsURL = 'http://localhost:8080/admin/events';
// const eventAttendeesCountURL = 'http://localhost:8080/admin/schedules/event/';
// const deleteUserURL = 'http://localhost:8080/admin/users/';
// const deleteScheduleURL = 'http://localhost:8080/admin/schedules/';
// const deleteEventURL = 'http://localhost:8080/admin/events/';
// const getUserURL = 'http://localhost:8080/users/';

var manageModal = document.getElementById("manageModal");
var confirmModal = document.getElementById("confirmModal");
var manageModalButton = document.getElementById("addEventButton");
var closeManageModalButton = document.getElementsByClassName("close")[0];
var closeConfirmModalButton = document.getElementsByClassName("close")[1];
var confrimModalText = document.getElementById("confirmModalText");
var confirmModalUserAccept = document.getElementById("deleteUserButtonAccept");
var confirmModalScheduleAccept = document.getElementById("deleteScheduleButtonAccept");
var confirmModalEventAccept = document.getElementById("deleteEventButtonAccept");
var confirmModalCancelButton = document.getElementById("confirmModalCancel");
var schedulesTableButton = document.getElementsByClassName("admin__container_swapButtons--btnEvents");
var usersTableButton = document.getElementsByClassName("admin__container_swapButtons--btnUsers");
var eventsTableButton = document.getElementsByClassName("admin__container_swapButtons--btnEventTypes");
var schedulesTable = document.getElementsByClassName("admin__container_tableContainer--schedulesTable");
var usersTable = document.getElementsByClassName("admin__container_tableContainer--usersTable");
var eventsTable = document.getElementsByClassName("admin__container_tableContainer--eventsTable");
var addEventTypeButton = document.getElementById("btnEventManage");
var hName = document.getElementById("headerName");
var hNameSmall = document.getElementById("headerNameSmall");
var uImg = document.getElementById("userImage");
var uImgSmall = document.getElementById("userImageSmall");

(function () {

  var id = document.cookie.slice(7);

  if(window.location.href.indexOf("login") === -1 )
  {
    getUserById(id).then(response => response.json()).then(data => {
      if (hName != null) {
        hName.innerText = data.firstName + " " + data.lastName;
        hNameSmall.innerText = data.firstName;
        uImg.src = data.photo;
        uImgSmall.src = data.photo;
      }
    })
  }

})();

if (manageModalButton !== null ) {
  manageModalButton.onclick = function () {
    manageModal.style.display = "block";
  }
}

if(closeManageModalButton !== undefined )
{
  closeManageModalButton.onclick = function () {
    manageModal.style.display = "none";
  }
}
  
if(closeConfirmModalButton !=null)
{
  closeConfirmModalButton.onclick = function () {
    confirmModal.style.display = "none";
    confirmModalUserAccept.style.display = "none";
    confirmModalEventAccept.style.display = "none";
    confirmModalScheduleAccept.style.display = "none";
  }
}
  
if(confirmModalCancelButton !=null)
{
  confirmModalCancelButton.onclick = function () {
    confirmModal.style.display = "none";
    confirmModalUserAccept.style.display = "none";
    confirmModalEventAccept.style.display = "none";
    confirmModalScheduleAccept.style.display = "none";
  }
}
  
if(addEventTypeButton !== null)
{
  addEventTypeButton.addEventListener('click', () => {
    var eventTypeName = document.getElementById("eventTypeName").value;
    var eventLocation = document.getElementById("eventLocation").value;
    var eventMaxParicipants = document.getElementById("eventMaxParticipants").value;
    var eventMinParicipants = document.getElementById("eventMinParticipants").value;
    postEventType({
      type: eventTypeName,
      location: eventLocation,
      minUsers: eventMinParicipants,
      maxUsers: eventMaxParicipants
    });
    location.reload();
  })
}
if(schedulesTableButton[0] !=null)  
{
  schedulesTableButton[0].addEventListener('click', () => {
    if (schedulesTable[0].classList.contains("tableShown") !== true) {
      usersTable[0].classList.remove("tableShown");
      usersTableButton[0].classList.remove("activeButton");
      usersTableButton[0].classList.add("disabled");
      eventsTable[0].classList.remove("tableShown");
      eventsTableButton[0].classList.remove("activeButton");
      eventsTableButton[0].classList.add("disabled");
      schedulesTable[0].classList.add("tableShown");
      schedulesTableButton[0].classList.add("activeButton");
      schedulesTableButton[0].classList.remove("disabled");
    }
    
  });
}
if(schedulesTableButton[0] !=undefined)  
{
  usersTableButton[0].addEventListener('click', () => {
    if (usersTable[0].classList.contains("tableShown") !== true) {
      schedulesTable[0].classList.remove("tableShown");
      schedulesTableButton[0].classList.remove("activeButton");
      schedulesTableButton[0].classList.add("disabled");
      eventsTable[0].classList.remove("tableShown");
      eventsTableButton[0].classList.remove("activeButton");
      eventsTableButton[0].classList.add("disabled");
      usersTable[0].classList.add("tableShown");
      usersTableButton[0].classList.add("activeButton");
      usersTableButton[0].classList.remove("disabled");
    }
  
  });

}

if(eventsTableButton[0] !=undefined)  
{
  eventsTableButton[0].addEventListener('click', () => {
    if (eventsTable[0].classList.contains("tableShown") !== true) {
      schedulesTable[0].classList.remove("tableShown");
      schedulesTableButton[0].classList.remove("activeButton");
      schedulesTableButton[0].classList.add("disabled");
      usersTable[0].classList.remove("tableShown");
      usersTableButton[0].classList.remove("activeButton");
      usersTableButton[0].classList.add("disabled");
      eventsTable[0].classList.add("tableShown");
      eventsTableButton[0].classList.add("activeButton");
      eventsTableButton[0].classList.remove("disabled");
    }
  });
}

(() => {
  if (window.location.href.indexOf("login") === -1) {
    getSchedules()
    .then(schedules => {
      var tableBody = document.createElement('tbody');
      if (schedulesTable[0] != undefined) {
        schedulesTable[0].appendChild(tableBody);
      }
      schedules.forEach(schedule => {
        var tableRow = document.createElement('tr');
        tableBody.appendChild(tableRow);
        var eventType = document.createElement('td');
        var eventTypeText = document.createTextNode(schedule["event"]["type"]);
        eventType.appendChild(eventTypeText);
        tableRow.appendChild(eventType);
        var eventLocation = document.createElement('td');
        var eventLocationText = document.createTextNode(schedule["event"]["location"]);
        eventLocation.appendChild(eventLocationText);
        tableRow.appendChild(eventLocation);
        var eventHost = document.createElement('td');
        var eventHostText = document.createTextNode(schedule["user"]["firstName"] + " " + schedule["user"]["lastName"]);
        eventHost.appendChild(eventHostText);
        tableRow.appendChild(eventHost);
        var eventAttendees = document.createElement('td');
        var eventAttendeesText = document.createTextNode("");
        getEventAtendees(schedule["event"]["id"]).then(
          attendees => {
            eventAttendeesText.nodeValue = attendees;
          })
        eventAttendees.appendChild(eventAttendeesText);
        tableRow.appendChild(eventAttendees);
        var eventDate = document.createElement('td');
        var eventDateFormatted = eventDateFormatter(schedule["dateAndTime"][0], schedule["dateAndTime"][1], schedule["dateAndTime"][2], schedule["dateAndTime"][3], schedule["dateAndTime"][4])
        var eventDateText = document.createTextNode(eventDateFormatted);
        eventDate.appendChild(eventDateText);
        tableRow.appendChild(eventDate);
        var deleteButtonField = document.createElement('td');
        var deleteButton = document.createElement('button');
        deleteButton.className = "btn btns mx-2";
        deleteButton.addEventListener('click', () => {
          confirmModal.style.display = "block";
          confrimModalText.innerHTML = "Are you sure you want to delete this event?";
          confirmModalScheduleAccept.style.display = "inline-block";
          confirmModalScheduleAccept.onclick = () => {
            deleteSchedule(schedule["id"]);
            confirmModal.style.display = "none";
            confirmModalScheduleAccept.style.display = "none";
            location.reload();
          }
        });
        var deleteButtonIcon = document.createElement('i');
        deleteButtonIcon.className = "fas fa-trash";
        deleteButton.appendChild(deleteButtonIcon);
        deleteButtonField.appendChild(deleteButton);
        tableRow.appendChild(deleteButtonField);
      })
    })
  }
})();


(() => {
  if (window.location.href.indexOf("login") === -1) {
    getUsers()
    .then(users => {
      var tableBody = document.createElement('tbody');
      if(usersTable[0]!=undefined)
      {
      usersTable[0].appendChild(tableBody);
      }
      users.forEach(user => {
        var tableRow = document.createElement('tr');
        tableBody.appendChild(tableRow);
        var fullName = document.createElement('td');
        var fullNameText = document.createTextNode(user["firstName"] + " " + user["lastName"]);
        fullName.appendChild(fullNameText);
        tableRow.appendChild(fullName);
        var dateOfBirth = document.createElement('td');
        var date = dateConverter(user["dateOfBirth"]);
        var formattedDate = dateFormater(date);
        var dateOfBirthText = document.createTextNode(formattedDate);
        dateOfBirth.appendChild(dateOfBirthText);
        tableRow.appendChild(dateOfBirth);
        var phoneNumber = document.createElement('td');
        var phoneNumberText = document.createTextNode(user["phoneNumber"]);
        phoneNumber.appendChild(phoneNumberText);
        tableRow.appendChild(phoneNumber);
        var seniority = document.createElement('td');
        var seniorityText = document.createTextNode(user["seniority"]);
        seniority.appendChild(seniorityText);
        tableRow.appendChild(seniority);
        var position = document.createElement('td');
        var positionText = document.createTextNode(user["jobTitle"]);
        position.appendChild(positionText);
        tableRow.appendChild(position);
        var role = document.createElement('td');
        var userRole = getUserRole(user["role"]);
        var roleText = document.createTextNode(userRole);
        role.appendChild(roleText);
        tableRow.appendChild(role);
        var deleteButtonField = document.createElement('td');
        var deleteButton = document.createElement('button');
        deleteButton.className = "btn btns mx-2";
        deleteButton.addEventListener('click', () => {
          confrimModalText.innerHTML = "Are you sure you want to delete this user?";
          confirmModalUserAccept.style.display = "inline-block";
          confirmModal.style.display = "block";
          confirmModalUserAccept.onclick = () => {
            deleteUser(user["id"]).then(response => {
              if (response.status === 200) {
                confirmModalUserAccept.style.display = "none";
                confrimModalText.innerHTML = "It appears that this user is connected to a schedule, therefore you can't delete him/her." +
                  " Check user connections if you still want to delete this user.";
                confrimModalText.style.fontSize = "11pt";
              } else {
                location.reload();
                confirmModalUserAccept.style.display = "none";
              }
            })
          }
        });
        var deleteButtonIcon = document.createElement('i');
        deleteButtonIcon.className = "fas fa-trash";
        deleteButton.appendChild(deleteButtonIcon);
        deleteButtonField.appendChild(deleteButton);
        tableRow.appendChild(deleteButtonField);
      })
    })
  }
})();


(() => {
  if (window.location.href.indexOf("login") === -1) {
    getEvents()
    .then(events => {
      var tableBody = document.createElement('tbody');
      if(eventsTable[0] !== undefined)
      {
        eventsTable[0].appendChild(tableBody);
      }
      events.forEach(event => {
        var tableRow = document.createElement('tr');
        tableBody.appendChild(tableRow);
        var eventType = document.createElement('td');
        var eventTypeText = document.createTextNode(event["type"]);
        eventType.appendChild(eventTypeText);
        tableRow.appendChild(eventType);
        var eventLocation = document.createElement('td');
        var eventLocationText = document.createTextNode(event["location"]);
        eventLocation.appendChild(eventLocationText);
        tableRow.appendChild(eventLocation);
        var minEventParticipants = document.createElement('td');
        var minEventParticipantsText = document.createTextNode(event["minUsers"]);
        minEventParticipants.appendChild(minEventParticipantsText);
        tableRow.appendChild(minEventParticipants);
        var maxEventParticipants = document.createElement('td');
        var maxEventParticipantsText = document.createTextNode(event["maxUsers"]);
        maxEventParticipants.appendChild(maxEventParticipantsText);
        tableRow.appendChild(maxEventParticipants);
        var deleteButtonField = document.createElement('td');
        var deleteButton = document.createElement('button');
        deleteButton.className = "btn btns mx-2";
        deleteButton.addEventListener('click', () => {
          confirmModal.style.display = "block";
          confrimModalText.innerHTML = "Are you sure you want to delete this event type?";
          confirmModalEventAccept.style.display = "inline-block";
          confirmModalEventAccept.onclick = () => {
            deleteEventType(event["id"]).then(response => {
              if (response.status === 200) {
                confirmModalEventAccept.style.display = "none";
                confrimModalText.innerHTML = "It appears that this event type is connected to a schedule, therefore you can't delete it." +
                  " Check event type connections if you still want to delete it.";
                confrimModalText.style.fontSize = "11pt";
              } else {
                location.reload();
                confirmModalEventAccept.style.display = "none";
              }
            })
          }
        });
        var deleteButtonIcon = document.createElement('i');
        deleteButtonIcon.className = "fas fa-trash";
        deleteButton.appendChild(deleteButtonIcon);
        deleteButtonField.appendChild(deleteButton);
        tableRow.appendChild(deleteButtonField);
      })
    })
  }
})();


function dateConverter(dateInMiliseconds) {
  var date = new Date(dateInMiliseconds);
  return date;
}

function dateFormater(date) {
  var day = date.getDay();
  var month = date.getMonth();
  var year = date.getFullYear();
  return day + "." + month + "." + year + ".";
}

function eventDateFormatter(year, month, day, hour, minute) {
  if (minute < 10)
    return day + "-" + month + "-" + year + " " + hour + ":0" + minute;
  else
    return day + "-" + month + "-" + year + " " + hour + ":" + minute;
}

function getUserRole(role) {
  if (role === true)
    return "Admin";
  else
    return "User";
}

function deleteUser(id) {
  return deleteUserById(id);
}

function deleteSchedule(id) {
  return fetch(`${deleteScheduleURL}${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  });
}

if(window.location.href.indexOf("login") !== -1)
{
function deleteEventType(id) {
  return fetch(`${deleteEventURL}${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  })
}
}

async function addEventType(url = ``, data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
}