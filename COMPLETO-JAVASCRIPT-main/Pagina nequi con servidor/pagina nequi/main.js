let guardar = function() {
    fetch('http://localhost:3000/usuario',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "monto": "total",
        })
    })
}
document.querySelector("button").addEventListener("click", (e)=>{
    guardar();
})