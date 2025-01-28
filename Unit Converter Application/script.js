const units = {
    length: ['meters', 'kilometers', 'miles'],
    weight: ['grams', 'kilograms', 'pounds'],
    temperature: ['celsius', 'fahrenheit', 'kelvin']
};

function populateUnits() {
    const unitType = document.getElementById('unitType').value;
    const inputUnit = document.getElementById('inputUnit');
    const outputUnit = document.getElementById('outputUnit');
    
    inputUnit.innerHTML = '';
    outputUnit.innerHTML = '';
    
    units[unitType].forEach(unit => {
        const option1 = document.createElement('option');
        option1.value = unit;
        option1.innerText = unit;
        inputUnit.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = unit;
        option2.innerText = unit;
        outputUnit.appendChild(option2);
    });
}

function convert() {
    const unitType = document.getElementById('unitType').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    const inputValue = parseFloat(document.getElementById('inputValue').value);

    if (isNaN(inputValue)) {
        alert("Please enter a valid number.");
        return;
    }

    let convertedValue = 0;

    if (unitType === 'length') {
        if (inputUnit === 'meters' && outputUnit === 'kilometers') {
            convertedValue = inputValue / 1000;
        } else if (inputUnit === 'meters' && outputUnit === 'miles') {
            convertedValue = inputValue / 1609.34;
        } else if (inputUnit === 'kilometers' && outputUnit === 'meters') {
            convertedValue = inputValue * 1000;
        } else if (inputUnit === 'kilometers' && outputUnit === 'miles') {
            convertedValue = inputValue / 1.60934;
        } else if (inputUnit === 'miles' && outputUnit === 'meters') {
            convertedValue = inputValue * 1609.34;
        } else if (inputUnit === 'miles' && outputUnit === 'kilometers') {
            convertedValue = inputValue * 1.60934;
        } else {
            convertedValue = inputValue;
        }
    } else if (unitType === 'weight') {
        if (inputUnit === 'grams' && outputUnit === 'kilograms') {
            convertedValue = inputValue / 1000;
        } else if (inputUnit === 'grams' && outputUnit === 'pounds') {
            convertedValue = inputValue / 453.592;
        } else if (inputUnit === 'kilograms' && outputUnit === 'grams') {
            convertedValue = inputValue * 1000;
        } else if (inputUnit === 'kilograms' && outputUnit === 'pounds') {
            convertedValue = inputValue * 2.20462;
        } else if (inputUnit === 'pounds' && outputUnit === 'grams') {
            convertedValue = inputValue * 453.592;
        } else if (inputUnit === 'pounds' && outputUnit === 'kilograms') {
            convertedValue = inputValue / 2.20462;
        } else {
            convertedValue = inputValue;
        }
    } else if (unitType === 'temperature') {
        if (inputUnit === 'celsius' && outputUnit === 'fahrenheit') {
            convertedValue = (inputValue * 9/5) + 32;
        } else if (inputUnit === 'celsius' && outputUnit === 'kelvin') {
            convertedValue = inputValue + 273.15;
        } else if (inputUnit === 'fahrenheit' && outputUnit === 'celsius') {
            convertedValue = (inputValue - 32) * 5/9;
        } else if (inputUnit === 'fahrenheit' && outputUnit === 'kelvin') {
            convertedValue = (inputValue - 32) * 5/9 + 273.15;
        } else if (inputUnit === 'kelvin' && outputUnit === 'celsius') {
            convertedValue = inputValue - 273.15;
        } else if (inputUnit === 'kelvin' && outputUnit === 'fahrenheit') {
            convertedValue = (inputValue - 273.15) * 9/5 + 32;
        } else {
            convertedValue = inputValue;
        }
    }

    document.getElementById('convertedValue').innerText = convertedValue.toFixed(2);
}

// Initialize the units when the page loads
window.onload = populateUnits;