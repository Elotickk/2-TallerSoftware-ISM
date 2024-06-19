
function DeterminarGenero(isMan,isWoman,isUndefined){

    // console.log(isMan,isWoman,isUndefined);
    // if(typeof(isMan)!== Boolean){
    //     return 0;
    // }
    // if(typeof(isWoman)!== Boolean){
    //     return 0;
    // }
    // if(typeof(isUndefined)!== Boolean){
    //     return 0;
    // }

    if(isMan){
        return 1;
    }
    else{
        if(isWoman){
        return 2;
        }
        else{
            if(isUndefined){
            return 3;
            }
            else{
                alert("No definio ninguno")
            }
        }
    }
}

function ClickBotonGenero(){
    
};

window.onload = function(){
    //alert("Good")
    let idRadVaron = document.getElementById("idRadVaron");
    let idRadMujer = document.getElementById("idRadMujer");
    let idRadNoDefinido = document.getElementById("idRadNoDefinido");

    console.log(idRadMujer,idRadVaron,idRadNoDefinido);
    
    

    btnDetGenero.onclick = function(){
        console.log("CLick");

        let resultado = DeterminarGenero(idRadVaron,idRadMujer,idRadNoDefinido);
        alert (resultado);
    }
};