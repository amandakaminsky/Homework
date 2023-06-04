class Task {
    constructor(taskName) {
      this.taskName = taskName;
    }
  
    static fromJSON(json) {
      return new Task(json.taskName);
    }
  }
  
  class UI {
    constructor() {
      this.form = document.getElementById('form');
      this.taskName = document.getElementById('task-input');
      this.tableBody = document.getElementById('table-body');
  
      this.form.addEventListener('submit', (e) => this.onFormSubmit(e));
  
      this.tasks = [];
      this.loadTasksFromLocalStorage();
      this.renderTaskTable();
    }
  
    onFormSubmit(e) {
      e.preventDefault();
  
      if (this.taskName.value == '') {
        return;
      }
  
      const task = new Task(this.taskName.value);
  
      this.tasks.push(task);
  
      this.saveTasksToLocalStorage();
      this.renderTaskTable();
  
      this.taskName.value = '';
    }
  
    renderTaskTable() {
      this.tableBody.innerHTML = '';
  
      for (let i = 0; i < this.tasks.length; i++) {
        const task = this.tasks[i];
  
        const tr = this.createTaskTableRow(task);
        this.tableBody.appendChild(tr);
      }
    }
  
    createTaskTableRow(task) {
      const tr = document.createElement('tr');
  
      const tdTaskName = document.createElement('td');
      const tdComplete = document.createElement('td');
      const tdDelete = document.createElement('td');

      tdTaskName.innerHTML = task.taskName;
      
      const deleteButton = this.createDeleteButton(task);
      const completeButton = this.createCompleteButton(task);

      tdDelete.appendChild(deleteButton);
      tdComplete.appendChild(completeButton);
  
      tr.appendChild(tdTaskName);
      tr.appendChild(tdComplete);
      tr.appendChild(tdDelete);
  
      return tr;
    }

    createCompleteButton(task) {

        let completeButton = document.createElement('form');
        let innerComplete = document.createElement('label');
        innerComplete.setAttribute('for', 'check');

        let innerComplete2 = document.createElement('input');
        innerComplete2.setAttribute('type', 'checkbox'); 
        innerComplete2.setAttribute('id', 'check');
        innerComplete2.setAttribute('name', 'check');

        completeButton.appendChild(innerComplete);
        completeButton.appendChild(innerComplete2);
        return completeButton;
      }
  
    createDeleteButton(task) {
      let deleteButton = document.createElement('button');

      let icon = document.createElement('i');
      icon.setAttribute('class', 'fa fa-trash');

      deleteButton.appendChild(icon);

      deleteButton.addEventListener('click', () =>
        this.onRemoveTaskClicked(task)
      );
  
      return deleteButton;
    }
  
    onRemoveTaskClicked(task) {
      this.tasks = this.tasks.filter((x) => {
        return task.taskName !== x.taskName;
      });
  
      this.saveTasksToLocalStorage();
      this.renderTaskTable();
    }
  
  
    saveTasksToLocalStorage() {
      const json = JSON.stringify(this.tasks);
      localStorage.setItem('tasks', json);
    }
  
    loadTasksFromLocalStorage() {
      const json = localStorage.getItem('tasks');
      if (json) {
        const taskArr = JSON.parse(json);
        this.tasks = taskArr.map((x) => Task.fromJSON(x));
      }
    }
  }
  
  const ui = new UI();