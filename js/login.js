document.getElementById('login-submit').addEventListener
('click',function() {
const emailField = document.getElementById('user-email');
const userEmail = emailField.value;
// console.log(userEmail);

const passWordField = document.getElementById('user-Password');
const userpassword = passWordField.value;
    if(userEmail == 'mehedi@gmail.com' && userpassword == 'secret'){

        window.location.href="banking.html";
        // console.log('valid user');
    }
    else{
        console.log('not - valid');
    }

})
