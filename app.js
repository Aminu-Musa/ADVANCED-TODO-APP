// FROM VALIDATION FUNCTION
function formvalidation() {
    let user_input = document.querySelectorAll('input, select')
    user_input.forEach((user)=>{
        if (user.value === '' || user.value === null) {
            user.nextElementSibling.innerText = `${user.getAttribute('placeholder')} can not be blank`
        }else{
                user.nextElementSibling.innerText = ""
        }
    })}

// FORM RESET
function form_reset() {
    let user_input = document.querySelectorAll('input, select')
    user_input.forEach((user)=>{ user.value = '' })

} 
// ==================== END OF VALIDATION =================================

// USER REGISTRATION APP : POST REQUEST
async function userData() {
    let user_input_data = {
        first_name:document.getElementById('user_first_name').value,
        last_name:document.getElementById('user_last_name').value,
        gender:document.getElementById('user_gender').value,
        email:document.getElementById('user_email').value,
        phone:document.getElementById('user_phone').value,
        password:document.getElementById('user_password').value,
        username:document.getElementById('user_name').value
    }

try {const response = await fetch('https://6538e35ea543859d1bb22207.mockapi.io/api/v1/users',
    {
        method: 'post',
        headers:{'Content-type': 'application/json'},
        body:JSON.stringify(user_input_data)
    })

    // UPDATE USER NAME ON TODO API
    let create_username = {
        user_id: document.getElementById('user_name').value,
        title:null,
        task: null,
        category:null,
        priority:null,
        due_date: null,
        due_time: null,
        created_at: null,
    }

    const post_user_name = await fetch('https://6538e35ea543859d1bb22207.mockapi.io/api/v1/todos',
    {
        method:'post',
        headers:{'content-type': 'application/json'},
        body:JSON.stringify(create_username)
    })


    if(response.ok && post_user_name.ok){
        alert('Account created successfuly, please proceed to login')
        form_reset()
        const response_validation = await response.json()
        const post_username_validation = await post_user_name.json()
        console.log(response_validation);
        console.log(post_username_validation);
    }

} catch (error) {
   console.log(error); 
}
}
// =========================== END OF REGISTRATION =================================


// USER LOGIN DATA : GET REQUEST


// REGISTRATION 
let sign_btn = document.getElementById('sign_up')
sign_btn.addEventListener('click', (e)=>{
    e.preventDefault()
    // formvalidation()
    userData()
})



