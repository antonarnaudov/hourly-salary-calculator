document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    let hours = document.getElementById('hours')
    let minutes = document.getElementById('minutes')
    let money = document.getElementById('money')

    let time = Number(hours.value) + (Number(minutes.value) / 60)
    result.value = `${(time * Number(money.value)).toFixed(2)}лв`
})

// h = hours + (minutes / 60) + (seconds / 3600)