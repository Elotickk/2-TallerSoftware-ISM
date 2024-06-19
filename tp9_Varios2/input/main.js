window.addEventListener("load",()=>{
    const idDatosIngresados = document.querySelector("#idDatosIngresados")

    idDatosIngresados.addEventListener("focus",(e)=>{
        console.log("focus: " + e.target.value)
        })

    idDatosIngresados.addEventListener("input",(e)=>{
        console.log("input: " + e.target.value)
    })

    // apenas presiono la tecla y antes de soltarla
    idDatosIngresados.addEventListener("keydown",(e)=>{
        console.log("keydown: " + e.key)
    })

    // cuando suelta la tecla
    idDatosIngresados.addEventListener("keyup",(e)=>{
        console.log("keyup: " + e.key)
    })
    
    // cuando hay un cambio
    idDatosIngresados.addEventListener("change",(e)=>{
        console.log("change: " + e.target.value)
    })

    // Se pierde el foco
    idDatosIngresados.addEventListener("blur",(e)=>{
        console.log("blur: " + e.target.value)
    })

    // No se puede pegar el input
    idDatosIngresados.addEventListener("paste",(e)=>{
        console.log("paste pegamos texto - " + e.target.value)
    })

    // No se puede copiar
    idDatosIngresados.addEventListener("copy",(e)=>{
        console.log("copy copiamos algo " + e.target.value)
    })

    // No se puede cortar 
    idDatosIngresados.addEventListener("cut",(e)=>{
        console.log("cute cortamos algo " + e.target.value)
    })




})