function blogWechsler() {
    const bp = document.getElementById("blogPage")
    const sp = document.getElementById("secondPage")

    bp.hidden = !bp.hidden;
    sp.hidden = !sp.hidden;
}

const mondoImages = [ 
    "Mondos/mondo1.png",
    "Mondos/mondo2.gif",
    "Mondos/mondo3.gif",
    "Mondos/mondo4.gif",
    "Mondos/mondo5.png",
    "Mondos/mondo6.png",
    "Mondos/mondo7.png",
    "Mondos/mondo8.png",
    

]
const mondoImg = document.getElementById("mondoImage");
mondoImg.src = mondoImages[Math.floor(Math.random() * mondoImages.length)];


const swoosh = anime.animate;
const titleswoosh = anime.animate;

swoosh(".bottombuttons a", {
    translateY: ["12vh", 0],
    duration: 700,
    opacity: [0, 1],
    delay: anime.stagger(250)
});
titleswoosh(".title", {
    translateY: ["-10vh", 0],
    duration: 1000,
    opacity: [0, 1],

});