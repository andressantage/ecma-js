let myForm = document.querySelector('#myForm');
myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    opc[e.submitter.dataset.accion](data);
});

const opc = {
    'GET': () => getUserAll(),
    'POST': (data) => postUserAll(data),
    'PUT': (data) => putUserAll(data),
    'DELETE': (data) => deleteUserAll(data),
    'SEARCH': (data) => searchUserAll(data)
};

let config = {
    method: '',
    headers: new Headers({
        'Content-Type': 'application/json'
    })
};

const getUserAll = async () => {
    config.method = 'GET';
    let res = await (await fetch('http://localhost:4001/usuarios', config)).json();
    console.log(res);
};

const postUserAll = async (data) => {
    config.method = 'POST';
    config.body = JSON.stringify(data);
    let res = await (await fetch('http://localhost:4001/usuarios', config)).json();
    console.log(res);
};

const putUserAll = async (data) => {
    config.method = 'PUT';
    config.body = JSON.stringify(data);
    let res = await (await fetch(`http://localhost:4001/usuarios/${data.id}`, config)).json();
    console.log(res);
};

const deleteUserAll = async (data) => {
    config.method = 'DELETE';
    config.body = JSON.stringify(data);
    let res = await (await fetch(`http://localhost:4001/usuarios/${data.id}`, config)).json();
    console.log(res);
};

const searchUserAll = async (data) => {
    config.method = 'GET';
    let searchParams = Object.values(data).join('');
    let res = await (await fetch(`http://localhost:4001/usuarios/${searchParams}`, config)).json();
    console.log(res);
};