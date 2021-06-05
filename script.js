console.log('Hello world')
window.console.log('Hello world')

setTimeout(function () {
    console.log('Hi!')
}, 5000) // 5000ms = 5s

const handleTimer = setInterval(function () {
    const time = new Date()
    console.log(time.toLocaleString('th-TH', { timeStyle: 'medium' }))
}, 1000)

setTimeout(function () {
    clearInterval(handleTimer)
}, 10000)
