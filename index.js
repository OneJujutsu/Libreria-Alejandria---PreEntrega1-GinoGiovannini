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

while (true) {
    alert("Lo siento pero no tenemos ese libro disponible, si quiere puede ver nuestra colección");

    productos = prompt("Perfecto, estos son todos los libros que tenemos disponible ahora mismo. ¿Cuál te gustaría llevar? (Manga, Policial, Terror, Fantastico, ninguno)");

    if (productos == "Manga" || productos == "Policial" || productos == "Terror" || productos == "Fantastico") {
        switch (productos) {
            case "Manga":
                let cantidadManga = Number(prompt("¿Cuántas unidades de Manga le gustaría llevar?"));
                total += cantidad(cantidadManga, 2000);
                break;

            case "Policial":
                let cantidadPolicial = Number(prompt("¿Cuántas unidades de Policial le gustaría llevar?"));
                total += cantidad(cantidadPolicial, 4000);
                break;

            case "Terror":
                let cantidadTerror = Number(prompt("¿Cuántas unidades de Terror le gustaría llevar?"));
                total += cantidad(cantidadTerror, 500);
                break;

            case "Fantastico":
                let cantidadFantastico = Number(prompt("¿Cuántas unidades de Fantastico le gustaría llevar?"));
                total += cantidad(cantidadFantastico, 6000);
                break;

            default:
                satisfecho = prompt("¿Está satisfecho con lo que tiene en su carrito o quisiera agregar algo más? (estoy satisfecho) (quisiera agregar algo mas)");
                break;
        }

        if (satisfecho == "estoy satisfecho") {
            alert("Su total a pagar es de: " + total);
            break;
        } else if (satisfecho == "quisiera agregar algo mas") {
            // Continuar con el bucle
        }
    } else if (productos == "ninguno") {
        alert("Entendible que tenga buen día.");
        break;
    }
}


alert("Gracias por su compra");