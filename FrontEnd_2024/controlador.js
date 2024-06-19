
import vectorContribuyentes from "./VectorContribuyentes_10000.js";
//import vectorContribuyentes from "./VectorContribuyentes_25000.js";
//import vectorContribuyentes from "./VectorContribuyentes_50000.js";
//import vectorContribuyentes from "./VectorContribuyentes_100000.js";


window.addEventListener("load",()=>{

    console.log("andando");

    const idTextDenominacion = document.querySelector("#idTextDenominacion");
    const idBtnSearch = document.querySelector("#idBtnSearch");
    const idTableBody = document.querySelector("#idTableBody");
    const idBtnDelete = document.querySelector("#idBtnDelete")


    const idPadronAFIPId = document.querySelector("#idPadronAFIPId");
    const idPadronAFIPCUIT = document.querySelector("#idPadronAFIPCUIT");
    const idPadronAFIPDenominacion = document.querySelector("#idPadronAFIPDenominacion");
    const idPadronAFIPGanancias = document.querySelector("#idPadronAFIPGanancias");

    console.log(idPadronAFIPId,idPadronAFIPCUIT,idPadronAFIPDenominacion,idPadronAFIPGanancias);

    idBtnSearch.addEventListener("click",()=>{

        const denominacion = idTextDenominacion.value;

        if(denominacion.length != 0){
            fnbuscarContribuyentes(vectorContribuyentes,denominacion);
        }
        else{
            alert("Ingrese un valor")
        }
    })
    

    idBtnDelete.addEventListener("click",()=>{
        alert("eliminar datos");

        let CheckDeLaTabla = document.querySelectorAll("input[type='checkbox']");

        console.clear();

        console.log(CheckDeLaTabla);

        CheckDeLaTabla.forEach((element,index)=>{
            if(element.checked){
                console.log(element);
            }
        })
    })

    // console.log(idBtnSearch,idTextDenominacion,idTableBody);
    //console.log(vectorContribuyentes);

})

const fnbuscarContribuyentes = (vectorContribuyentes,denominacion)=>{
    // console.log(vectorContribuyentes,denominacion);
    idTableBody.innerHTML = "";

    vectorContribuyentes.forEach((element,index)=>{
        if(element.PadronAFIPDenominacion.includes(denominacion.toUpperCase())){
            console.log(element);

            let Fila = document.createElement("tr");

            let Celda1 = document.createElement("td");
            Celda1.textContent = element.PadronAFIPId;

            let Celda2 = document.createElement("td");
            Celda2.textContent = element.PadronAFIPCUIT;

            let Celda3 = document.createElement("td");
            Celda3.textContent = element.PadronAFIPDenominacion;

            let Celda4 = document.createElement("td");

            let botonVer = document.createElement("input");
            botonVer.type = "button";
            botonVer.value = "Ver datos !";
            botonVer.addEventListener("click",()=>{
                console.log(element);

                idPadronAFIPId.value = element.PadronAFIPId;
                idPadronAFIPCUIT.value = element.PadronAFIPCUIT;
                idPadronAFIPDenominacion.value = element.PadronAFIPDenominacion;
                idPadronAFIPGanancias.value = element.PadronAFIPImpGanancias;
            })

            Celda4.appendChild(botonVer);

            let Celda5 = document.createElement("td");

            let checkElegir = document.createElement("input");
            checkElegir.type = "checkbox";
            Celda5.appendChild(checkElegir);


            Fila.appendChild(Celda1);
            Fila.appendChild(Celda2);
            Fila.appendChild(Celda3);
            Fila.appendChild(Celda4);
            Fila.appendChild(Celda5);

            idTableBody.appendChild(Fila);

            console.log(Fila);
        }
    })
}