let url = "http://localhost:3000/"

function get(entidad, id) {
    // Return a new promise.
    return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
        let req = new XMLHttpRequest();
        req.open('GET', url + entidad + "/" + id);
        req.responseType = "json";
        req.onload = function() {
            if (req.status === 200) {
                // console.log(req.response);
                // let req2 = new XMLHttpRequest();
                // req2.open("GET", url + "actors/" + req.response.actorId);
                // req2.responseType = "json";
                // req2.send();
                // req2.onload = () => {
                //     // console.log(req2.response.name);
                //     promise();
                // }
                resolve(req.response); // Resolve the promise with the response text
            }
            else {
                reject(Error(req.statusText + `en ${entidad}`)); // HTTP Error reject with statusText
            }
        };
        // Handle network errors
        req.onerror = function() {
            reject(Error("Network Error"));
        };
        req.send(); // Make the request
    });
}

let entidad = prompt("Dime la entidad", "movies");
let id = parseInt(prompt("Dime id de la pelicula"));
// get(entidad, id).then(response => response.forEach(r => console.log(r))).catch(error => console.log(error));

get(entidad, id)
    .then(pelicula => get("actors", pelicula.actorId))
    .then(a => console.log(a)).catch(() => console.log("Error: no encontrado en " + entidad));