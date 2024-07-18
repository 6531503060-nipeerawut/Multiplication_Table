document.getElementById('multiplicationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const number = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');

    let resultHtml = `<h2>Multiplication Table for ${number}</h2>`;
    for (let i = 1; i <= 12; i++) {
        resultHtml += `<p>${number} X ${i} = ${number * i}</p>`;
    }

    resultDiv.innerHTML = resultHtml;
});