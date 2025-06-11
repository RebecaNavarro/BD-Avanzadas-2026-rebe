## Parte 2 - MongoDB

```

use taller_4_11_06;

db.createCollection("HospitalVidaSana");
db.createCollection("Shift");

db.HospitalVidaSana.insertOne({
    dr : {
        _id: 1,
        name: 'Dr. Miguel Gómez',
        area: 'Jefe de medicina general'
    }
});

db.Shift.insertMany([
    {
        dr: 1,
        pacient: {
            name: 'Rebeca',
            lastName: 'Navarro',
            age: 21,
            numbers: [78810003, 788800031]
        },
        day: '2025-06-15',
        hour: '12:00',
        state: 'Confirmado'
    },
    {
        dr: 1,
        pacient: {
            name: 'Miguel',
            lastName: 'Quenta',
            age: 60,
            numbers: [70565913]
        },
        day: '2025-06-15',
        hour: '11:00',
        state: 'Cancelado'
    },
    {
        dr: 1,
        pacient: {
            name: 'Paul',
            lastName: 'Landaeta',
            age: 30,
            numbers: [78810003, 788800031]
        },
        day: '2025-06-15',
        hour: '10:00',
        state: 'Confirmado'
    },
    {
        dr: 1,
        pacient: {
            name: 'Miguel',
            lastName: 'Quenta',
            age: 60,
            numbers: [70565913]
        },
        day: '2025-05-02',
        hour: '09:00',
        state: 'Atendido',
        coments: ['Trajo laboratorios', 'Esta muy enfermo']
    },
    {
        dr: 1,
        pacient: {
            name: 'Paul',
            lastName: 'Landaeta',
            age: 30,
            numbers: [78810003, 788800031]
        },
        day: '2025-05-16',
        hour: '09:00',
        state: 'Atendido',
        coments: ['Trajo laboratorios']
    },
    {
        dr: 1,
        pacient: {
            name: 'Rebeca',
            lastName: 'Navarro',
            age: 21,
            numbers: [78810003, 788800031]
        },
        day: '2025-06-17',
        hour: '11:00',
        state: 'Pendiente'
    },
    {
        dr: 1,
        pacient: {
            name: 'Rebeca',
            lastName: 'Navarro',
            age: 21,
            numbers: [78810003, 788800031]
        },
        day: '2025-07-01',
        hour: '15:00',
        state: 'Pendiente'
    }

]);


// Necesito revisar mis turnos del 15 de junio de 2025. Solo los confirmados.
db.Shift.find({
    day: {$eq:'2025-06-15'},
    state: {$eq:'Confirmado'}
});

//Quiero ver todos los comentarios médicos registrados en esos turnos.
db.Shift.find(
    {
        'coments': {$exists: true}
    }
).forEach(function(coment){
    print(coment.coments)
});

//¿Cuántos pacientes tengo con más de 40 años y al menos dos teléfonos registrados?
db.Shift.find({
    'pacient.age':{$gt: 40}, 'pacient.numbers': {$size:2}
})

//Necesito ver los pacientes que tienen turnos pendientes aún sin atender.
db.Shift.find({
    state: {$eq: 'Pendiente'}
}).forEach(function(pacient){
    print(pacient.pacient.name)
});

```