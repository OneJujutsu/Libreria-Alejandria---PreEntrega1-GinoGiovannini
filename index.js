let total = 0;
let cantidaddeproductos


let bienvenido = prompt("Bienvenido a la librería de Alejandría, desea comprar algo para leer?   ( SI / NO )");

const cantidad = (cant, precio) => {
    return cant * precio
}


while (bienvenido != "si" && bienvenido != "SI" && bienvenido != "no" && bienvenido != "NO") {
    alert("por favor ingresa una de las opciones, si o no");
    bienvenido = prompt("Bienvenido a la librería de Alejandría, desea comprar algo para leer?   ( Si / NO )");
}

if (bienvenido == "si" || bienvenido == "SI") {
    productos = prompt("Perfecto estos son todos los libros que tenemos disponible ahora mismo, cual te gustaria llevar           Manga, Policial, Terror, Fantasticos    ninguno");
}else if (bienvenido == "no" || bienvenido == "NO") {
    final = alert("Entendible que tenga buen dia.");
}

while (productos != "Manga" || productos != "Policial" || productos != "Terror" || productos != "Fantastico" || productos != "ninguno") {
    alert("Lo siento pero no tenemos ese libro disponible, si quiere puede ver nuestra coleccion");

    productos = prompt("Perfecto estos son todos los libros que tenemos disponible ahora mismo, cual te gustaria llevar           Manga, Policial, Terror, Fantasticos    ninguno");
    if (productos == "Manga" || productos == "Policial" || productos == "Terror" || productos == "Fantastico"){
        switch (productos) {
            case Manga:
                cantidaddeproductos = Number(prompt("Cuantas unidades de Manga le gustaria llevar?"))
                total += cantidad(cantidaddeproductos, 2000)
                break;

            case Policial:
                cantidaddeproductos = Number(prompt("Cuantas unidades de Policial le gustaria llevar?"))
                total += cantidad(cantidaddeproductos, 4000)
                break;

            case Terror:
                cantidaddeproductos = Number(prompt("Cuantas unidades de Terror le gustaria llevar?"))
                total += cantidad(cantidaddeproductos, 500)
                break;

            case Fantastico:
                cantidaddeproductos = Number(prompt("Cuantas unidades de Fantastico le gustaria llevar?"))
                total += cantidad(cantidaddeproductos, 6000)
                break;

            default:
                satisfecho = prompt ("Está satisfecho con lo que tiene en su carrito o quisiera agregar algo más          (estoy satisfecho)  (quisiera agregar algo mas)")
                break;
                
        }if(satisfecho == "estoy satisfecho"){
            alert("su total a pagar es de :" + total)
        }else if (satisfecho == "quisiera agregar algo mas"){
            productos = prompt("Perfecto estos son todos los libros que tenemos disponible ahora mismo, cual te gustaria llevar           Manga, Policial, Terror, Fantasticos    ninguno");
        }
    }else if (productos == "ninguno"){
        final = alert("Entendible que tenga buen dia.");
    }
}



//alert("Gracias por su compra");