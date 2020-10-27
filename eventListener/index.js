//DOM
let ps = document.getElementById("ps");
let us = document.getElementById("us");
let p = document.getElementById("p");
let h = document.getElementById("h");
let show = document.getElementById("show");
let text = document.getElementById("text");


//Functions
let over = (h1, h2) => {
    show.innerText = h1;
    text.innerText = h2;
};

let leave = (h1, h2) => {
    show.innerText = h1;
    text.innerText = h2;
};

//EventHandlers
ps.addEventListener("mouseover", () => over("Přírodní satelity", "Jako je Měsíc. Většinou obíhají kolem své hmotnější planetky či planety."));
ps.addEventListener("mouseleave", () => leave("", ""));

us.addEventListener("mouseover", () => over("Umělé satelity", "Jako jsou například satelity Starlink. Velké množství satelitů se drží na oběžné dráze země. "));
us.addEventListener("mouseleave", () => leave("", ""));

p.addEventListener("mouseover", () => over("Planety", "Například Země. Planety obíhají kolem své mateřské hvězdy, ale také mohou být vymrštěny a cestovat vesmírem."));
p.addEventListener("mouseleave", () => leave("", ""));

h.addEventListener("mouseover", () => over("Hvězdy", "Slunce a jeho termojaderná fůze. Slunce je jen malé smítko ve vesmíru, tak či tak jeho kýchnutí může rozvrátit život na zemi."));
h.addEventListener("mouseleave", () => leave("", ""));
