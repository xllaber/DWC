let todayDiv = document.getElementById("today");
let todayDate =  new Date();
const weekdays = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
                        "Septiembre", "Noviembre", "Diciembre"];

todayDiv.innerHTML = `Hoy es ${weekdays[todayDate.getDay()]}, ${todayDate.getDate()} de ${months[todayDate.getMonth()]} 
                        de ${todayDate.getFullYear()}`;