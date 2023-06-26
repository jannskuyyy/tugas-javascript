const user = {
    username: 'jinwoo',
    password: 'sololeveling'
}

const usernameElm = document.getElementById('username')
const passwordElm = document.getElementById('password')
const btn_loginElm = document.getElementById('btn_submit')
const getUname = document.getElementById('getUname')
const getPass = document.getElementById('getPass')


// Login logic
btn_loginElm.addEventListener('click', function () {
    if (usernameElm.value.length > 0 && passwordElm.value.length > 0) {
        if (usernameElm.value == user.username && passwordElm.value == user.password) {
            this.onclick;{location.href = './../src/index2.html'}
        } else {
            alert('Username & Password Salah')

        }
    } else {
        alert('Please fill the form')
    }
})

// Get username and password
getUname.addEventListener ('click', function() {
    alert('username: jinwoo')
})
getPass.addEventListener ('click', function() {
    alert('password: sololeveling')
})

