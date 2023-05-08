export class SoporteMainPage extends HTMLElement{
    constructor(){ 
        super();
        this.render()
        this.evenMostrarAcrodio();
    }

render(){


    this.innerHTML = /*html */`
    <div >

                <button class="accordion ">¿Que servicios ofrece campus?</button>
                        <div class="panel"><p>aaoisoiaos</p> </div>

                <button class="accordion">¿Que servicios ofrece campus?</button>
                        <div class="panel"><p>aaoisoiaos</p> </div>

                <button class="accordion">¿Que servicios ofrece campus?</button>
                        <div class="panel"><p>aaoisoiaos</p> </div>
   </div>
    
    
    `
}



evenMostrarAcrodio(){

    document.querySelectorAll('.accordion').forEach((boton,pos) =>{

            boton.addEventListener('click', (e)=>{
                 let panel = document.querySelectorAll('.panel')

                   panel[pos].style.display = 'block'

                   boton.addEventListener('click', (e)=>{
                    let panel = document.querySelectorAll('.panel')
   
                      panel[pos].style.display = 'none'
                      this.evenMostrarAcrodio();
   
   
   
               })



            })

            
        })
    }
}

customElements.define('soporte-main-page',SoporteMainPage )




