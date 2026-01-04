const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const ageInput = document.getElementById('gender');
const calculateBtn = document.getElementById('calculateBtn');
const resultsDiv = document.getElementById('results');

calculateBtn.addEventListener('click', () => {
    const height = heightInput.value;
    const weight = weightInput.value;
    const age = ageInput.value;
    const gender = genderSelect.value;

    if (!height || !weight || !age || !gender) {
        resultsDiv.innerHTML = <p style="color:red;">Please fill all fields before calculating.</p>;
        return;
    }

    resultsDiv.innerHTML = <p>Inputs are valid! BMI & BMR calculations will come later.</p>;
});