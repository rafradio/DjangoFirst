function SaveToJson() {
    this.buttonJson = document.getElementById("json");
    this.returnButton = document.getElementById("return");
    // this.initSettings();
}

SaveToJson.prototype.initSettings = function() {
    this.returnButton.addEventListener('click', () => {
        newUrl = new URL(window.location.href); 
        fullPath = new URL("http://" + newUrl.host + "/about");
        location.href = fullPath;
    });
}

const saveAction = new SaveToJson();

export {saveAction};