function blogWechsler() {
    const bp = document.getElementById("blogPage")
    const sp = document.getElementById("secondPage")

    bp.hidden = !bp.hidden;
    sp.hidden = !sp.hidden;
}

const mondoImages = [ 
    "Mondos/mondo1.png",
    "Mondos/mondo2.png",

]

const mondoImg = document.getElementById("mondoImage");
mondoImg.src = mondoImages[Math.floor(Math.random() * mondoImages.length)];