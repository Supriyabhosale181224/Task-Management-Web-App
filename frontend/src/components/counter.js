// Counter component
export default function Counter(tasks) {
  const counter = document.createElement("div");
  counter.id = "counter";

  const total = tasks.length;
  const pending = tasks.filter(t => t.status === "pending").length;
  const inProgress = tasks.filter(t => t.status === "in-progress").length;
  const completed = tasks.filter(t => t.status === "completed").length;

  counter.textContent = `Total: ${total} | Pending: ${pending} | In Progress: ${inProgress} | Completed: ${completed}`;

  return counter;
}
