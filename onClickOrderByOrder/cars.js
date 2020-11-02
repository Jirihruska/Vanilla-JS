//Uložíme si proměnné, které odkazují na DOM elementy//
let skodaDom = document.querySelector(".skoda");
let volkswagenDom = document.querySelector(".volkswagen");

//Vytvoříme objekt škoda//
let skoda = {
    0: "Citigo", 
    1: "Fabia",  
    2: "Rapid",  
    3: "Octavia",
    4: "Superb"
}

//Z objektu škoda vytvoříme pole hodnot a uložíme do proměnné arrSkoda//
let arrSkoda = Object.values(skoda); 

//Vytvoříme objekt volkswagen//
let volkswagen = {
    0: "Up",
    1: "Polo",
    2: "Golf",
    3: "Passat",
    4: "Arteon"
}

//Z objektu volkswagen vytvoříme pole hodnot a uložíme do proměnné arrVolkswagen//
let arrVolkswagen = Object.values(volkswagen);

//A TEĎ UKÁŽU 2 ZPŮSOBY JAK UDĚLAT EVENT//
//ŠKODA POUŽIJE EVENT S ODKAZEM NA FUNKCI// 
                                          
//Funkce showSkoda na kterou odkazuje Event skodaDom hned pod ní//
let showSkoda = () => {

    if(arrSkoda.length) {
        skodaDom.innerHTML = arrSkoda.shift();
    }

}
//skodaDom event//
skodaDom.addEventListener("click", showSkoda);

//A nebo to jednoduše splácáme dohromady. (kód je kratší a přehlednější)//
volkswagenDom.addEventListener("click", showVolkswagen = (e) =>{
    
    if(arrVolkswagen.length)  { //Pokud má řetězec nějakou délku,//
        volkswagenDom.innerHTML = arrVolkswagen.shift(); //element na kliknutí vypíše další řetězec z pole//
    }
    //Tím pádem listujeme jen do posledního řetězce v poli, protože další řetězec v poli neexistuje (undefined) a ten délku nemá.//
    //Kdybyste napsali if(arrVolkswagen), po posledním řetězci "Arteon" na kliknutí zobrazí právě undefined//
});



