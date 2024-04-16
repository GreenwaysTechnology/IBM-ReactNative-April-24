function login(userName, password) {

    return new Promise((resolve, reject) => {
        if (userName === 'admin' && password === 'admin') {
            setTimeout(resolve, 1000, 'Login Success')
        } else {
            setTimeout(reject, 1000, 'Login Failed')
        }
    })

}
function blockMe(message) {
    console.log(message)
}
blockMe('start')
login('admin', 'admin').then(res => console.log(res)).catch(err => console.log(err))
login('foo', 'bar').then(res => console.log(res)).catch(err => console.log(err))

blockMe('end')