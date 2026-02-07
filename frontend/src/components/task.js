// Task component
export default function Task(task, tasks, updateUI) {
  const card = document.createElement("div");
  card.className = "task-card";

  // Task title and status
  const span = document.createElement("span");
  span.textContent = `${task.title} - ${task.status}`;
  card.appendChild(span);

  // Buttons container
  const btnContainer = document.createElement("div");

  // Update button
  const updateBtn = document.createElement("button");
  updateBtn.className = "updateBtn";
  updateBtn.textContent = "Update";
  updateBtn.addEventListener("click", () => {
    const newStatus = prompt("Enter new status (pending, in-progress, completed):", task.status);
    if (newStatus && ["pending","in-progress","completed"].includes(newStatus)) {
      task.status = newStatus;
      updateUI();
    } else {
      alert("Invalid status!");
    }
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "deleteBtn";
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    const index = tasks.findIndex(t => t.id === task.id);
    if (index > -1) {
      tasks.splice(index, 1);
      updateUI();
    }
  });

  // Append buttons
  btnContainer.appendChild(updateBtn);
  btnContainer.appendChild(deleteBtn);

  card.appendChild(btnContainer);

  return card;
}
