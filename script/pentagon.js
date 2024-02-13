function calculatePentagonArea(){
    const periter = getInputValueById("pentagon-p")

    const apothem = getInputValueById("pentagon-a")

    const area = 0.5 * periter * apothem;

    setInnerTextById('pentagon-area', area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = inputField.value;
    const inputValue = parseFloat(inputFieldText);
    return inputValue;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}