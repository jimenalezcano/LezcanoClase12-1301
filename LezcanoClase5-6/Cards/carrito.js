
class Carrito {
    //anadir producto a carrito
   comprarProducto(e){
       e.preventDefault();
       if(e.target.classList.contains("btn-cargar-carrito"));
         const producto = target.parentElement.parentElement;
         //this.leerDatosProducto(producto);
         console.log(producto);
   }
  
   leerDatosProducto(producto){
       const infoDeProducto = {
           imagen : producto.querySelector("img").src,
           titulo : producto.querySelector("h5").textContent,
           precio : producto.querySelector("card-text").textContent,
           id : producto.querySelector("a").getAttribute("data-id"),
           cantidad : 1
       }
      this.insertarCarrito(infoDeProducto);
   }

   insertarCarrito(producto){
       const row = document.createElement("tr");
       row.innerHTML = `
         <td> 
              <img src="${producto.imagen}" width=100>
         </td>      
         <td>${producto.titulo} </td> 
         <td>${producto.preio}</td>
         <td>
              <a href = "#" class="eliminar-producto fas fa-times- circle" data-id = "${producto.id}"></a>
         </td>
       `;

      listaProductos.appendChild(row); 
   }

   eliminarProducto(e){
       e.preventDefault();
       let producto , productoID;
       if(e.target.classList.contains("borrar-producto")){
           e.target.parentElement.parentElement.remove();
           producto = e.target.parentElement.parentElement;
           productoID = producto.querySelector("a").getAttribute("data-id");
       }
   }

   vaciarCarrito(e){
       e.preventDefault();
       while(listaProductos.firtsChild){
           listaProductos.removeChild(listaProductos.firtsChild);
       }
       return false;
   }
}


