function todoData() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(src => src.json())
        .then(data => todoDisplay(data))
}

function todoDisplay(todos) {
    const todoContainer = document.getElementById('todo-container')
    for (const todo of todos) {
        const todoDiv = document.createElement('div');
        todoDiv.innerHTML = `
         <div>  User id - ${todo.userId} </div>
         <p> Title - ${todo.title} </p> 
        <p> completed - ${todo.completed} </p>
        
        `
        todoContainer.appendChild(todoDiv);

    }

}

todoData();