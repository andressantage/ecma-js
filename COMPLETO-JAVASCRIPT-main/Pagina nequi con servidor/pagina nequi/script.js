const formatoColombiano = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 2
});

let total = 0;
let ingresos = [];
let egresos = [];

function recibirDatosTransaccion() {
    const tipo = document.getElementById('seleccionTipo').value;
    const monto = Number(document.getElementById('dinero').value);
    operarDatosTransaccion(tipo, monto);
}

async function operarDatosTransaccion(tipo, monto) {
    if (isNaN(monto) || monto <= 0) {
        alert('Ingrese un monto válido');
        return;
    }

    tipo === 'ingreso' ? (total += monto, ingresos.push(monto), mostrarDatosTransaccion('ingreso', monto)) : (total -= monto, egresos.push(monto), mostrarDatosTransaccion('egreso', monto));

    actualizarTotal();
    await guardarDatos();
}

async function mostrarDatosTransaccion(tipo, monto) {
    const tabla = document.getElementById(tipo === 'ingreso' ? 'tablaIngresos' : 'tablaEgresos');
    const fila = tabla.insertRow(0);
    const celdaMonto = fila.insertCell(0);
    const celdaFecha = fila.insertCell(1);
    celdaMonto.innerText = formatoColombiano.format(monto);
    celdaFecha.innerText = new Date().toLocaleString();
}

function actualizarTotal() {
    document.getElementById('total').innerText = formatoColombiano.format(total);
}

async function guardarDatos() {
    const datos = {
        total: total,
        ingresos: ingresos,
        egresos: egresos
    };

    try {
        const response = await fetch('http://localhost:3000/datos', {
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    } catch (error) {
        console.error('Error al guardar los datos en el servidor:', error);
    }
}
async function cargarDatosGuardados() {
    try {
        const response = await fetch('http://localhost:3000/datos');
        const datos = await response.json();
        total = datos.total;
        ingresos = datos.ingresos || [];
        egresos = datos.egresos || [];
    } catch (error) {
        console.error('Error al cargar los datos del servidor:', error);
    }

    ingresos.forEach(ingreso => mostrarDatosTransaccion('ingreso', ingreso));
    egresos.forEach(egreso => mostrarDatosTransaccion('egreso', egreso));
    actualizarTotal();
}
cargarDatosGuardados();