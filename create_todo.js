//CREATE TODO IN DASHBOARD : POST REQUEST
async function create_todo() {
    let user_todo = {
            title: document.getElementById('todo__title').value,
            task: document.getElementById('todo__task').value,
            status: document.getElementById('todo__status').value,
            category: document.getElementById('todo__category').value,
            priority: document.getElementById('todo__priority').value,
            due_date: document.getElementById('todo__due_date').value,
            due_time: document.getElementById('todo__due_time').value,
            created_at: document.getElementById('todo__due_time').value
    }
try {
    const user_todo_response = await fetch('https://6538e35ea543859d1bb22207.mockapi.io/api/v1/todos', 
    {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(user_todo)
    })
    if (user_todo_response.ok) {
        let created_todo = await user_todo_response.json()
        console.log(created_todo);
        console.log(user_todo_response);
        load_todo_API()
        alert('Todo Created Successfully')
    }

} catch (error) {
    alert('An error occurred please check your internet connection')
}
}

// LOAD TODO GET REQUEST: DASHBOARD
async function load_todo_API() {
    let all_todos = ''
    let todo_container = document.querySelector('.todo_list_container')
    try {
        const todos_in_API = await fetch('https://6538e35ea543859d1bb22207.mockapi.io/api/v1/todos')
        if (todos_in_API.ok) {
            let total_todos = await todos_in_API.json()
            total_todos.forEach((todo)=>{
                all_todos += `
                <div class="todo_card">
                <h3 class="todo_title">${todo.title}</h3>
                <p class="todo_task">Task: <span> ${todo.task}</span></p>
                <p class="todo_status">Status: <span>${todo.status}</span></p>
                <p class="todo_category">Catetory: <span>${todo.category}</span></p>
                <p class="todo_priority">Priority:<span id="priority">${todo.priority}</span></p>
                <p class="todo_date">Date: <span>${todo.due_date}</span></p>
                <div class="action_btns">
                    <button id="edit_todo">Edit</button>
                    <button id="delete_todo">Delete</button>
                </div>
            </div>
                `
            })
            todo_container.innerHTML = all_todos
        }

    } catch (error) {
        // alert('Failed to laod todos');
        console.log(error);
    }
}

// CREATE TODO ACTION BTN: DASHBOARD
let create_todo_btn = document.getElementById('add_todo')
create_todo_btn.addEventListener('click', (e)=>{
e.preventDefault()
create_todo()
})

load_todo_API()