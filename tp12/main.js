window.addEventListener("load", () =>{
    const vectorProvincias = ["Buenos Aires","Ciudad Autonoma de Buenos Aires","Catamarca","Chaco","Chubut","Cordoba","Corrientes","Entre Rios","Formosa","Jujuy","La Pampa","La Rioja","Mendoza","Misiones","Neuquen","Rio Negro","Salta","San Juan","San Luis","Santa Cruz","Santa Fe","Santiago del Estero","Tierra del Fuego","Tucuman"];

    const EstudiantesRegistrados = [];

    const idNombreyApellido = document.querySelector("#idNombreyApellido");
    const idDomicilio = document.querySelector("#idDomicilio");
    const idProvincia = document.querySelector("#idProvincia");
    const BtnAgregar = document.querySelector("#BtnAgregar");
    const BtnMostrar = document .querySelector("#BtnMostrar")
    const idContenedor = document.querySelector("#idContenedor");
    const idContenedor2 = document.querySelector("#idContenedor2")
    const idTbody = document.querySelector("#idTbody");

    console.log(idProvincia);

    idProvincia.innerHTML = "";

    vectorProvincias.forEach((elemento,i) => {
        const option = document.createElement("option");
        option.value = elemento;
        option.textContent = elemento;
        idProvincia.appendChild(option);
    })



    BtnAgregar.addEventListener("click",() => {
        if(idNombreyApellido.value != ""){
            if(idDomicilio.value != ""){
                let ApellidoNombre = idNombreyApellido.value;
                let domicilio = idDomicilio.value;
                let provincia = idProvincia.value;

                console.log(ApellidoNombre,domicilio,provincia)

                //Objeto Literal
                let estudiante = {
                    Aapellido:ApellidoNombre,
                    Adomicilio:domicilio,
                    Aprovincia:provincia
                }
                console.log(estudiante);

                EstudiantesRegistrados.push(estudiante);

                console.log(EstudiantesRegistrados);
                
                let h4 = document.createElement("h4");

                h4.textContent = `${ApellidoNombre} - ${provincia} - ${domicilio}`;

                idContenedor.appendChild(h4);
            }
            else{
                alert("Te falta el domicilio")
            }
        }
        else{
            alert("Te falta el nombre")
        }
    })

    BtnMostrar.addEventListener("click",() =>{
        console.log("nashe")
        idTbody.innerHTML = "";
        EstudiantesRegistrados.forEach((e,i) => {
            let fila = document.createElement("tr");
            let celda1 = document.createElement("td");
            let celda2 = document.createElement("td");
            let celda3 = document.createElement("td");

            celda1.textContent = e.Aapellido;
            celda2.textContent = e.Aprovincia;
            celda3.textContent = e.Adomicilio;

            fila.appendChild(celda1);
            fila.appendChild(celda2);
            fila.appendChild(celda3);

            idTbody.appendChild(fila);
        })
        
    })
})