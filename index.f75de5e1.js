/* eslint-disable padding-line-between-statements */ /* eslint-disable max-len */ /* eslint-disable comma-dangle */ "use strict";
const body = document.querySelector("body");
function waitFor(element, eventName) {
    return new Promise((resolve)=>{
        element.addEventListener(eventName, ()=>{
            resolve(`It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`);
        });
    });
}
const printMessage = (message)=>{
    const messageDiv = document.createElement("div");
    messageDiv.className = "message";
    messageDiv.textContent = message;
    body.appendChild(messageDiv);
};
const loginField = document.getElementById("login");
const passwordField = document.getElementById("password");
const button = document.getElementById("submit");
waitFor(loginField, "click").then(printMessage);
waitFor(passwordField, "click").then(printMessage);
waitFor(button, "click").then(printMessage);
waitFor(loginField, "input").then(printMessage);
waitFor(passwordField, "input").then(printMessage);
waitFor(loginField, "blur").then(printMessage);
waitFor(passwordField, "blur").then(printMessage);
waitFor(button, "blur").then(printMessage);

//# sourceMappingURL=index.f75de5e1.js.map