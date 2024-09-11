document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the task input value
    const taskInput = document.getElementById('task-input');
    const taskValue = taskInput.value.trim();

    // Validate input
    if (taskValue === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new task list item
    const newTaskItem = document.createElement('li');

    // Create checkbox element
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    checkbox.onclick = function() { taskCompleted(this); };

    // Create task input element
    const taskText = document.createElement('input');
    taskText.type = 'text';
    taskText.value = taskValue;
    taskText.className = 'task';
    taskText.onfocus = function() { getCurrentTask(this); };
    taskText.onblur = function() { editTask(this); };

    // Create delete icon element
    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa fa-trash-o delete-icon';
    deleteIcon.onclick = function() { deleteTask(this); };

    // Append elements to the new task item
    newTaskItem.appendChild(checkbox);
    newTaskItem.appendChild(taskText);
    newTaskItem.appendChild(deleteIcon);

    // Append the new task item to the task list
    document.getElementById('task-list').appendChild(newTaskItem);

    // Clear the input field
    taskInput.value = '';
});

// Function to handle marking task as completed
function taskCompleted(checkbox) {
    const taskItem = checkbox.parentElement;
    if (checkbox.checked) {
        taskItem.querySelector('.task').style.textDecoration = 'line-through';
    } else {
        taskItem.querySelector('.task').style.textDecoration = 'none';
    }
}

// Function to handle editing a task
function editTask(task) {
    if (task.value.trim() === '') {
        task.value = 'New Task';
    }
}

// Function to handle deleting a task
function deleteTask(deleteIcon) {
    if (confirm('Are you sure you want to delete this task?')) {
        const taskItem = deleteIcon.parentElement;
        taskItem.remove();
    }
}