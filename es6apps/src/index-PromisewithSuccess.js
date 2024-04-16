//Promise Simple implementation

function getUser() {
    //return promise
    return Promise.resolve('Subramanian')
}
function blockMe(message) {
    console.log(message)
}
blockMe('start')
getUser().then(response => console.log(response))
blockMe('end')