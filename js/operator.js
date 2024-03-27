function operator(op){
    console.log(op.innerHTML);
    let gamosaxuleba = document.getElementById("answer").innerHTML;
    console.log(gamosaxuleba);


    let bolo = gamosaxuleba[gamosaxuleba.length -1];
    let boloindex = gamosaxuleba.length -1;
    console.log(bolo);

    if(bolo == '%' || bolo == '×' || bolo == '÷' || bolo == '−' || bolo == '+'){
        let ricxvi = gamosaxuleba.slice(0, boloindex);
        let operatori = gamosaxuleba.slice(boloindex, boloindex+1);
        console.log(gamosaxuleba, ricxvi, operatori, op.innerHTML);
        ricxvi += op.innerHTML;
        console.log(gamosaxuleba, ricxvi, operatori, op.innerHTML);
        document.getElementById("answer").innerHTML = ricxvi;
    }  

    gamosaxuleba += op.innerHTML;
    document.getElementById("answer").innerHTML = gamosaxuleba;

}