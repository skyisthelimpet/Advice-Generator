
const URL = 'https://api.adviceslip.com/advice'
document.getElementById('button').addEventListener('click' ,async function () {
    var quote = await fetch(URL)
    .then(response => response.text())
    var advice = JSON.parse(quote)
    document.getElementById('quote').innerHTML = advice.slip.advice
    document.getElementById('adviceNumber').innerHTML = `ADVICE #${advice.slip.id}`
})

