//callback chaining
const getUser = (resolve, reject) => {
    console.log('getUser is called')
    let user = {
        name: 'admin',
        password: 'admin'
    }
    //user = undefined
    if (user) {
        setTimeout(resolve, 1000, user)
    } else {
        setTimeout(reject, 1000, { message: 'No User is found' })
    }
}
const login = (user, resolve, reject) => {
    console.log('login is called')
    if (user) {
        setTimeout(resolve, 1000, 'login success')
    } else {
        setTimeout(reject, 1000, 'login failed')
    }
}

const showDashboard = (status, resolve, reject) => {
    console.log('showDashboard is called')
    if (status === 'login success') {
        setTimeout(resolve, 1000, 'Welcome to Dashboard')
    } else {
        setTimeout(reject, 1000, 'Welcome to Guest page')
    }
}


function main() {
    getUser(user => {
        //call login 
        login(user, status => {
            showDashboard(status, page => {
                console.log(page)
            }, err => {
                console.log(err)
            })
        }, err => {
            console.log(err)
        })
    }, err => {x
        console.log(err)
    })
}
main()