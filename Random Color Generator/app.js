// Function to generate random HSL color
function getRandomColor() {
    return 'hsl(' + ((Math.random() * 30) - 15 + 30) + ',' + (Math.floor(Math.random() * 25) + 50) + '%,' + (Math.floor(Math.random() * 20) + 50) + '%)';
}

// Function to apply random background color to divs every second
setInterval(() => {
    for (let i = 1; i <= 4; i++) {
        document.getElementById('div' + i).style.backgroundColor = getRandomColor();
    }
}, 1000);

// Function to update background color, RGB, and HEX values
function updateColor() {
    let r = red.value,
        g = green.value,
        b = blue.value,
        color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.body.style.backgroundColor = color;
    box.value = color;
    hexCode.value = rgbToHex(parseInt(r), parseInt(g), parseInt(b));
}

// Event listeners for RGB sliders
red.addEventListener('input', updateColor);
green.addEventListener('input', updateColor);
blue.addEventListener('input', updateColor);

// Function to convert RGB to HEX
function rgbToHex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// Function to copy RGB value to clipboard
function copyRgbValue() {
    let val = box.value,
        temp = document.createElement('input');
    document.body.appendChild(temp);
    temp.setAttribute('value', val);
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
    alert('RGB value copied to clipboard: ' + val);
}

// Event listener for copying RGB value
copyBtn.addEventListener('click', copyRgbValue);

// Function to copy HEX value to clipboard
function copyHexValue() {
    let val = hexCode.value,
        temp = document.createElement('input');
    document.body.appendChild(temp);
    temp.setAttribute('value', val);
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
    alert('Hex value copied to clipboard: ' + val);
}

// Event listener for copying HEX value
copybtn.addEventListener('click', copyHexValue);

// Initial update
updateColor();
