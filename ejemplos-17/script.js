// Array para almacenar las tareas
let tasks = [];

// Función para agregar una nueva tarea
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value.trim();

    if (taskName !== '') {
        const newTask = {
            id: Date.now(),
            name: taskName,
            completed: false
        };
        tasks.push(newTask);
        renderTasks();
        taskInput.value = '';
    }
}

// Función para renderizar las tareas en la lista
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = task.name;
        
        if (task.completed) {
            listItem.style.textDecoration = 'line-through';
        }

        listItem.addEventListener('click', () => toggleTask(task.id));
        taskList.appendChild(listItem);
    });
}

// Función para marcar una tarea como completada o no completada
function toggleTask(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        renderTasks();
    }
}

// Inicializar la lista de tareas
renderTasks();
