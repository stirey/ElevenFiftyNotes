/* *************************
*** USER SIGNUP ***
************************** */
//allows a new user to signup for our journal app
function userSignUp() {
    //  console.log('userSignUp Function Called')
    let userEmail = document.getElementById('emailSignup').nodeValue;
    let userPass = document.getElementById('pwdSignup').value;
    let newUserData = { user: { email: userEmail, password: userPass } };
    console.log(`NEWUSERDATA ==> ${newUserData.user.email}  ${newUserData.user.password}`)
    
    fetch('http://localhost:3000/user/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserData)
    })
    .then(response => response.json())
    .then(function (response) {
        console.log(response.sessionToken);
        let token = response.sessionToken;
        localStorage.setItem('SessionToken', token);
        tokenChecker()
    })
    .catch((err) => {
        console.log(err)
    })

    }
    
    
    /* *************************
    *** USER LOGIN ***
    ************************** */
    function userLogin() {
     console.log('userLogin Function Called')
    }
    
    
    /* *************************
    *** USER LOGOUT ***
    ************************** */
    function userLogout() {
     console.log('userLogout Function Called')
    }
    
    
    /* *************************
     *** TOKEN CHECKER FUNCTION ***
    ************************** */
    function tokenChecker() {
     console.log('tokenChecker Function Called')
    }
    tokenChecker()