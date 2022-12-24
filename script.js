const main = document.querySelector(".main");
const alertB = document.querySelector(".alert");
const exclamationIcon = document.querySelector(".fa-exclamation-circle");
const msg = document.querySelector(".msg");
const closeBtn = document.querySelector(".close-btn");
const closeIcon = document.querySelector(".fa-times");


//show alert class

class ShowAlert {
    constructor(state, borderColor, color) {
        this.state = state;
        this.borderColor;
        this.color;
    }

    trigger(message) {
        alertB.style.background = this.state;
        alertB.style.borderColor = this.borderColor;
        msg.textContent = message;
        msg.style.color = this.color;
        exclamationIcon.style.color = this.color;
        closeIcon.style.color = this.color;

        alertB.classList.add("show");
        alertB.classList.remove("hide")

        setTimeout(() => {
            alertB.classList.remove("show");
            alertB.classList.add("hide")
        }, 5000);

        start();

        closeBtn.addEventListener("click", () => {
            alertB.classList.remove("show");
            alertB.classList.add("hide");
        })

    }
}

const warning = new ShowAlert("#ffdb9b", "#ffa502", "#ce8500");

const danger = new ShowAlert("#f8d7da", "#d1281f", "#721c24");

main.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-danger")) {
        danger.trigger("Alert: this is a dangerous alert!");
    }


    else if (e.target.classList.contains("btn-warning")) {
        warning.trigger("Alert: this is a warning alert!");
    }

});


function start() {
    const progress = document.querySelector(".progress");
    let width = 0;
    const timeInterval = setInterval(fill, 50);

    function fill() {
        if (width >= 100) {
            clearInterval(timeInterval);
        }
        else {
            width ++;
            progress.style.width = width + "%";
        }
    }
}