// fTok = (x - 32 ) * 5/9 + 273.15
// fToc = (x - 32) * 5/9
// cTok = x + 273.15
// cTof = x + 273.15
// kToc = x-273.15
// kTof = (x - 273.15) * 9/5 + 32


let getDataFromUser = (msg) => prompt(msg)

let temp = getDataFromUser("Enter Your Degree of Temp like 32C ..!")





const fTok = (val)=> (val - 32 ) * 5/9 + 273.15
const fToc = (val)=> (val - 32) * 5/9
const cTok = (val)=> val + 273.15
const cTof = (val)=> val + 273.15
const kToc = (val)=> val-273.15
const kTof = (val)=> (val - 273.15) * 9/5 + 32



let calcTempVal = () =>{
    let tempVal = Number(temp.slice(0,temp.length-1))

    if(isFinite(tempVal)) return tempVal
    else return "error" 
} 


let calcTempType = () =>{
    let tempTypes = ["F","K","C"]
    let myTempType = temp[temp.length-1].toUpperCase();
    if(tempTypes.includes(myTempType)) return myTempType
    else return "error" 
} 







let calcTemp =  () =>{

    let tempType = calcTempType();
    
    let tempVal = calcTempVal();
   
    let result = ""

    if(tempType != "error"){
    switch (tempType) {
        case "F":
             result = `
        The Temperature  of Fahrenheit is ${tempVal}
        The Temperature  of Kelvin is ${fTok(tempVal)}
        The Temperature  of Celsius is ${fToc(tempVal)}

`
        break;
        case "C":
            result = `
            The Temperature  of Celsius is ${tempVal}
            The Temperature  of Kelvin is ${cTok(tempVal)}
            The Temperature  of Fahrenheit is ${cTof(tempVal)}
    
    `
        break;
        case "K":
            result = `
            The Temperature  of Kelvin is ${tempVal}
            The Temperature  of Celsius is ${kToc(tempVal)}
            The Temperature  of Fahrenheit is ${kTof(tempVal)}
    
    `
        break;
    
    }
   


}else{
    result = `
    Error : Check Your Data is Correct 
    Enter Value like That : 32C
        `;
}
return result
}



// If User Press Ok or Cancle in prompt Handel it  
if(temp != null & temp != ""){
    alert(calcTemp(temp)); 
}
