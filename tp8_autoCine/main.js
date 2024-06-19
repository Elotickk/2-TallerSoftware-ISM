


const DevolverCostoComida = (p1,p2)=>{
    return (p1 * p2);
}

const DevolverTotalconDescuento = (importeTotal , AplicaDescuento) =>{
    if(AplicaDescuento){
        return importeTotal - (importeTotal * 10/100);
    }
}

window.onload = function(){
    
    const identradavehiculo = document.querySelector("#identradavehiculo");
    const Idbotonpagar = document.querySelector("#Idbotonpagar");
    const idcalculartotal = document.querySelector("#idcalculartotal");
    const idcalculopersona = document.querySelector("#idcalculopersona");
    const idInputEntradas = document.querySelector("#idInputEntradas");
    const idSelectComidas = document.querySelector("#idSelectComidas");
    const idInputCantidadComidas = document.querySelector("#idInputCantidadComidas");
    const idSelectBebidas = document.querySelector("#idSelectBebidas");
    const idInputCantidadBebidas = document.querySelector("#InputCantidadBebidas");
    const idCheckboxNativa = document.querySelector("#idCheckboxNativa");

    console.log(identradavehiculo, Idbotonpagar, idcalculartotal, idcalculopersona);

    Idbotonpagar.addEventListener("click", () => {
        let costovehiculo = Number(identradacehiculo.value);

        let Entrada = Number(idcalculopersona.value) * 2000;
        Entrada = DevolverCostoEntrada(Number(idInputEntradas.value));

        let Comidas = Number(idSelectComidas.value);
        let CantidadComidas = Number(idInputCantidadComidas.value);
        let CostoComida = DevolverCostoComida(Comidas,CantidadComidas);
        
        let CostoBebidas = Number(idSelectBebidas.value);
        let CantidadBebidas = Number(idInputCantidadBebidas);
        let CostoBebidasTotal = CostoBebidas * CantidadBebidas;

        console.log("costo")

        let Total = costovehiculo + Entrada + CostoComida + CostoBebidasTotal;

        TotalFinal = DevolverTotalconDescuento(Total,idCheckboxNativa.checked);
        

        idcalculartotal.textContent = `El total a pagar: ${Total}`;
    })
}
