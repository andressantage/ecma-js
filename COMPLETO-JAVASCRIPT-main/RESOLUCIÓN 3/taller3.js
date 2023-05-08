const campus = {
    sedes: {
        Bucaramanga: {
            direccion: 'Cra. 26 #36-46',
            telefono: '+57 7 6433500',
            email: 'info.bga@campus.com'
        },
        Bogotá: {
            direccion: 'Cra. 7 #32-20',
            telefono: '+57 1 7561715',
            email: 'info.bog@campus.com'
        },
        Medellín: {
            direccion: 'Cra. 43A #1-50',
            telefono: '+57 4 4488400',
            email: 'info.med@campus.com'
        },
        México: {
            direccion: 'Calle Río Pánuco 141',
            telefono: '+52 55 5257 1800',
            email: 'info.mex@campus.com'
        }
    },
    trainers: [
        {
            nombre: 'Juan Pérez',
            telefono: '+57 300 1234567',
            email: 'juan.perez@campus.com',
            teams: [
                {
                    dia: 'Lunes',
                    hora: '8:00 - 10:00',
                    salon: '101',
                    piso: '1'
                },
                {
                    dia: 'Miércoles',
                    hora: '10:00 - 12:00',
                    salon: '201',
                    piso: '2'
                }
            ]
        },
        {
            nombre: 'María González',
            telefono: '+57 310 9876543',
            email: 'maria.gonzalez@campus.com',
            teams: [
                {
                    dia: 'Martes',
                    hora: '14:00 - 16:00',
                    salon: '102',
                    piso: '1'
                },
                {
                    dia: 'Jueves',
                    hora: '16:00 - 18:00',
                    salon: '202',
                    piso: '2'
                }
            ]
        }
    ],
    campers: [
        {
            nombre: 'Luisa García',
            telefono: '+57 315 1234567',
            email: 'luisa.garcia@campus.com',
            teams: [
                {
                    dia: 'Lunes',
                    hora: '10:00 - 12:00',
                    salon: '101',
                    piso: '1'
                },
                {
                    dia: 'Miércoles',
                    hora: '8:00 - 10:00',
                    salon: '203',
                    piso: '2'
                }
            ],
            horarios: {
                ingles: {
                    dia: 'Martes',
                    hora: '16:00 - 18:00',
                    salon: '305',
                    piso: '3'
                },
                ser: {
                    dia: 'Jueves',
                    hora: '10:00 - 12:00',
                    salon: '201',
                    piso: '2'
                }
            },
            niveles: [
                {
                    nombre: 'Introducción a la programación',
                    tecnologia: 'Desarrollo web',
                    metodologia: 'presencial',
                    preRequisito: null, // no tiene pre-requisito
                    tipo: 'Obligatorio'
                },
                {
                    nombre: 'Programación avanzada',
                    tecnologia: 'Desarrollo web',
                    metodologia: 'presencial',
                    preRequisito: 'Introducción a la programación',
                    tipo: 'Obligatorio'
                },
                {
                    nombre: 'Bases de datos',
                    tecnologia: 'Desarrollo web',
                    metodologia: 'presencial',
                    preRequisito: 'Introducción a la programación',
                    tipo: 'Obligatorio'
                },
                {
                    nombre: 'Diseño web',
                    tecnologia: 'Desarrollo web',
                    metodologia: 'presencial',
                    preRequisito: 'Introducción a la programación',
                    tipo: 'Electivo'
                },
            ],
            roadmap: {
               creditos: 120,
               año: 2023,
               numAsignaturas: 12
            }
        }
    ]
}

const { sedes: { Medellín : { telefono } } } = campus;
const { sedes: { Bucaramanga: { direccion } } } = campus;
console.log(direccion,telefono);
// Reportar si la asignatura (tecnología) de los trainers es remota o presencial
campus.trainers.forEach(trainer => {
    const { tecnologia, metodologia } = trainer.niveles.find(nivel => nivel.tecnologia === 'Desarrollo web') || {};
    console.log(`${trainer.nombre} - ${tecnologia || 'N/A'} - ${metodologia || 'N/A'}`);
});
  
// Reportar el nombre del salón de los campers
campus.campers.forEach(camper => {
    const { salon } = camper.teams.find(team => team.dia === 'Lunes' && team.hora === '10:00 - 12:00') || {};
    console.log(`${camper.nombre} - ${salon || 'N/A'}`);
});
  