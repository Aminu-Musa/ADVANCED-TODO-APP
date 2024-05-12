
let form_reset = function () {
    let user_name = document.getElementById('user_name').value = ''
    let user_password = document.getElementById('user_password').value = ''
}
// FETCHING USER DATA ON TODO AND USER API
async function fetch_login_data() {
    let user_name = document.getElementById('user_name').value
    let user_password = document.getElementById('user_password').value
    try {
        
        let login_credentials = []

    const user_password_user_api = await fetch('https://6538e35ea543859d1bb22207.mockapi.io/api/v1/users')   
    const user_name_todo_api = await fetch('https://6538e35ea543859d1bb22207.mockapi.io/api/v1/todos')

        if (user_password_user_api.ok && user_name_todo_api.ok) {
            const user_password_check =  await user_password_user_api.json()
            const user_name_check =  await user_name_todo_api.json()

//  =========================================================
           function get_username() {
                user_name_check.forEach((username)=>{
                if( user_name == username.user_id){
                    login_credentials.push(username.user_id)
                    console.log(username.user_id);
                    return username.user_id;
                }
            });
            }
// let obtained_username =  get_username() 

// =======================================================
           function get_userpassword() {
                user_password_check.forEach((password)=>{
                        if(user_password == password.password){
                            login_credentials.push(password.password)
                            console.log(password.password);
                            return password.password;
                        }
                    });
            }
// let obtained_password =  get_userpassword()

console.log(login_credentials);

if (user_name == get_username() && user_password == get_userpassword()) {
    alert('Login Successful')
}else{
    alert('Invalid login credentials')
}
}

    } catch (error) {
        console.log(error);
    }

    }



const login_btn = document.getElementById('login')
login_btn.addEventListener('click',(e)=>{
e.preventDefault()
fetch_login_data()
form_reset()

})



