const getUser = () => {
    console.log('getUser is called')
    return new Promise((resolve, reject) => {
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
    })
}
const login = user => {
    console.log('login is called')
    return new Promise((resolve, reject) => {
        if (user) {
            setTimeout(resolve, 1000, 'login success')
        } else {
            setTimeout(reject, 1000, 'login failed')
        }
    })
}

const showDashboard = status => {
    console.log('showDashboard is called')
    return new Promise((resolve, reject) => {
        if (status === 'login success') {
            setTimeout(resolve, 1000, 'Welcome to Dashboard')
        } else {
            setTimeout(reject, 1000, 'Welcome to Guest page')
        }
    })
}


function main() {
    // getUser(user => {
    //     //call login 
    //     login(user, status => {
    //         showDashboard(status, page => {
    //             console.log(page)
    //         }, err => {
    //             console.log(err)
    //         })
    //     }, err => {
    //         console.log(err)
    //     })
    // }, err => {
    //     x
    //     console.log(err)
    // })

    getUser()
        .then(user => {
            return login(user)
        })
        .then(status => {
            return showDashboard(status)
        })
        .then(page => {
            console.log(page)
        })
        .catch(err => console.log(err))
}
main()