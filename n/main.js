let myForm = document.querySelector("#myForm")
myForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    let datos = Object.fromEntries(new FormData(e.target))
    opc[e.submitter.dataset.accion](datos)
})
const opc = {
    "GUARDAR": (datos) => guardarUsuario(datos),
    "ACTUALIZAR": (datos) => actualizarUsuario(datos),
    "ELIMINAR": (datos) => eliminarUsuario(datos),
    "BUSCAR": (datos) => buscarUsuario(datos),
}
let config = {
    headers: new Headers({
        "Content-Type": "application/json"
    })
}
/* async function listarUsuarios(){
    config.method = "GET"
    let ad = await(await fetch("http://localhost:4020/animales",config)).json()
    const af = ad.map(({nombreAnimal,especie,id}) => ({nombreAnimal,especie,id}))
    for(let i=0;i<af.length;i++){
        pap(af[i])
    }
} */
function listarUsuarios(){
let af=[
    {
      "nombreAnimal": "Zeuz",
      "especie": "Perro",
      "id": "123"
    },
    {
      "nombreAnimal": "Michi",
      "especie": "Gato",
      "id": "321"
    },
    {
      "nombreAnimal": "Rambo",
      "especie": "Camaleon",
      "id": "654"
    },
    {
      "nombreAnimal": "Barnabas",
      "especie": "Tiburon",
      "id": "987"
    },
    {
      "nombreAnimal": "Pancho",
      "especie": "Dinosaurio",
      "id": "741"
    },
    {
      "nombreAnimal": "Pablo",
      "especie": "Pinguino",
      "id": "369"
    },
    {
      "nombreAnimal": "Shakira",
      "especie": "Venado",
      "id": "852"
    }
  ]
  for(let i=0;i<af.length;i++){
    pap(af[i])
}
}

const guardarUsuario = async(datos)=>{
    config.method = "POST"
    config.body = JSON.stringify(datos)
    let ad = await(await fetch("http://localhost:4020/animales",config)).json()
}
const actualizarUsuario = async(datos)=>{
    config.method = "PUT"
    config.body = JSON.stringify(datos)
    let ad = await(await fetch(`http://localhost:4020/animales/${datos.id}`,config)).json()
}
const eliminarUsuario = async(datos)=>{
    config.method = "DELETE"
    config.body = JSON.stringify(datos)
    let ad = await(await fetch(`http://localhost:4020/animales/${datos.id}`,config)).json()
}
const buscarUsuario = async(datos)=>{
    config.method = "GET"
    let ad = await(await fetch(`http://localhost:4020/animales?q=${Object.values(datos.id).join("")}`,config)).json()
    let [af] = ad
    sap(af)
}
function sap(af){
    let {nombreAnimal,especie,id} = af
    let rest = document.querySelector(".modal")
    let remplazo = document.querySelector("#remplazo")
    let diva = document.createElement('div');
    diva.id = "remplazo"
    diva.innerHTML = `<h3>Nombre: ${nombreAnimal}</h3><br><h3>Especie: ${especie}</h3><br><h3>Id: ${id}</h3>`
    rest.replaceChild(diva, remplazo)
}

function pap(af){
    let rest = document.querySelector("#asom")
    let {nombreAnimal,especie,id} = af
    let diva = document.createElement('tr');
    let divo = document.createElement('td')
    diva.innerHTML = `<h3>Nombre: ${nombreAnimal} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Especie: ${especie}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Id: ${id}</h3>`
    rest.appendChild(diva)
    rest.appendChild(divo)
}
listarUsuarios()