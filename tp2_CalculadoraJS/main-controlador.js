let txtNumero1 = document.getElementById("txtNumero1");
let txtNumero2 = document.getElementById("txtNumero2");
let btn = document.getElementById("btn");

let valor1 = txtNumero1.nodeValue; 

console.log(txtNumero1);
console.log(txtNumero2);
console.log(btn);

btn.onclick = function(){
    alert("Click")
    
    let N1 = txtNumero1.value;
    let N2 = txtNumero2.value;

    console.log(N1);
    console.log(N2);

    let resultado = N1 + N2;

    console.log(resultado);

} // cuando me haga click tira el alert



// window.onload = function()
// {
//     alert("GOD")
// } // cuando se termine de cargar la pagina muestra el aviso

// alert ("GOD")
