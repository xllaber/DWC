"use strict"
window.onload = function () {
    let imgs = Array.from(document.getElementsByClassName("img"));
    let checkboxes = Array.from(document.querySelectorAll("input[type=checkbox]"));
    let whiteImgSrc = document.getElementById("white-img").src;

    imgs.forEach(i => {
        i.addEventListener("mouseover", () => {
            document.getElementById("white-img").src = `${i.src}`;
        })
        i.addEventListener("mouseout", () => {
            document.getElementById("white-img").src = `${whiteImgSrc}`;
        })
    });

    document.getElementById("totalBtn").addEventListener("click", () => {
        let total = 0;
        checkboxes.forEach(c => {
            if (c.checked) {
                total += parseInt(c.value);
            }
        })
        document.getElementById("totalP").innerHTML = `<b>TOTAL: ${total}&euro;</b>`
    })
}



