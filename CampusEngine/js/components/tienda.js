//script funcionalidad de carrito y tienda
import { Inventario } from "../app/bd/inventario.js";
import { Producto } from "../app/productoCafeteria.js";
let productosComprados = [];
let contadorProducto = document.querySelector('#contarProducto');


export class TiendaMainPage extends HTMLElement{
    constructor(){
        super();
              //localStorage.removeItem("Productos")
        this.render();
        this.evenBtnPapas();
        this.evenBtnPastel();
        this.evenBtnCafe();
        this.evenMostrarCarrito();
      
        if(localStorage.getItem("Productos") != null){
            productosComprados = JSON.parse(localStorage.getItem("Productos"));
        }
    }

render(){

    this.innerHTML = /*html*/ `
    
    <section>
    <h1 class="first-message">Cafeteria Virual</h1>
    <p class="homepage">Seccion compra</p>
</section>
<section>
    <h3 class="first-message">Catálogo</h3>

</section>


<div class="products">

   <div class="carts">
       <img src="../images/papasmargarita.jpg" alt="">
       <p>Papas</p>
       <p>2000$</p>

       <div class="pie"> 
        <a href="#"  id="btnPapas" name="0">Añadir al carrito</a>
           
       </div>
   </div>

   <div class="carts">
       <img src="../images/Pastel-de-Pollo7.jpg" alt="">
       <p>Pasteles</p>
       <p>2300$</p>

       <div class="pie"> 
        <a href="#" id="btnPastel" name="1">Añadir al carrito</a>
           
       </div>
   </div>

   <div class="carts">
       <img src="../images/cafe.jpg" alt="">
       <p>Cafe</p>
       <p>800$</p>

       <div class="pie"> 
        <a href="#" id="btnCafe" name="2">Añadir al carrito</a>
           
       </div>
   </div>

</div>`
}


evenBtnPapas(){
   

    let btnPapas = document.querySelector('#btnPapas')
    btnPapas.addEventListener('click', (e) => {
      
        let elemento =  Inventario.filter(productoId => productoId.id == e.target.name)

        
        let producto = new Producto(elemento[0].id,elemento[0].nombre,elemento[0].costo,new Date())
        
        
          productosComprados.push(producto);
          localStorage.setItem("Productos",JSON.stringify(productosComprados))  
          let productoArray =  productosComprados.filter(elementId => elementId._idProducto == 0)
         
          this.crearModal(productoArray)

         

    })
    
}


evenBtnPastel(){
   
    let btnPastel = document.querySelector('#btnPastel')
    btnPastel.addEventListener('click', (e) => {
     
        let elemento =  Inventario.filter(productoId => productoId.id == e.target.name)

        
        let producto = new Producto(elemento[0].id,elemento[0].nombre,elemento[0].costo,new Date())
        
          productosComprados.push(producto);
          localStorage.setItem("Productos",JSON.stringify(productosComprados))  
          let productoArray =  productosComprados.filter(elementId => elementId._idProducto == 1)
         
          this.crearModal(productoArray);

      

    })
    
}


evenBtnCafe(){
   
    let btnPastel = document.querySelector('#btnCafe')
    btnPastel.addEventListener('click', (e) => {
   
        let elemento =  Inventario.filter(productoId => productoId.id == e.target.name)

        
        let producto = new Producto(elemento[0].id,elemento[0].nombre,elemento[0].costo,new Date())
        
          productosComprados.push(producto);
          localStorage.setItem("Productos",JSON.stringify(productosComprados))  
          let productoArray =  productosComprados.filter(elementId => elementId._idProducto == 2)
         
          this.crearModal(productoArray);



    })
    
}

evenMostrarCarrito(){

    document.querySelector('#carrito').addEventListener('click', e =>{

    document.querySelector('#modalCarrito').style.display ='block';
   


  

   

   })
}



asignarDeleteBoton(){
    let divPapas =   document.querySelector('#modalPapas')
    let divPastel =   document.querySelector('#modalPastel')
    let divCafe=   document.querySelector('#modalCafe')

    let boton = document.createElement('a');
    boton.type ='button';
    boton.textContent = 'X';
    boton.className = 'delete-product';

    if (!document.contains(divPapas.querySelector('.delete-product'))){
            boton.id = '0'
             console.log('Evento Papas BORRAR')
                divPapas.append(boton)
                this.evenBorrarCarrito(divPapas);
    }else if(!document.contains(divPastel.querySelector('.delete-product'))){
        boton.id = '1'
            console.log('Evento Pastel BORRAR')
        divPastel.append(boton)
        this.evenBorrarCarrito(divPastel);
    
    
    }
    else if(!document.contains(divCafe.querySelector('.delete-product'))){

        boton.id = '2'
        console.log('Evento cafe BORRAR')
        divCafe.append(boton)
        this.evenBorrarCarrito(divCafe);

    }
     
 
 
  


}

crearModal(productoArray){

 


contadorProducto.innerHTML = productosComprados.length

let divModal = document.querySelector(this.selectDivModal(productoArray[0]._idProducto))



let modalHtml = /*html*/
`               
            <div id="imgProducto">
            
            </div>
                    <div class="item">

                                <div class="item-content">
                                    
                                    <p>${productoArray[0]._nombreProducto}</p>
                                    <p>${productoArray[0]._costoProducto}</p>
                                    <p>cantidad:${productoArray.length}</p>
                                    
                                </div>
                            
                            
                    </div>
                    
                
            
`;






let image = document.createElement("img");

        if(productoArray[0]._idProducto == 0){
            image.src ='../images/papasmargarita.jpg';
            
        }else if(productoArray[0]._idProducto == 1){
            image.src ='../images/Pastel-de-Pollo7.jpg';
            console.log('holaaa 1')

        }
        else if(productoArray[0]._idProducto == 2){
            image.src ='../images/coffee.jpg'
            console.log('holaaa 2')
        }


 divModal.style.display= 'block';

 divModal.innerHTML = modalHtml;
 let total = this.totalCompra();
 let divImg = divModal.querySelector('#imgProducto')
 let totalH4  = document.querySelector('#totalCuenta') 
 totalH4.innerHTML = "TOTAL:" +   total
 divImg.appendChild(image);
 this.asignarDeleteBoton()




}

totalCompra(){
let total = 0
    productosComprados.forEach(elemento =>{

        total +=  elemento._costoProducto

    })

        return total

}

selectDivModal(idProducto){


    
    switch(idProducto){

        case 0:
            return '#modalPapas';
            break;
        case 1: 
            return '#modalPastel';
            break;
        case 2:
            return '#modalCafe';
            break;
        default:
            return '#modalCarrito';
            break
    }


}




evenBorrarCarrito(divModal){
    if (document.contains(divModal.querySelector('.delete-product'))){
            
        
       
        divModal.querySelector('.delete-product').addEventListener('click',(e) => { 
            console.log(divModal)        
            productosComprados.some((element,index)=>{
            if(element._idProducto == e.target.id){
                
      
                    productosComprados.splice(index,1)

                    localStorage.setItem('Productos',JSON.stringify(productosComprados))
                 

                    if(productosComprados.length != 0){
                        console.log(productosComprados.length)
                    let productoArray =  productosComprados.filter(elementId => elementId._idProducto == parseInt(e.target.id))
                    productoArray.length != 0 ? this.crearModal(productoArray): document.querySelector(this.selectDivModal(parseInt(e.target.id))).style.display ='none'
                  
                    }else{

                        for(let i = 0 ; i < 4;i++){
                          
                        document.querySelector(this.selectDivModal(i)).style.display ='none';
                        document.querySelector('#totalCuenta').innerHTML= '';
                        
                        contadorProducto.innerHTML = 0
                        }
                        
                    }
                    return true;

                    
                    
            };


     
       })
   })


    }

}

      

}






customElements.define('tienda-main-page',TiendaMainPage);

