document.getElementById('convert').onclick=convertTemprature;
document.getElementById('clear').onclick=clearForm;
function convertTemprature(){
    let val=document.getElementById("input-value");
    let input=document.getElementById("input");
    let output=document.getElementById("output");
    let result=document.getElementById("result");

    let inputvalue=input.value;
    let outputvalue=output.value;
     
    if(inputvalue==="Celsius" && outputvalue==="Fahrenheit"){
        result.value=Number((val.value*9)/5)+32;
    }
    else if(inputvalue==="Celsius" && outputvalue==="Kelvin"){
        result.value=Number(val.value)+273.15;
    }
    else if(inputvalue==="Celsius" && outputvalue==="Celsius"){
        result.value=val.value;
    }

    if(inputvalue==="Fahrenheit" && outputvalue==="Celsius"){
        result.value=Number((val.value-32)*5)/9;
    }
    else if(inputvalue==="Fahrenheit" && outputvalue==="Kelvin"){
        result.value=Number((val.value-32)*5)/9+273.15;
    }
    else if(inputvalue==="Fahrenheit" && outputvalue==="Fahrenheit"){
        result.value=val.value;
    }

    if(inputvalue==="Kelvin" && outputvalue==="Celsius"){
        result.value=Number(val.value)-273.15;
    }
    else if(inputvalue==="Kelvin" && outputvalue==="Fahrenheit"){
        result.value=Number((val.value-273.15)*9/5)+32;
    }
    else if(inputvalue==="Kelvin" && outputvalue==="Kelvin"){
        result.value=val.value;
    }   
}
function clearForm()
{
    document.getElementById('result').value='';
    document.getElementById('input-value').value='';
}