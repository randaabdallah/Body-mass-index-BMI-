document.getElementById("result").addEventListener("click",function(){
    var weightValue = document.getElementById("weight").value;
    var lenghtValue = document.getElementById("length").value;
    var bmiValue = weightValue / (lenghtValue*lenghtValue);
    console.log(bmiValue.toFixed(2))
    document.getElementById("bmi").innerHTML = bmiValue.toFixed(2);
    var categoryBmi ; 
    if(bmiValue < 18){
        categoryBmi = "Mild Thickness";
    }
    else if(bmiValue >= 18 && bmiValue <= 24.9){
        categoryBmi = "Normal";
    }
    else if(bmiValue >= 25 && bmiValue <= 29.9){
        categoryBmi = "Over Weight";
    }
    else if(bmiValue >= 30 && bmiValue <= 34.9){
        categoryBmi = "Obesity Class1";
    }
    else if(bmiValue >= 35 && bmiValue <= 39.9){
        categoryBmi = "Obesity Class2";
    }
    else if(bmiValue >= 40){
        categoryBmi = "Extrem Obesity ";
    }
 document.getElementById("textBmi").innerHTML = categoryBmi;
})