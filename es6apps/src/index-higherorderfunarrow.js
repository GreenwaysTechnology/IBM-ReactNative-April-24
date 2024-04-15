
let login = (userName, password, resolve, reject) => {
    if (userName === 'admin' && password === 'admin') {
        resolve('Login success')
    } else {
        reject('Login failed')
    }
}
login('admin', 'admin', status => console.log(status), err => console.log(err))
login('foo', 'bar', status => console.log(status), err => console.log(err))