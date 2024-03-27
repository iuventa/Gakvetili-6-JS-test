function calculate(btn){

    let buttonvalue = btn.innerHTML;
    let answervalue = document.getElementById("answer").innerHTML;
    let gamosvalue = document.getElementById("gamosaxuleba").innerHTML;

    console.log(buttonvalue,answervalue,gamosvalue);

 

    if(answervalue == '0'){
        document.getElementById("answer").innerHTML = "";
    }
    if(gamosvalue == '0'){
        document.getElementById("gamosaxuleba").innerHTML = "";
    }

    document.getElementById("answer").innerHTML += buttonvalue;
    document.getElementById("gamosaxuleba").innerHTML += buttonvalue;

    let answerlength = document.getElementById("answer").innerHTML.length;

    if(answerlength >= 15){
        let gilakebi = document.querySelectorAll(".calculate");

        console.log(gilakebi);
    
        gilakebi.forEach(jondo => {

            jondo.removeAttribute("onclick");

            console.log(jondo);
        });
    }

    console.log(answerlength);

   
}


