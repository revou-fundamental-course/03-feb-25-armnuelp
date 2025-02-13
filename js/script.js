document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("temperature");
    const resultField = document.getElementById("result");
    const convertBtn = document.getElementById("convert");
    const reverseBtn = document.getElementById("reverse");
    const inputLabel = document.getElementById("input-label");
    const outputLabel = document.getElementById("output-label");
    const formLabel = document.getElementById("form-label");
    const rumus = document.getElementById("formulah");
    const ResetBtn = document.getElementById("reset");
    const explainBtn = document.getElementById("explain");

    let isCelsiusToFahrenheit = true; //mode awal celcius mode

    // Fungsi button vonvert 
    function convertTemperature() {
        let inputValue = parseFloat(inputField.value);

        if (!isNaN(inputValue)) {
            let result;
            if (isCelsiusToFahrenheit) {
                result = (inputValue * 9/5) + 32;
                resultField.textContent = result.toFixed(2) + " °F";
                rumus.textContent =  `(${inputValue} x 9/5) + 32`
                formLabel.textContent= "Rumus"
               
            } else {
                result = (inputValue - 32) * 5/9;
                resultField.textContent = result.toFixed(2) + " °C";
                rumus.textContent = `(${inputValue} - 32) x 5/9`;
                formLabel.textContent= "Rumus"
            }
        } else {
            alert("Masukkan angka yang valid!");
        }
    }
    //fungsi reset button
    function ResetDisplay(){
        inputField.value = "";
        resultField.textContent = "-";
        rumus.textContent = "-"
        Penjelasan.textContent ="-";
        formLabel.textContent= "Rumus";

    }

    function ExplainDisplay(){
        if (isCelsiusToFahrenheit) {
        formLabel.textContent= "Penjelasan C to F"
        rumus.textContent= "Cara konversi suhu dari Celcius (°C) ke Fahrenheit(°F) Suhu S dalam derajat Fahrenheit (°F) = suhu S dalam derajat Celcius (°C) kali 9/5 tambah 32. S(°F) = (S(°C) x 9/5) + 32";
    }
    else{
        formLabel.textContent= "Penjelasan F to C"
        rumus.textContent="Cara konversi suhu dari Fahrenheit (°F) ke Celcius(°C). Suhu S dalam derajat Celcius (°C) = suhu S dalam derajat (Fahrenheit (°F) dikurangi 32) lalu dikalikan dengan 9/5. S(°C) = (S(°F)-32) x 9/5"
    }
}

    // Fungsi reverse button mode bjir
    function reverseConversion() {
        isCelsiusToFahrenheit = !isCelsiusToFahrenheit;

        if (isCelsiusToFahrenheit) {
            inputLabel.textContent = "Masukkan suhu dalam Celsius (°C):";
            outputLabel.textContent = "Hasil dalam Fahrenheit (°F):";
            formLabel.textContent = "Rumus konversi Celcius to Fahrenheit"
            formLabel.textContent= "Rumus"

        } else {
            inputLabel.textContent = "Masukkan suhu dalam Fahrenheit (°F):";
            outputLabel.textContent = "Hasil dalam Celsius (°C):";
            formLabel.textContent = "Rumus konversi Fahrenheit to Celcius"
            formLabel.textContent= "Rumus"
        }

        // awal bukanlah akhir
        inputField.value = "";
        resultField.textContent = "-";
        rumus.textContent = "-"
        Penjelasan.textContent ="-"
    }

    // kondisi button ketika di klik bjir
    convertBtn.addEventListener("click", convertTemperature);
    reverseBtn.addEventListener("click", reverseConversion);
    ResetBtn.addEventListener("click", ResetDisplay);
    explainBtn.addEventListener("click", ExplainDisplay);
});