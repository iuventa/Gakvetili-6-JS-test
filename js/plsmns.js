let plsmns = () => {
    let number = document.getElementById("answer").innerHTML;

    console.log(number);

    if(number > 0){
        document.getElementById("answer").innerHTML = '-'+number;
    }
    else{
        let pirvelisymbolo = number.slice(0, 1);
        console.log(pirvelisymbolo);
        let darcheniliricxvi = number.slice(1, number.length);
        console.log(darcheniliricxvi);
        document.getElementById("answer").innerHTML = darcheniliricxvi;
    }
}
//arrow method
//function method
