document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const li = document.createElement("li");

      const span = document.createElement("span");
      span.textContent = taskText;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Eliminar";
      deleteBtn.addEventListener("click", function () {
        li.remove();
      });

      li.appendChild(span);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);

      taskInput.value = ""; //limpia campo
    }
  }

  addTaskBtn.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  });
});
