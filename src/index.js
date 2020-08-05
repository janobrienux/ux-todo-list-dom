
let todos = [
    {
        completed: false,
        description: "Take Jim to the hair salon"
    },
    {
        completed: true,
        description: "Drop off wedding invitation at mailbox"
    },
    {
        completed: false,
        description: "Pick up the cake"
    },
    {
        completed: false,
        description: "Call the caterers"
    }
];
function renderTodoApp() {
    let app = document.querySelector("#app");
    let h1 = document.createElement("h1");
    let todoList= document.createElement("ul");
    // your code here
    h1.innerText = "Todo List";
    app.appendChild(h1);
    app.appendChild(todoList);

    for (let i=0; i < todos.length; i++) {
        let todoItems = todos[i]
        let stateOfBox = todoItems.completed ? "checked": "";
        let todoMarkUp = `
        <li><input type= "checkbox" ${stateOfBox} >
    
        ${todoItems.description}
        </li>
        `;
        todoList.innerHTML += todoMarkUp;
    }

    // and maybe some here
 
    // app.append(todoListElement)
}

renderTodoApp();