function calculateRectangleArea(){
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
    console.log(length);

    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    console.log(width);


    const area = length * width;
    console.log("Area of the Ractangle: ", area);

    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;

}