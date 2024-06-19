window.addEventListener("load", () => {
    console.log("la aplicacion esta andando");

    const btnGenerar100 = document.querySelector("#btnGenerar100");
    const idDivBotones = document.querySelector("#idDivBotones");
    const btnAsignarEventos = document.querySelector("#btnAsignarEventos");
    const btnCrearEventos = document.querySelector("#btnCrearEventos");

    console.log(btnGenerar100);
    console.log(idDivBotones);

    btnGenerar100.addEventListener("click", () => {
        BotonosDinamicos = "";

        console.log("aqui tengo que generar 100 botones dinamicos");
        // for (let i = 1; i <= 100; i++) {
        //     const nuevoBoton = document.createElement("button");
        //     nuevoBoton.textContent = `Botón ${i}`;
        //     idDivBotones.appendChild(nuevoBoton);
        // }
        for (let i = 0; i <= 100; i++) {
            BotonosDinamicos = BotonosDinamicos + `<input type="button" value="Boton ${i}"/>`;
        }
        idDivBotones.innerHTML = BotonosDinamicos
    })



    btnAsignarEventos.addEventListener("click", () => {
        let VectorDeBotones = document.querySelectorAll("input");
        console.log(VectorDeBotones);

        VectorDeBotones.forEach((elemento, indice) => {
            console.log(elemento);

            elemento.addEventListener("click", () => {
                console.log(`Soy el boton dinamico ${indice}`);
            })
        })
    })

    btnCrearEventos.addEventListener("click",()=>{
        console.log("god")

        for(let i = 0; i<10; i++){
            let BotonosDinamicos = document.createElement("input");

            BotonosDinamicos.type = "button";
            BotonosDinamicos.value = `Soy un boton dinamico generado por createElement ${i}`;+

            console.log(BotonosDinamicos);

        }
    })

})