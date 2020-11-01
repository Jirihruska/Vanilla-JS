document.querySelectorAll('.panel').forEach(item => {
  item.addEventListener('mouseenter', event => {

    let numH = 64;

    let myInt = setInterval(() =>{
      
      if(numH >= 420){    

        clearInterval(myInt);
        item.addEventListener('mouseleave', event => {
        let mouseLeave = setInterval(() => {
          if(numH <= 64){
            clearInterval(mouseLeave);
          }
          else{

            numH -= 10;
            item.style.height = numH + "px";
          }
        }, 10)});

      }
      else{
        numH += 10;
        item.style.height = numH + "px";
      }
    }, 10);

  

  })
})






