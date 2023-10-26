"use strict"

let data = [
    {
        "trimestre": 1,
        "months": ['Enero', 'Febrero', 'Marzo'],
    },
    {
        "trimestre": 2,
        "months": ['Abril', 'Mayo', 'Junio'],
    },
    {
        "trimestre": 3,
        "months": ['Julio', 'Agosto', 'Septiembre'],
    },
    {
        "trimestre": 4,
        "months": ['Octubre', 'Noviembre', 'Diciembre'],
    },
]


window.onload = function() {
    let mainSelect = document.getElementById("trimestreSelect");
    let monthSelect = document.getElementById("mesesSelect");

    mainSelect.addEventListener("change", () => {
        let trimestre = data.find(t => t.trimestre === mainSelect.value)
        console.log(trimestre);
        trimestre.months.forEach(m => {
            let op = document.createElement("option");
            op.textContent = m;
            op.value = m;
            monthSelect.appendChild(op)
        })
    })

}