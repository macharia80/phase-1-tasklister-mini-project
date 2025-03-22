document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#create-task-form');
  const taskList = document.querySelector('#tasks');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission
    const input = document.querySelector('#new-task-description');
    const taskText = input.value.trim();
    
    if (taskText) {
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
      taskList.appendChild(listItem);
      input.value = ''; // Clear input after submission
    }
  });
});
