let listCourseBlock = document.querySelector('#list-course');

const courseAPI = 'http://localhost:3000/course';

function start() {
    getCourse(renderCourse)
    handleCreateForm()
}

start();

function getCourse(callback) {
    fetch(courseAPI)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

function renderCourse(courses) {
    var listCoursesBlock = document.querySelector('#list-course');
    var html = courses.map(function(course) {
        return `
            <li>
                <h4>${course.name}</h4>
                <p>${course.description}</p>
            </li> 
        `
    });
    listCoursesBlock.innerHTML = html.join('');
}

function handleCreateForm() {
    const createBtn = document.getElementById("create");
    createBtn.onclick = function() {
        let name = document.querySelector('input[name = "name"]').value
        let description = document.querySelector('input[name = "description"]').value
        
        createCourse({
            name: name,
            description: description
        }, )

        
    }
}

function createCourse(data, callback) {
    const option = {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseAPI, option)
        .then(function(response) {
            response.json()
        })
        .then(callback)
}