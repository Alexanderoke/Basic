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