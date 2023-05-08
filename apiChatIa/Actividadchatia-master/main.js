import api from "./src/api.js";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#datos").addEventListener("submit", (e) => {
    e.preventDefault()
    let data  = Object.fromEntries(new FormData(e.target))
    const myworker = new Worker("src/wkresponse.js", {
        type: "module"
    })
    let respuesta = async() => {
        let msg = await api.api(data.pregunta)
        myworker.postMessage({ data: msg});
        myworker.addEventListener("message", (e) => {
            let respuesta = document.querySelectorAll('.respuesta')
            respuesta[0].innerHTML = ''
            respuesta[1].innerHTML = ''
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            respuesta[0].appendChild(...doc.body.children);
            respuesta[1].innerHTML = e.data
        })
        /* console.log(await api.api(data.pregunta.generations[0].text))  */
    }

    respuesta()
     
  });
});
