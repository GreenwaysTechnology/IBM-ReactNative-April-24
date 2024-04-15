
function blockMe(message) {
    console.log(message)
}

function sayHello(callback) {
    // callback('done')
    setTimeout(callback, 5000, 'done')
}

blockMe('start')
sayHello(function (response) {
    console.log(response)
})
blockMe('end')