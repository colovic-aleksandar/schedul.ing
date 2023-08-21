const urls = {
    users = 'http://localhost:8080/users/',
    schedules = 'http://localhost:8080/schedules/all',
    eventAttendees = 'http://localhost:8080/admin/schedules/event/',
    events = 'http://localhost:8080/events',
    adminUsers = 'http://localhost:8080/admin/users/',
    adminSchedules = 'http://localhost:8080/admin/schedules/',
    adminEvents = 'http://localhost:8080/admin/events/'
}

const fetchObject = {
    post : {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    },
    delete : {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    }
}

export { urls, fetchObject };