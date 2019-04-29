function triangle() {
    var base= parseInt(getElementById("base").value);
    var hypotenuse = parseInt(getElementById("hypotenuse").value);
    var height = parseInt(getElementById("height").value);
    var text;
    var sides = [base ,hypotenuse,height];
    if (base <= 0 || hypotenuse <=0 || height <= 0){
    text = "positive intergers";
    }
   else if(hypotenuse === height && hypotenuse === base && base === height){
    text = "Equilateral";
    }
    else if(base === hypotenuse || hypotenuse === height || base === height){
    text = "Isosceles";
    }
    else if((height + hypotenuse) <= base || (hypotenuse + base) <= height || (base + height) <= hypotenuse) {
    text = "Not a definite triangle";
    }
    else if(base !== hypotenuse || hypotenuse !== height || height !== base){
    text ="scalene";
    }
    else{
        text = "error"
    }
    document.getElementById("triangles").innerHTML = text
}
    