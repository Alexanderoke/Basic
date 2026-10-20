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