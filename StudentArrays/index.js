"use strict"
let alumnos=[{'codigo':'DAW-1-2020',
    'nombre':'Pepe',
    'ciudad':'Valencia',
    'calificaciones':[{'asignatura':'PRG','nota':9},
        {'asignatura':'GBD','nota':6},
        {'asignatura':'ING','nota':4},
        {'asignatura':'FOL','nota':3}
    ],
    'edad':24},
    {'codigo':'DAW-2-2020',
        'nombre':'Juan',
        'ciudad':'Castellon',
        'calificaciones':[{'asignatura':'DWC','nota':4},
            {'asignatura':'DWS','nota':6},
            {'asignatura':'DAW','nota':7},
            {'asignatura':'DIW','nota':8},
            {'asignatura':'ING','nota':9},
            {'asignatura':'EIE','nota':2}
        ],
        'edad':28},
    {'codigo':'DAW-1-2019',
        'nombre':'Ana',
        'ciudad':'Valencia',
        'calificaciones':[{'asignatura':'PRG','nota':6},
            {'asignatura':'GBD','nota':2},
            {'asignatura':'ING','nota':6},
            {'asignatura':'FOL','nota':2}
        ],
        'edad':22},
    {'codigo':'DAW-2-2020',
        'nombre':'Maria',
        'ciudad':'Castellon',
        'calificaciones':[{'asignatura':'DWC','nota':4},
            {'asignatura':'DWS','nota':6},
            {'asignatura':'DAW','nota':7},
            {'asignatura':'DIW','nota':8},
            {'asignatura':'ING','nota':4},
            {'asignatura':'EIE','nota':1}
        ],
        'edad':30}
];

function notasAlumno(){
    let name = prompt("Nombre del alumno");
    let average = 0;
    let student = alumnos.find(a => a.nombre.toLowerCase() === name.toLowerCase());
    if (student === undefined){
        console.log(`El alumno ${name} no existe`);
    } else {
        let total = 0;
        student.calificaciones.forEach(e => total += e.nota);
        average = total / student.calificaciones.length;

        student.calificaciones.sort((a, b) => a.nota - b.nota);
        let lowestScore = student.calificaciones[0];
        let highestScore = student.calificaciones[student.calificaciones.length-1];
        console.log(`Media de ${name}: ${average}`);
        console.log(`Nota mas alta de ${name}: ${highestScore.asignatura}: ${highestScore.nota}`);
        console.log(`Nota mas baja de ${name}: ${lowestScore.asignatura}: ${lowestScore.nota}`);
    }
}

function subeUnPunto(){
    alumnos.forEach(a => {
        a.calificaciones.map(c => c.nota++);
        console.log(a.calificaciones);
    })
}
function alumnosCiudad(){
    let city = prompt("Ciudad:")
    let studentsOfCity = alumnos.filter(a => a.ciudad.toLowerCase() === city.toLowerCase());
    console.log(studentsOfCity);
}
function alumnosCurso(){
    let year = prompt("Curso:")
    let studentsOfYear = alumnos.filter(a => a.codigo.split("-")[1] === year);
    console.log(studentsOfYear);
}
function ordenaEdad(){
    let studentsByAge = alumnos.sort((a, b) => a.edad - b.edad );
    console.log(studentsByAge);
}
function ordenaNombreAsc(){
    let studentsByNameAsc = alumnos.sort((a, b) => {
        if (a.nombre <= b.nombre){
            return -1;
        }
        if (a.nombre >= b.nombre){
            return 1;
        }
        if (a.nombre === b.nombre){
            return 0;
        }
    });
    console.log(studentsByNameAsc)
}
function ordenaNombreDesc(){
    let studentsByNameDesc = alumnos.sort((a, b) => {
        if (a.nombre <= b.nombre){
            return -1;
        }
        if (a.nombre >= b.nombre){
            return 1;
        }
        if (a.nombre === b.nombre){
            return 0;
        }
    }).reverse();
    console.log(studentsByNameDesc);
}
function borraAlumno(){
    let name = prompt("Alumno a eliminar");
    let pos = alumnos.findIndex(a => a.nombre.toLowerCase() === name.toLowerCase());
    if (pos === -1){
        console.log("Alumno no encontrado");
    }
    alumnos.splice(pos, 1);
    // delete alumnos[pos];
    console.log(alumnos);
}
function nuevoAlumno(){
    let code = prompt("Codigo");
    let name = prompt("Nombre");
    let city = prompt("Ciudad");
    let age = prompt("Edad");
    let newStudent = {
        "codigo": code,
        "nombre": name,
        "ciudad": city,
        "cualificaciones": [],
        "edad": age
    }
    alumnos.push(newStudent);
    console.log(alumnos)
}
function nuevaAsignatura(){
    let name = prompt("Nombre");
    let student = alumnos.find(a => a.nombre === name);
    if (student === null){
        console.log("Alumno no encontrado");
    }
    let subject = prompt("Asugnatura");
    let marks = prompt("Nota");
    let existingSubject = student.calificaciones.find(a => a.asignatura === subject);
    if(existingSubject != null){
        existingSubject.nota = marks;

    } else {
        student.calificaciones.push({"Asignatura": subject, "Nota": marks});
    }


}


