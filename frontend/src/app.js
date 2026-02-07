// Import components
import AddTask from "./components/AddTask.js";
import Counter from "./components/Counter.js";
import Task from "./components/task.js";

// Array to store tasks
let tasks = [
  { id: 1, title: "Design Homepage", status: "pending" },
  { id: 2, title: "Build API", status: "in-progress" },
  { id: 3, title: "Deploy App", status: "completed" }
];

// Function to create the App structure
export default function App() {
  // Create main container
  const container = document.createElement("div");

  // Heading
  const heading = document.createElement("h1");
  heading.textContent = "Task Manager";
  container.appendChild(heading);

  // Counter
  const counterElement = Counter(tasks);
  container.appendChild(counterElement);

  // Add Task form
  const addTaskElement = AddTask(tasks, updateUI);
  container.appendChild(addTaskElement);

  // Task List container
  const taskList = document.createElement("div");
  taskList.id = "taskList";
  container.appendChild(taskList);

  // Render tasks initially
  renderTasks();

  // Function to update UI when tasks change
  function updateUI() {
    // Update counter
    counterElement.textContent = `Total: ${tasks.length} | Pending: ${tasks.filter(t => t.status === 'pending').length} | In Progress: ${tasks.filter(t => t.status === 'in-progress').length} | Completed: ${tasks.filter(t => t.status === 'completed').length}`;

    // Clear task list
    taskList.innerHTML = "";

    // Render tasks
    renderTasks();
  }

  function renderTasks() {
    tasks.forEach(task => {
      const taskElement = Task(task, tasks, updateUI);
      taskList.appendChild(taskElement);
    });
  }

  return container;
}
