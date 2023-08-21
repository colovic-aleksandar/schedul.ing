import { urls, fetchObject} from '../config/config/js';


function getUserById(userId){
    return fetch(`${urls.users}${userId}`).then(response => response.json());
}
function getUsers(){
    return fetch(urls.users).then(response => response.json());
}
function getSchedules(){
    return fetch(urls.schedules).then(response => response.json());
}
function getEvents(){
    return fetch(urls.events).then(response => response.json());
}
function getEventAtendees(userId){
    return fetch(`${urls.eventAttendees}${userId}`).then(response => response.json());
}
function postEventType(data = {}){
    return fetch(urls.events, fetchObject.post);
}
function deleteUserById(id){
    return fetch(`${urls.adminUsers}${id}`, fetchObject.delete);
}
function deleteScheduleById(id){
    return fetch(`${urls.adminSchedules}${id}`, fetchObject.delete);
}
function deleteEventTypeById(id){
    return fetch(`${urls.adminEvents}${id}`, fetchObject.delete);
}

export { getUserById, getUsers, getSchedules, getEvents, getEventAtendees, 
         postEventType, deleteUserById, deleteScheduleById, deleteEventTypeById };





