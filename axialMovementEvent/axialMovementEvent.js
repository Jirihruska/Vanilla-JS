//deklarace proměnných pro pohyb v osách X a Y
let x;
let y;
//DOM event arrow function v proměnné s parametrem "e" POHYB MYŠI ZOBRAZUJE ŽIVOU POLOHU X a Y
let mouseMove = () => document.addEventListener("mousemove", (e) => document.getElementById("livePosition").innerText = (`Živá pozice: x: ${e.x}, y: ${e.y}`));
mouseMove();

//DOM event arrow function PO KLIKNUTÍ SE SPUSTÍ FUNKCE, KTERÁ VYPÍŠE POSLEDNÍ POZICI X a Y z FUNKCE ŽIVÉ POLOHY a PŘIDÁ KLIK (+1) DO NADEFINOVANÉHO ELEMENTU
document.addEventListener("click", (s) => {
    //deklarace času (přidání instance z metody "Date()")
    let time = new Date();
    //VYPSÁNÍ POSLEDNÍ POZICE S ČASEM
    document.addEventListener("mousemove", () => document.getElementById("savedPosition").innerText = (`Poslední pozice: x: ${s.x}, y: ${s.y} in ${time.getHours()}:${time.getMinutes()}`));
    //CYKLUS FOR VYPISUJE VŠECHNY KLIKNUTÍ
    for(let i = 0; i < s.x && s.y; i++){
        return document.getElementById("list").innerHTML += "<br>" + `x: ${s.x} y: ${s.y} in ${time.getHours()}:${time.getMinutes()}`;        
    }
} )
//deklarace proměnné počet kliknutí (nastavení na 0 by způsobilo, že by se první klik počítal jako 0, proto začínáme od prvního kliknutí)
let mouseClick = 1;
//DOM event arrow function PO KLIKNUTÍ SE SPUSTÍ FUNKCE, KTERÁ PŘIČTE K PROMĚNNÉ "mouseClick" hodnotu 1
document.addEventListener("click", () => document.getElementById("clickCount").innerText = `Počet uložených pozic: ${mouseClick++}`);

