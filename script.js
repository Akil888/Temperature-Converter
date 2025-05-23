// Select DOM elements
const tempInput = document.getElementById('tempInput');
const result = document.getElementById('result');
const conversionRadios = document.querySelectorAll('input[name="conversion"]');

// Function to convert temperature
const convertTemperature = () => {
  const value = parseFloat(tempInput.value);
  const conversionType = document.querySelector('input[name="conversion"]:checked').value;

  if (isNaN(value)) {
    result.textContent = 'Result: Please enter a valid number';
    return;
  }

  let converted;
  if (conversionType === 'cToF') {
    converted = (value * 9/5) + 32;
    result.textContent = `Result: ${converted.toFixed(2)} °F`;
  } else {
    converted = (value - 32) * 5/9;
    result.textContent = `Result: ${converted.toFixed(2)} °C`;
  }
};

// Attach input event listeners
tempInput.addEventListener('input', convertTemperature);
conversionRadios.forEach(radio => {
  radio.addEventListener('change', convertTemperature);
});
