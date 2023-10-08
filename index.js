inputTxt = document.getElementById("input-txt")
inputBtn = document.getElementById("input-btn")
lengthOutputBox = document.getElementById("length-box")
volumeOutputBox = document.getElementById("volume-box")
massOutputBox = document.getElementById("mass-box")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

inputBtn.addEventListener("click", function(){
    lengthOutputBox.innerHTML = doTheMath("meters", "feet", meterToFeet)
    volumeOutputBox.innerHTML = doTheMath("liters", "gallons", literToGallon)
    massOutputBox.innerHTML = doTheMath("pounds", "kilos", kiloToPound)
})

function doTheMath(unit1, unit2, conversionRatio){
    let baseValue = inputTxt.value
    let conversionOutput = `${baseValue} ${unit1} = ${(baseValue * conversionRatio).toFixed(3)} ${unit2} | ${baseValue} ${unit2} = ${(baseValue / conversionRatio).toFixed(3)} ${unit1}`
    return conversionOutput
}

///// ONLY NUMBERS IN TEXT FIELD! /////
document.getElementById("input-txt").onkeypress = function(event) {
    const keyCode = event.keyCode || event.which;
    if (keyCode < 48 || keyCode > 57) {
      event.preventDefault()
    }
  }


///// OLD CODE BEFORE THE inputBtn.addEventListener REFACTOR BELOW /////

// inputBtn.addEventListener("click", function(){
//     let baseValue = inputTxt.value
//     lengthOutputBox.innerHTML = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters`
//     volumeOutputBox.innerHTML = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue / literToGallon).toFixed(3)} liters`
//     massOutputBox.innerHTML = `${baseValue} pounds = ${(baseValue * kiloToPound).toFixed(3)} kilos | ${baseValue} kilos = ${(baseValue / kiloToPound).toFixed(3)} pounds`
// })