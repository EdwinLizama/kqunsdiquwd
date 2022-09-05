const Indumentaria = (name, id, precio, stock) =>{  //clase padre
    this.name = name;
    this.id = id;
    this.precio = precio;
    this.stock = stock;
    return{ name, id, precio, stock };
};
const Camisa = (name, id, precio, stock) =>{ //clase hija
    const prototype = Indumentaria(name, id, precio, stock);
    return Object.assign({},prototype);
}
const Pantalon = (name, id, precio, stock) =>{ //clase hija
    const prototype = Indumentaria(name, id, precio, stock);    //hereda de la clase padre
    return Object.assign({},prototype); //retorna el objeto
}
const Zapato = (name, id, precio, stock) =>{ //clase hija
    const prototype = Indumentaria(name, id, precio, stock);
    return Object.assign({},prototype);
}

let camisa1 = Camisa("camisa", 1, 10, 2); //instancias
let pantalon1 = Pantalon("pantalon", 2, 20, 2);     
let zapato1 = Zapato("zapato", 3, 15, 2);



const tienda = (() =>{  //modulo
    let inventario = [  
        camisa1, pantalon1, zapato1     
    ]

    let carritoCompras = []

    const agregarProducto = (producto) =>{  //agrega producto al carrito
        
        let bool = actualizarInventario(producto)   //actualiza el inventario
        if(bool){   //si hay stock
            carritoCompras.push(producto)   
            alert("Producto agregado")
        }else{
            alert("No hay stock suficiente")
        }
        
    }
    
    const realizarPago = (carrito) =>{  //realiza el pago
        let sum = 0
        carrito.forEach(compra =>{
            sum += compra.precio
            
        })
        return sum;
    }

    const actualizarInventario = (producto) =>{     //actualiza el inventario
        if(producto.stock > 0){
        producto.stock--;
        return true;
        }
        else{
            return false
        }
    }

    return {inventario, carritoCompras, agregarProducto, realizarPago}  //retorna los metodos
})();   

let div1 = document.getElementById("carrito")   //div donde se muestran los productos
let div2 = document.getElementById("stock")  //div donde se muestran los productos del carrito
//caja camisa

//botones
let botonAgregarCamisa = document.getElementById("btn1")    //boton agregar camisa
let botonAgregarPantalon = document.getElementById("btn2")  //boton agregar pantalon
let botonAgregarZapato = document.getElementById("btn3")     //boton agregar zapato   
let botonRealizarPago = document.getElementById("btn4") //boton realizar pago

function mostrar(){ //muestra los productos del carrito
    console.log(tienda.inventario)  
    let arr = tienda.inventario //array de productos
    arr.forEach(producto =>{    //recorre el array
        
        div1.appendChild(cajaCamisa)    //agrega la caja camisa
        for (let index = 0; index < producto.stock; index++) {  //recorre el stock
            if(producto.id == 1){   //si el id es 1
                let cajaCamisa = document.createElement("div")  //crea la caja
                cajaCamisa = setAttribute("id", `camisa${index}`)
                cajaCamisa.setAttribute("class", "camisa")  //le da la clase
                cajaCamisa.innerText = "Camisa" //le da el texto   //agrega la caja camisa
                div1.appendChild(cajaCamisa)
            }
            if(producto.id == 2){   //si el id es 2
                let cajaPantalon = document.createElement("div")    
                cajaPantalon.setAttribute("class", `pantalon${index}`)
                cajaPantalon.innerText = "Pantalon"
                div1.appendChild(cajaPantalon)  //agrega la caja pantalon
            }
            if(producto.id == 3){   //si el id es 3
                let cajaZapato = document.createElement("div")
                cajaZapato.setAttribute("class", `zapato${index}`)
                cajaZapato.innerText = "Zapato"
                div1.appendChild(cajaZapato)    //agrega la caja zapato
            }   
        }
    })
    let arr2 = tienda.carritoCompras    //array de productos del carrito
    arr2.forEach(producto =>{
        for (let index = 0; index < producto.stock; index++) {  //recorre el stock
        if(producto.id == 1){   //si el id es 1
            div2.appendChild(cajaCamisa)    //agrega la caja camisa
            }
            if(producto.id == 2){
            div2.appendChild(cajaPantalon)  //agrega la caja pantalon
            }
            if(producto.id == 3){
            div2.appendChild(cajaZapato)    //agrega la caja zapato
            }
        }
    })
}
mostrar()   //llama a la funcion mostrar



botonAgregarCamisa.addEventListener("click", () =>{  //agrega camisa al carrito
    let objeto = tienda.inventario[0]   //objeto camisa
    tienda.agregarProducto(objeto)  //agrega el objeto al carrito
    div1.innerHTML=''   //limpia el div
    div2.innerHTML=''   //limpia el div
    mostrar()
})
botonAgregarPantalon.addEventListener("click", () =>{   //agrega pantalon al carrito
    let objeto = tienda.inventario[1]   //objeto pantalon
    tienda.agregarProducto(objeto)  //agrega el objeto al carrito
    div1.innerHTML=''
    div2.innerHTML=''
    mostrar()
})
botonAgregarZapato.addEventListener("click", () =>{     //agrega zapato al carrito 
    let objeto = tienda.inventario[2]   //objeto zapato
    tienda.agregarProducto(objeto)
    div1.innerHTML=''
    div2.innerHTML=''
    mostrar()
})
botonRealizarPago.addEventListener("click", () =>{  //realiza el pago
    let pago = tienda.realizarPago(tienda.carritoCompras)   //pago
    alert("El pago es de: " + pago) //muestra el pago
    div2.innerHTML=''

})

