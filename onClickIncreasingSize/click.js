'use strict';

class click {

    constructor(){
        this.click = 0;   
        this.clickBtn = document.getElementById("myClick");
        this.show = document.getElementById("pocet");
       

    }

    onClickBtn() {
        return this.clickBtn.onclick = () => {
            
            this.click++;
            console.log(this.click);           
            this.show.innerText = `${this.click} x ${this.click} px`;
            this.show.style.height = parseInt(this.click) + "px";
            this.show.style.width = parseInt(this.click) + "px";
            this.show.style.backgroundColor = "red";

            if(this.click >= 25 && this.click < 50){
                this.show.style.backgroundColor = "orange";                        
            }
            else if(this.click >= 50 && this.click < 75){
                this.show.style.backgroundColor = "yellow";                        
            }
            else if(this.click >= 75 && this.click < 100){
                this.show.style.backgroundColor = "green";                                    
            }
            else if(this.click == 100){
                this.show.style.backgroundColor = "lightgreen";
                this.click = 0;                                      
            }
        }
    }

}


const clickBtn = new click();
clickBtn.onClickBtn();
