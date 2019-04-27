function triangle(){
    var base= parseInt(getElementById("base").valueOf);
    var hypotenuse = parseInt(getElementById("hypotenuse").valueOf);
    var height = parseInt(getElementById("height").valueOf);
    var answer = ("answer");
    if(hypotenuse === height && hypotenuse === base && base === height){
    /*alert("Equilateral");*/
    }
    else if(base === hypotenuse || hypotenuse === height || base === height){
    /*alert("Isosceles");*/
    }
    else if((height + hypotenuse) <= base || (hypotenuse + base) <= height || (base + height) <= hypotenuse) {
    /*alert("Not a definite triangle");*/
    }
    else{
    alert("Scalene");
    }
}
    