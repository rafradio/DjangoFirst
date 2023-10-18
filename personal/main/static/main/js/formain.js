function RequestNewNote() {
    this.reqButton = document.querySelector('.new_note');
    this.initSettings();
}

RequestNewNote.prototype.initSettings = function() {
    this.reqButton.addEventListener('click', () => {
        newUrl = new URL(window.location.href); 
        fullPath = new URL("http://" + newUrl.host + "/about");
        location.href = fullPath;
        // location.href = "http://localhost:8000/about/";
    });
}

const buttonNew = new RequestNewNote();