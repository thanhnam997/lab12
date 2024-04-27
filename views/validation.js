// validation.js

// JavaScript for input validation

document.addEventListener('DOMContentLoaded', function () {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');

    heightInput.addEventListener('input', validateInput);
    weightInput.addEventListener('input', validateInput);

    function validateInput(event) {
        const input = event.target;
        if (input.checkValidity()) {
            input.classList.remove('invalid');
            input.classList.add('valid');
        } else {
            input.classList.remove('valid');
            input.classList.add('invalid');
        }
    }
});
