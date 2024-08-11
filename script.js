document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.getElementById('input-box');
    const listContainer = document.getElementById('list-container');

    function addTask() {
        const taskText = inputBox.value.trim();
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;
        li.addEventListener('click', toggleTask);

        listContainer.appendChild(li);
        inputBox.value = '';
    }

    function toggleTask(event) {
        event.target.classList.toggle('checked');
    }

    window.addTask = addTask; 
});
