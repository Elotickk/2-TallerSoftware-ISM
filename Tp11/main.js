class Suma{

    Numero1 = 0;
    Numero2 = 0;
    #Resultado = 0;

    constructor(n1,n2){
        this.Numero1 = n1;
        this.Numero2 = n2;
    }

    getNumero1(){
        return (this.Numero1);
    }

    getNumero2(){
        return (this.Numero2);
    }
    
    setNumero1(n){
        this.Numero1 = n;
        this.Sumar();

    }

    setNumero2(n){
        this.Numero1 = n;
        this.Sumar();
    }

    Sumar(){
        this.#Resultado = this.Numero1 + this.Numero2;
        return this.#Resultado;
    }
    Restar(){
        this.#Resultado = this.Numero1 - this.Numero2;
        return this.#Resultado;
    }
    Multi(){
        this.#Resultado = this.Numero1 * this.Numero2;
        return this.#Resultado;
    }
    Division(){
        this.#Resultado = this.Numero1 / this.Numero2;
        return this.#Resultado;
    }

    dibujarCalculadora(tituloVista){
        let fragmento = document.createDocumentFragment();

        let tituloH2 = document.createElement("h2");
        tituloH2.textContent = tituloVIsta;

        let label1 = document.createElement("label");
        label1.textContent = "ingrese numero1";

        let input1 = document.createElement("input")
        input1.type = "number";
        input1.placeholder = "ingrese su numero";

        let label2 = document.createElement("label");
        label2.textContent = "ingrese numero2";

        let input2 = document.createElement("input")
        input2.type = "number";
        input2.placeholder = "ingrese su numero";



        

    }
}

window.addEventListener("load",() => {
    const idInputNumero1 = document.querySelector("#idInputNumero1");
    const idInputNumero2 = document.querySelector("#idInputNumero2");
    const BtnCalcularSuma = document.querySelector("#BtnCalcularSuma");
    const BtnCalcularResta = document.querySelector("#BtnCalcularResta");
    const BtnCalcularMulti = document.querySelector("#BtnCalcularMulti");
    const BtnCalcularDivision = document.querySelector("#BtnCalcularDivision");
    const idResultado = document.querySelector("#idResultado");

    console.log(idInputNumero1);

    BtnCalcularSuma.addEventListener("click",() =>{
        
        let Numero1 = Number(idInputNumero1.value);
        let Numero2 = Number(idInputNumero2.value);

        console.log(Numero1);

        let objetoSuma1 = new Suma(Numero1,Numero2);

        idResultado.textContent = `Suma: ${objetoSuma1.Sumar()} `;
        }
    )
    BtnCalcularResta.addEventListener("click",() =>{
        
        let Numero1 = Number(idInputNumero1.value);
        let Numero2 = Number(idInputNumero2.value);

        console.log(Numero1);

        let objetoSuma1 = new Suma(Numero1,Numero2);

        idResultado.textContent = `Resta: ${objetoSuma1.Restar()} `;
        }
    )
    BtnCalcularMulti.addEventListener("click",() =>{
        
        let Numero1 = Number(idInputNumero1.value);
        let Numero2 = Number(idInputNumero2.value);

        console.log(Numero1);

        let objetoSuma1 = new Suma(Numero1,Numero2);

        idResultado.textContent = `Multiplicacion: ${objetoSuma1.Multi()} `;
        }
    )
    BtnCalcularDivision.addEventListener("click",() =>{
        
        let Numero1 = Number(idInputNumero1.value);
        let Numero2 = Number(idInputNumero2.value);

        console.log(Numero1);

        let objetoSuma1 = new Suma(Numero1,Numero2);

        idResultado.textContent = `Division: ${objetoSuma1.Division()} `;
        }
    )
}
)




