'use strict';

class Contribution {

    constructor() {
        this.enterBtn = document.getElementById("enter");        
        this.getOut = document.createElement("div");
        this.appendChild = document.body.appendChild(this.getOut);
    }

    onBtnClick() {
        return this.enterBtn.onclick = () => {

            this.inputName = document.getElementById("name").value;
            this.inputText = document.getElementById("text").value;

            this.getOut.className = "inputFieldOut";

            this.getOut.innerHTML += ("Tvé jméno: " + "<br>" + this.inputName + "<br>" + "Příspěvek: " + "<br>" + this.inputText + "<br>" + "Přidáno: " + date.getHours() + ":" + date.getMinutes() + " / " + date.getDay() +"." + date.getMonth() + "." + date.getFullYear() + "<br>" + "-----------------" + "<br>");
            this.appendChild;
            
            console.log(this.inputName + " " + this.inputText);
        }
    }


}

const letsGetThatButton = new Contribution();
letsGetThatButton.onBtnClick();

let date = new Date();
