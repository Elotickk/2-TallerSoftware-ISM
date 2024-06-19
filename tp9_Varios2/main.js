window.onload = function(){
    console.log("running");
    const button1 = document.querySelector("#btn1")

    document.addEventListener("click" , (e)=>{
        console.log("----------------------------")
        console.log("etiqueta: ") + e.target;
        console.log("TagName: " + e.target.tagName);
        console.log("tipo: " + e.target.type);
        console.log("id: " + e.target.id);
        console.log("TextContent " + e.target.textContent);
        console.log("Value " + e.target.value);
        // console.log("tipo: " + e.target.type);
        // console.log("tipo: " + e.target.type);

        button1.addEventListener("click" , (e)=>{
            console.log("me estan haciendo click")
            alert("Nashi");
            e.stopPropagation;
        })
    })
}