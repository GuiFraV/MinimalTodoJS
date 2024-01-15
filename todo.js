const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector("#taskList");
const addTaskeForm = document.querySelector('#addTaskForm');

taskList.style= `
    list-style:none;
    margin-top: 1rem;
    font-size: 1.5rem;
`
const createTaskItem = (task) => {
    `
        <li>
            <input type="checkbox" name="task" value="${task}" />
            <label for"task">${task}</label>
            <button type="button">X</button>
        </li>
    `
}