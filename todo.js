document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
  });
  
  function addTask(taskText) {
    const todoList = document.getElementById('todo-list');
  
    const li = document.createElement('li');
    li.textContent = taskText;
  
    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.classList.add('done');
    doneButton.addEventListener('click', function() {
        li.classList.toggle('done');
    });
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(li);
    });
  
    li.appendChild(doneButton);
    li.appendChild(deleteButton);
  
    todoList.appendChild(li);
  }