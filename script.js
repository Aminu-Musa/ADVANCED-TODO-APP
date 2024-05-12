// NEW USER REGISTRATION
let registration_data =  ()=>{
    let new_user_data = {
        first_name:document.getElementById('user_first_name').value,
        last_name:document.getElementById('user_last_name').value,
        email:document.getElementById('user_email').value,
        password:document.getElementById('user_password').value
    }

// POST USER DATA TO THE API
async function getTodos() {
    try {
        const newTodo = await fetch('https://6538e35ea543859d1bb22207.mockapi.io/api/v1/users', {
            method: 'POST',
            body: JSON.stringify({
                
                first_name: document.getElementById('user_first_name').value,
                last_name: document.getElementById('user_last_name').value,
                email: document.getElementById('user_email').value,
                gender: null,
                phone: null,
                password: document.getElementById('user_password').value,
                username: null,
            }),
            headers: {'Content-type': 'application/json'},
        })

        const confirmation = await newTodo.json()
        console.log(confirmation);

    } catch (error) {
        console.log(error);
    }
}

getTodos()
}

let create_acct_btn = document.querySelector("#sign_up")
// ================= CLICK FOR REGISTRATION=====================
create_acct_btn.addEventListener('click', (e)=>{
    e.preventDefault()
    registration_data()
})


// =============================== END ===========================
let todo_list = " "
let todo_body = document.querySelector('.todo_list_container')

// DATA CAPTURE
todo_form_data = () => {
    let todo = {
        todo__title: document.getElementById('todo__title').value,
        todo__task: document.getElementById('todo__task').value,
        todo__status: document.getElementById('todo__status').value,
        todo__category: document.getElementById('todo__category').value,
        todo__priority: document.getElementById('todo__priority').value,
        todo__date: document.getElementById('todo__date').value
    }


// FETCH DATA FROM API
async function getTodos() {
    try {
        const newTodo = await fetch('https://6538e35ea543859d1bb22207.mockapi.io/api/v1/users', {
            method: 'POST',
            body: JSON.stringify({todo}),
            headers: {'Content-type': 'application/json'},
        })
    } catch (error) {
        console.log(error);
    }
}

    todo_list += `
    <div class="todo_card">
    <h3 class="todo_title">${todo.todo__title}</h3>
    <p class="todo_task">Task: <span> ${todo.todo__task}</span></p>
    <p class="todo_status">Status: <span>${todo.todo__status}</span></p>
    <p class="todo_category">Catetory: <span>${todo.todo__category}</span></p>
    <p class="todo_priority">Priority:<span id="priority">${todo.todo__priority}</span></p>
    <p class="todo_date">Date: <span>${todo.todo__date}</span></p>
    <div class="action_btns">
        <button id="edit_todo">Edit</button>
        <button id="delete_todo">Delete</button>
    </div>
</div>
    `
    todo_body.innerHTML = todo_list

}


// // CLICK EVENT
// document.getElementById('add_todo').addEventListener('click', (e) => {
//     e.preventDefault()
//     todo_form_data()
// })


// async function createUser() {
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     if (response.ok) {
//         const data = await response.json()
//         console.log(data);
//     }else{
//         console.log('Sorry something went wrong');
//     }
//    } catch (error) {
//     console.log(error);
//    }

// }

// createUser()


// async function create_account(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         if (response.ok) {
//             let userData = await response.json()
//             decoment.write(userData)
//         }
//     } catch (error) {
//        console.log(error);
//     }
// }

// create_account()

// ASNCY WAIT FOR POSTING 

async function create_account() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users',{
            method: 'POST',
            headers:{'content-type': 'application/json'},
            body:json.stringify({})
        } )
        if (response.ok) {
            let data = await response.json()
            console.log(data);
            console.log('account created successfuly');
        }

    } catch (error) {
        console.log(error);
    }
}