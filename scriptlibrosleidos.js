const librosLeidos = []
function agregarLibro(titulo) {
    librosLeidos.push(titulo);
}
function mostrarLibrosLeidos() {
    console.log(
        `Has leido los siguientes libros:
        ${librosLeidos}`
    )
    document.getElementById("result").innerHTML = `Has leido los siguientes libros:
        ${librosLeidos}`
}

agregarLibro("A Game of Thrones");
agregarLibro("A CLash of Kings");
agregarLibro("A Storm of Swords");
agregarLibro("A Feast for Crows");
agregarLibro("A Dance with Dragons");
agregarLibro("The World of Ice and Fire");
agregarLibro("Fire & Blood");
agregarLibro("The Rise of the Dragon");
agregarLibro("The Hedge Knight");
agregarLibro("The Sworn Sword");
agregarLibro("The Mistery Knight");
mostrarLibrosLeidos();

