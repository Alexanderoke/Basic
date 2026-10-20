const taskInput = document.getElementById("taskInput");
      const addBtn = document.getElementById("addBtn");
      const taskList = document.getElementById("taskList");
      const counter =document.getElementById("counter");
      const clearBtn = document.getElementById("clearBtn");
      const deleteAllBtn = document.getElementById("deleteAllBtn");

      function updateCounter() {
        const total =taskList.querySelectorAll("li").length;
        const remaining = taskList.querySelectorAll("li:not(.done)").length;
        counter.textContent = remaining +"of" + total + "tasks left";        
      }

      function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll("li").forEach(function (li) {
          tasks.push({
            text: li.querySelector("span").textContent,
            done: li.classList.contains("done")
          });
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
        updateCounter();
      }

       function editTask(li, span) {
        const input = document.createElement("input");
        input.type = "text";
        input.value =span.textContent;
        input.className ="editInput";
        
        li.replaceChild(input, span);
        input.focus();
        input.select();

        let finished = false;

        function finishEdit(save) {
          if (finished) {
            return;
          }
          finished = true;

          const newText = input.value.trim();
          if (save && newText !==""){
            span.textContent = newText;
          }
          li.replaceChild(span, input);
          saveTasks();
        }
        
        input.addEventListener("keydown", function(event){
          if (event.key === "Enter"){
            finishEdit(true);
          }else if (event.key ==="Escape"){
            finishEdit(false);
          }
        });
        input.addEventListener("blur", function(){
          finishEdit(true);
        });
      }

      function addTask() {
        const text = taskInput.value.trim();
        if (text === "") {
          return;
        }
        createTask(text, false);
        saveTasks();
        taskInput.value = "";
        taskInput.focus();
      }

      function loadTasks() {
        const saved = localStorage.getItem("tasks");
        if (saved === null) {
          return;
        }

        try {
          JSON.parse(saved).forEach(function (task) {
            createTask(task.text, task.done);
          });
        } catch (error) {
          localStorage.removeItem("tasks");
        }
      }

      addBtn.addEventListener("click", addTask);
      taskInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          addTask();
        }
      });

      clearBtn.addEventListener("click", function (){
        taskList.querySelectorAll("li.done").forEach(function (li) {
          li.remove();
        });
        saveTasks();
      })

      deleteAllBtn.addEventListener("click", function() {
        if (taskList.children.length === 0) {
          return;
        }
        const sure = confirm("Delete all tasks? This can't be undone.");

        if (sure){
          taskList.innerHTML ="";
          saveTasks();
        }
      });

      
      loadTasks();
      updateCounter();