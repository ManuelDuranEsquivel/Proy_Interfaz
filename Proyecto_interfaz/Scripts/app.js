// /scripts/app.js
function moveForward() {
    fetch('/api/move?action=forward')
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
        })
        .catch(error => console.error(error));
}

function moveBackward() {
    fetch('/api/move?action=backward')
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
        })
        .catch(error => console.error(error));
}

function rotateLeft() {
    fetch('/api/move?action=left')
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
        })
        .catch(error => console.error(error));
}

function rotateRight() {
    fetch('/api/move?action=right')
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
        })
        .catch(error => console.error(error));
}

function stop() {
    fetch('/api/move?action=stop')
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
        })
        .catch(error => console.error(error));
}
