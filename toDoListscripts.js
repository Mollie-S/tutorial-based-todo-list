let toDoList = {
  todos: [],
  // displayToDos: function() {
  //   if(this.todos.length === 0) {
  //     console.log('Your To Do list is empty');
  //   } else {
  //       console.log('My todos: ');
  //       this.todos.forEach(function(todo) {
  //         if(todo.completed === true) {
  //           console.log('(x)', todo.todoText);
  //         } else {
  //             console.log('()', todo.todoText);
  //           }
  //       });
  //     }
  // },
  addToDos: function(todoText) {
    todoText = todoText.trim();
    if (todoText.length === 0) return;

    this.todos.push({
      todoText: todoText,
      completed: false,
    });
    viewToDos.displayToDos();
  },
  changeToDos: function(todoIndex, todoText) {
    // let a = NaN;
    // if (a !==a || todoIndex < 0 || todoIndex >= this.todos.length) return;
    todoText = todoText.trim();
    if (todoText.length === 0) return;

    this.todos[todoIndex].todoText = todoText;
    viewToDos.displayToDos();
  },
  deleteToDos: function(todoIndex) {
    this.todos.splice(todoIndex,1);
    viewToDos.displayToDos();
  },
  toggleToDos: function(todoIndex) {
    let todo = this.todos[todoIndex];
    todo.completed = !todo.completed;
    viewToDos.displayToDos();
  },
  toggleAll: function() {
    let totalToDos = this.todos.length;
    let completedToDos = 0;

    this.todos.forEach(function(todo) {
      if (todo.completed === true) { // counting the amount of the to dos completed
        completedToDos++;
      }
    });

    let allCompleted = (completedToDos === totalToDos); //if everything is completed the value is true

    this.todos.forEach((todo) => {
        todo.completed = !allCompleted;
      });



    // if(completedToDos === totalToDos) {
    //   for(i = 0; i < totalToDos; i++) {
    //   this.todos[i].completed = false;
    //   }
    // } else {
    //   for(i = 0; i < totalToDos; i++){
    //     this.todos[i].completed = true;
    //   }
    // }
    viewToDos.displayToDos();
  }
};

let handlers = {
  displayToDos: function() {
    toDoList.displayToDos();
  },
  addToDos: function() {
    let newToDoInput= document.getElementById("newToDoInput");
    toDoList.addToDos(newToDoInput.value);
    newToDoInput.value = "";
    viewToDos.displayToDos();
  },
  changeToDos: function() {
    let changeToDosPosition = document.getElementById("changeToDosPosition")
    let changeToDosText = document.getElementById("changeToDosText")
    toDoList.changeToDos(changeToDosPosition.valueAsNumber, changeToDosText.value);
    changeToDosPosition.value = "";
    changeToDosText.value = "";
    viewToDos.displayToDos();

  },
  // deleteToDos: function(todoIndex) {
  //   toDoList.deleteToDos(todoIndex);
  //   viewToDos.displayToDos();
  //
  // },
  // toggleToDos: function(todoIndex) {
  //   toDoList.toggleToDos(todoIndex);
  //   viewToDos.displayToDos();
  //
  // },
  toggleAll: function() {
    toDoList.toggleAll();
    viewToDos.displayToDos();
  }
};

let viewToDos = {
  generation: 0,
  displayToDos: function() {

        let toDosUl = document.querySelector("ul");

        toDosUl.innerHTML = "";
        toDoList.todos.forEach(function(todo, todoIndex) {
          let toDoLi = document.createElement("li");
          let toDoTextWithCompletion = "";

          if(todo.completed === true) {
            toDoTextWithCompletion = "(x)" + todo.todoText;
          } else {
              toDoTextWithCompletion = "( )" + todo.todoText;
            }
          toDoLi.id = todoIndex;
          toDoLi.textContent = toDoTextWithCompletion;
          toDoLi.appendChild(this.createToggleToDoButton(todo.completed));
          toDoLi.appendChild(this.createDeleteToDoButton());
          toDosUl.appendChild(toDoLi);
        }, this);
  },
  createDeleteToDoButton: function() {
    let deleteToDoButton = document.createElement("button");
    deleteToDoButton.textContent = "Delete To Do";
    deleteToDoButton.className = "deleteToDoButton";
    return deleteToDoButton;
  },
  createToggleToDoButton: function(completed) {
    let toggleToDoButton = document.createElement("button");
    if (!completed) {
      toggleToDoButton.textContent = "Mark as completed";
    } else {
      toggleToDoButton.textContent = "Untick as completed";
      }
    toggleToDoButton.className = "toggleToDoButton";
    return toggleToDoButton;
  },
  // createChangeToDoButton: function() {
  //   let changeToDoButton = document.createElement("button");
  //   changeToDoButton.textContent = "Change"
  // },
  setUpEventListeners: function () {
    let toDosUl = document.querySelector("ul");

    toDosUl.addEventListener("click", function(event) {

      let elementClicked = event.target;
      if (elementClicked.className === "deleteToDoButton") {
        toDoList.deleteToDos(parseInt(elementClicked.parentNode.id));
      }
      if (elementClicked.className === "toggleToDoButton") {
        toDoList.toggleToDos(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};
viewToDos.setUpEventListeners();



// toDoList.displayToDos();
// toDoList.addToDos('item 4');
// toDoList.addToDos('item 5');
// toDoList.addToDos('item 6');
// toDoList.changeToDos(1, 'new item');
// // toDoList.deleteToDos(0,1);
// toDoList.toggleToDos(1);
// toDoList.toggleAll();
