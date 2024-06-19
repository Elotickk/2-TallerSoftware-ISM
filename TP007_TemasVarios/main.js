window.addEventListener("load",function(){
    console.log("app load")

    const idtxtPrecioVehiculo = document.querySelector("#idtxtPrecioVehiculo");

    const idtextValorEntrega = document.querySelector("#idtxtValorEntrega");

    const idBtnFinanciar = document.querySelector("#idBtnFinanciar");

    const idtxtCuotas = document.querySelector("#idtxtCuotas")

    const idResultado = document.querySelector("#idResultado")

    console.log(idtxtPrecioVehiculo,idtextValorEntrega,idBtnFinanciar,idResultado);

    idBtnFinanciar.addEventListener("click",()=>{

        let precioVehiculo = Number(idtxtPrecioVehiculo.value);
        let valorEntrega = Number(idtextValorEntrega.value);
        let cuota = Number(idtxtCuotas.value);

        console.log(precioVehiculo,valorEntrega);
        let financiacion = 0;
        let valorCuota = 0;
        let diferencia = precioVehiculo - valorEntrega;

        if(valorEntrega > precioVehiculo){

            if(cuota === 1){
            financiacion = diferencia + (diferencia * 285)/100;
            valorCuota = financiacion / 1 ;

                if((cuota > 1) && (cuota <= 3)){

                    financiacion = diferencia + (diferencia * 300)/100;
                    valorCuota = financiacion / cuota;

                    if((cuota >= 4) && (cuota <= 6)){
                        
                        financiacion = diferencia + (diferencia * 320)/100;
                        valorCuota = financiacion / cuota;
                    }
                }
            }
            else{
                alert("El valor de la entrega es mayor o igual al precio del vehiculo")
            }
        }
        valorCuota.toFixed();
        console.log("diferencia=" , diferencia);
        console.log("Financiacion = ", financiacion);
        console.log("Valor Cuota = ",valorCuota.toFixed(2));
    }
    )
}
);



