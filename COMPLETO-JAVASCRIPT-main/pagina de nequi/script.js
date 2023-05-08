const formatoColombiano = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 2
});

let total = 0;

function recibirDatosTransaccion() {
    const tipo = document.getElementById('seleccionTipo').value;
    const monto = Number(document.getElementById('dinero').value);
    operarDatosTransaccion(tipo, monto);
}

function operarDatosTransaccion(tipo, monto) {
    if (isNaN(monto) || monto <= 0) {
        alert('Ingrese un monto válido');
        return;
    }

    tipo === 'ingreso' ? (total += monto, mostrarDatosTransaccion('ingreso', monto)) : (total -= monto, mostrarDatosTransaccion('egreso', monto));

    actualizarTotal();
    guardarDatos();
}


function mostrarDatosTransaccion(tipo, monto) {
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

function guardarDatos() {
    const datos = {
        total: total,
        ingresos: [],
        egresos: []
    };

    const ingresos = document.getElementById('tablaIngresos').rows;
    for (let i = 0; i < ingresos.length; i++) {
        const ingreso = ingresos[i].cells[0].innerText;
        datos.ingresos.push(ingreso);
    }

    const egresos = document.getElementById('tablaEgresos').rows;
    for (let i = 0; i < egresos.length; i++) {
        const egreso = egresos[i].cells[0].innerText;
        datos.egresos.push(egreso);
    }

    localStorage.setItem('datos', JSON.stringify(datos));
}

function cargarDatosGuardados() {
    const datosGuardados = localStorage.getItem('datos');
    if (!datosGuardados) {
        return;
    }

    const datos = JSON.parse(datosGuardados);
    total = datos.total;

    for (let i = 0; i < datos.ingresos.length; i++) {
        const ingreso = Number(datos.ingresos[i].replace(/[^0-9.-]+/g, ""));
        mostrarDatosTransaccion('ingreso', ingreso);
    }

    for (let i = 0; i < datos.egresos.length; i++) {
        const egreso = Number(datos.egresos[i].replace(/[^0-9.-]+/g, ""));
        mostrarDatosTransaccion('egreso', egreso);
    }

    actualizarTotal();
}

cargarDatosGuardados();