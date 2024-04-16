//Promise Simple implementation

function login(userName, password) {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('Login success')
    } else {
        return Promise.reject("Login failed")
    }
}
function blockMe(message) {
    console.log(message)
}
blockMe('start')
login('admin', 'admin').then(res => console.log(res)).catch(err => console.log(err))
login('foo', 'bar').then(res => console.log(res)).catch(err => console.log(err))

blockMe('end')