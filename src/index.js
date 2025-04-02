document.addEventListener("DOMContentLoaded", () => {
    
    const taskForm = document.getElementById("create-task-form");
    const taskInput = document.getElementById("new-task-description");
    const taskList = document.getElementById("tasks");
  
    // Add event listener to the form to handle submission
    taskForm.addEventListener("submit", function(event) {
      event.preventDefault();  // Prevent the form from reloading the page
  
      const taskDescription = taskInput.value;  // Get the value from the input field
  
      if (taskDescription) {  // Ensure the input is not empty
        // Create a new list item (li) to hold the task
        const taskItem = document.createElement("li");
        taskItem.textContent = taskDescription;  // Set the text of the list item
  
        // Append the new task to the task list
        taskList.appendChild(taskItem);
  
        // Clear the input field after adding the task
        taskInput.value = "";
      }
    });
  });
  
