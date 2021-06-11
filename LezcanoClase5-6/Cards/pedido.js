const carro = new Carrito (); 
  const carrito = $("#carrito");
 
  //declaro variable para div que tiene lista de productos
  const productos = $("#lista-productos");
 

  const listaProductos = document.querySelectorAll("#lista-carrito")

  //declaro variable para vaciar carrito
  const vaciarCarrito = $("#vaciar-carrito");


  cargarEventos()

 //function para agregar event "click"
  function cargarEventos(){
      productos.addEventListener("click", (e) => {carro.comprarProducto(e)});


     carrito.addEventListener("click", (e) =>{carro.eliminarProducto(e)});  
 

    vaciarCarrito.addEventListener('click', (e) => {carro.vaciarCarrito(e)});
 }
