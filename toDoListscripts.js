let toDoList = {
  todos: [],
  displayToDos: function() {
    if(this.todos.length === 0) {
      console.log('Your To Do list is empty');
    } else {
        console.log('My todos: ');
        this.todos.forEach(function(todo) {
          if(todo.completed === true) {
            console.log('(x)', todo.todoText);
          } else {
              console.log('()', todo.todoText);
            }
        });
      }
  },
  addToDos: function(todoText) {
    todoText = todoText.trim();
    if (todoText.length === 0) return;

    this.todos.push({
      todoText: todoText,
      completed: false,
    });
    this.displayToDos();
  },
  changeToDos: function(todoIndex, todoText) {
    // let a = NaN;
    // if (a !==a || todoIndex < 0 || todoIndex >= this.todos.length) return;
    todoText = todoText.trim();
    if (todoText.length === 0) return;

    this.todos[todoIndex].todoText = todoText;
    this.displayToDos();
  },
  deleteToDos: function(todoIndex) {
    this.todos.splice(todoIndex,1);
    this.displayToDos();
  },
  toggleToDos: function(todoIndex) {
    // let a = NaN; // Since NaN is the only JavaScript value that is treated as unequal to itself,
    // // you can always test if a value is NaN by checking it for equality to itself:
    //
    // if (a !==a || todoIndex < 0 || todoIndex >= this.todos.length) return;

    let todo = this.todos[todoIndex];
    todo.completed = !todo.completed;
    this.displayToDos();
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
    toDoList.displayToDos();
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
  deleteToDos: function(todoIndex) {
    toDoList.deleteToDos(todoIndex);
    viewToDos.displayToDos();

  },
  toggleToDos: function() {
    let toggleToDosPositionInput = document.getElementById("toggleToDosPositionInput");
    toDoList.toggleToDos(toggleToDosPositionInput.valueAsNumber);
    toggleToDosPositionInput.value = "";
    viewToDos.displayToDos();

  },
  toggleAll: function() {
    toDoList.toggleAll();
    viewToDos.displayToDos();
  }
};

let viewToDos = {
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
      toDoLi.appendChild(this.createDeleteToDoButton())
      toDosUl.appendChild(toDoLi)
    }, this);
  },
  createDeleteToDoButton: function() {
    let deleteToDoButton = document.createElement("button");
    deleteToDoButton.textContent = "Delete ToDo";
    deleteToDoButton.className = "deleteToDoButton";
    return deleteToDoButton;
  },
  setUpEventListeners: function () {
    let toDosUl = document.querySelector("ul");

    toDosUl.addEventListener("click", function(event) {

      let elementClicked = event.target;
      if (elementClicked.className === "deleteToDoButton") {
        handlers.deleteToDos(parseInt(elementClicked.parentNode.id));
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
