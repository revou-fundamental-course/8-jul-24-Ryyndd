function hitungBMI() {
    // Ambil nilai berat badan dan tinggi badan dari formulir
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let age = document.getElementById('age').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;

    // Hitung BMI
    let bmi = weight / (height / 100) ** 2;

    // Interpretasi BMI
    let status = '';
    if (bmi < 18.5) {
        status = 'UNDERWEIGHT';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = 'NORMAL';
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        status = 'OVERWEIGHT';
    } else {
        status = 'OBESE';
    }

    // Menampilkan hasil BMI dan gender
    document.getElementById('result').innerHTML = `Gender: ${gender}, Umur: ${age}`;
    document.getElementById('bmiRes').textContent = bmi.toFixed(2);
    document.getElementById('statusRes').textContent = status;
}
