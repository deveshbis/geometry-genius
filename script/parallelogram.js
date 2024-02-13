function parallelogramInput(){

    const base = getInputValueById('parallelogram-base');

    const height = getInputValueById('parallelogram-height');

    const area = base * height;
    console.log("Area of the Parallelogram: ", area);


    const areaSpan = document.getElementById('parallelogram-area');
    areaSpan.innerText = area;
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = inputField.value;
    const inputValue = parseFloat(inputFieldText);
    return inputValue;
}