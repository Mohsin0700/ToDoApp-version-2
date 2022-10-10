// ***** I start With the Name of Allah
let num = 0;
const mainFunc = () => {
    num++;
    let input = document.getElementById("inputField").value;
    document.getElementById("inputField").value = '';
    let container = document.getElementById("task_container");
    let div = document.createElement("div");
    div.innerHTML = input;
    let btn = document.createElement("button");
    btn.setAttribute('type', 'button');
    btn.setAttribute('data-bs-dismiss','alert');
    btn.classList.add('btn-close');
    div.appendChild(btn);
    container.appendChild(div);
    if (num === 1) {
        div.classList.add('alert', 'alert-success', 'alert-dismissible');
    } else if (num === 2) {
        div.classList.add('alert', 'alert-warning', 'alert-dismissible');
    } else if (num === 3) {
        div.classList.add('alert', 'alert-secondary', 'alert-dismissible');
    } else if (num === 4) {
        div.classList.add('alert', 'alert-danger', 'alert-dismissible');
    } else if (num === 5) {
        div.classList.add('alert', 'alert-primary', 'alert-dismissible');
    } else if (num === 6) {
        div.classList.add('alert', 'alert-dark', 'alert-dismissible');
    } else if (num === 7) {
        div.classList.add('alert', 'alert-info', 'alert-dismissible');
        num = 0;
    }
}

let input = document.getElementById("inputField");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        mainFunc();
    }
});
