// AddTask component
export default function AddTask(tasks, updateUI) {
  const form = document.createElement("div");
  form.id = "addTask";

  // Task title input
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.placeholder = "Task Title";

  // Task description input
  const descInput = document.createElement("input");
  descInput.type = "text";
  descInput.placeholder = "Task Description";

  // Status select
  const statusSelect = document.createElement("select");
  const options = ["pending", "in-progress", "completed"];
  options.forEach(opt => {
    const option = document.createElement("option");
    option.value = opt;
    option.textContent = opt.charAt(0).toUpperCase() + opt.slice(1);
    statusSelect.appendChild(option);
  });

  // Add Task button
  const addBtn = document.createElement("button");
  addBtn.textContent = "Add Task";

  // On click: add new task
  addBtn.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const desc = descInput.value.trim();
    const status = statusSelect.value;

    if (!title) {
      alert("Task title cannot be empty!");
      return;
    }

    // Add new task to array
    tasks.push({
      id: Date.now(),
      title: title,
      description: desc,
      status: status
    });

    // Clear inputs
    titleInput.value = "";
    descInput.value = "";
    statusSelect.value = "pending";

    // Update UI
    updateUI();
  });

  // Append inputs and button to form
  form.appendChild(titleInput);
  form.appendChild(descInput);
  form.appendChild(statusSelect);
  form.appendChild(addBtn);

  return form;
}
