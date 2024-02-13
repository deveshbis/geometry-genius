function calculatedTriangleArea(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)
    console.log(base);

    const triangleheightInput = document.getElementById('triangle-height');
    const triangleheightText = triangleheightInput.value;
    const height = parseFloat(triangleheightText)
    console.log(height);


    const area = 0.5 * base * height;
    console.log("Area of the triangle", area);


    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}