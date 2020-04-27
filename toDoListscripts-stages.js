// // let toDoList = {
// //   todos: ['item 1', 'item 2', 'item 3'],
// //   displayToDos: function() {
// //     console.log('My todos: ', this.todos);
// //   },
// //   addToDos: function(...todos) {
// //     this.todos.push(...todos);
// //     this.displayToDos();
// //   },
// //   changeToDos: function(position, newValue) {
// //     this.todos[position] = newValue;
// //     this.displayToDos();
// //   },
// //   deleteToDos: function(position,amount) {
// //     this.todos.splice(position,amount);
// //     this.displayToDos();
// //   }
// // };
// // toDoList.displayToDos();
// // toDoList.addToDos('item 4', 'item 5', 'item 6');
// // toDoList.changeToDos(1, 'new item');
// // toDoList.deleteToDos(0,2)
// // // -----------------------------------------//
// // // Stage 2 (Version 4 in Watch and Code)
// // let toDoList = {
// //   todos: [],
// //   displayToDos: function() {
// //     console.log('My todos: ', this.todos);
// //   },
// //   addToDos: function(...todoText) {
// //     this.todos.push({
// //     todoText: todoText,
// //     completed: false
// //     });
// //     this.displayToDos();
// //   },
// //   changeToDos: function(position, todoText) {
// //     this.todos[position].todoText = todoText;
// //     this.displayToDos();
// //   },
// //   deleteToDos: function(position,amount) {
// //     this.todos.splice(position,amount);
// //     this.displayToDos();
// //   },
// //   toggleToDos: function(position) {
// //     let todo = this.todos[position];
// //     todo.completed = !todo.completed;
// //     this.displayToDos();
// //   }
// // };
// // toDoList.displayToDos();
// // toDoList.addToDos('item 4', 'item5', 'item6');
// // toDoList.changeToDos(0, 'new item');
// // // toDoList.deleteToDos(0,1);
// // toDoList.toggleToDos(0)
// //
// // -------------------------------- STAGE 5 ----------------------------------//
//
//
// // let toDoList = {
// //   todos: [],
// //   displayToDos: function() {
// //     console.log('My todos: ', this.todos);
// //   },
// //   addToDos: function(todoText) {
// //     this.todos.push({
// //     todoText: todoText,
// //     completed: false,
// //     });
// //     this.displayToDos();
// //   },
// //   changeToDos: function(i,todoText) {
// //     this.todos[i].todoText = todoText;
// //     this.displayToDos();
// //   },
// //   deleteToDos: function(position,amount) {
// //     this.todos.splice(position,amount);
// //     this.displayToDos();
// //   },
// //   toggleToDos: function(i) {
// //     let todo = this.todos[i];
// //     todo.completed = !todo.completed;
// //     this.displayToDos();
// //   },
// //   toggleAll: function() {
// //     let totalToDos = this.todos.length;
// //     let completedToDos = 0;
// //     for(var i = 0; i < totalToDos; i++) {
// //       if(this.todos[i].completed === true) { // counting the amount of the to dos completed
// //       completedToDos++;
// //     }
// //   }
// //     let allCompleted = (completedToDos === totalToDos); //if everything is completed the value is true
// //     for(var i = 0; i < totalToDos; i++) {
// //       this.todos[i].completed = !allCompleted;
// //     }
// //
// //     // if(completedToDos === totalToDos) {
// //     //   for(i = 0; i < totalToDos; i++) {
// //     //   this.todos[i].completed = false;
// //     //   }
// //     // } else {
// //     //   for(i = 0; i < totalToDos; i++){
// //     //     this.todos[i].completed = true;
// //     //   }
// //     // }
// //     toDoList.displayToDos();
// //   }
// // };
// // -------------------------------- STAGE 6 ----------------------------------//
// let toDoList = {
//   todos: [],
//   displayToDos: function() {
//     if(this.todos.length === 0) {
//       console.log('Your To Do list is empty');
//   } else {
//       console.log('My todos: ');
//       for(i = 0; i < this.todos.length; i++) {
//         if(this.todos[i].completed === true) {
//           console.log('(x)', this.todos[i].todoText);
//         } else {
//           console.log('()', this.todos[i].todoText);
//         }
//     }
//           }
//   },
//   addToDos: function(...todoTexts) {
//     for(var i = 0; i < todoTexts.length; i++) {
//       this.todos.push({
//         todoText: todoTexts[i],
//         completed: true,
//       });
//     }
//   },
//   // toggleToDos: function(i) {
//   //   let todo = this.todos[i];
//   //   todo.completed = !todo.completed;
//   //   this.displayToDos();
//   // },
//   toggleAll: function() {
//     let totalToDos = this.todos.length;
//     let completedToDos = 0;
//
//     for(i = 0; i < totalToDos; i++) {
//       if(this.todos[i].completed === true) { // counting the amount of the to dos completed
//         completedToDos++;
//       }
//     }
//     if(completedToDos === totalToDos) {
//       for(i = 0; i < totalToDos; i++) {
//       this.todos[i].completed = false;
//       }
//     } else {
//       for(i = 0; i < totalToDos; i++){
//         this.todos[i].completed = true;
//       }
//     }
//     toDoList.displayToDos();
//   }
// }
//
// let displayToDosButton = document.getElementById("displayToDosButton");
// let toggleAllButton = document.getElementById("toggleAllButton");
//
// displayToDosButton.addEventListener("click", function(){
//   toDoList.displayToDos();
// });
//
// toggleAllButton.addEventListener("click", function() {
//   toDoList.toggleAll();
// });
//
//
// // toDoList.displayToDos();
// // toDoList.addToDos('item 4');
// // toDoList.addToDos('item 5');
// // toDoList.addToDos('item 6');
// // // toDoList.changeToDos(1, 'new item');
// // // toDoList.deleteToDos(0,1);
// // // toDoList.toggleToDos(1);
// // toDoList.toggleAll();

// // -------------------------------- STAGE 9 ----------------------------------//


let toDoList = {
  todos: [],
  displayToDos: function() {
    if(this.todos.length === 0) {
      console.log('Your To Do list is empty');
  } else {
      console.log('My todos: ');
      for(let i = 0; i < this.todos.length; i++) {
        if(this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('()', this.todos[i].todoText);
        }
    }
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
    if (todoIndex < 0 || todoIndex >= this.todos.length) return;
    todoText = todoText.trim();
    if (todoText.length === 0) return;

    this.todos[todoIndex].todoText = todoText;
    this.displayToDos();
  },
  deleteToDos: function(todoIndex) {
    if (todoIndex < 0 || todoIndex >= this.todos.length) return;

    this.todos.splice(todoIndex,1);
    this.displayToDos();
  },
  toggleToDos: function(todoIndex) {
    if (todoIndex < 0 || todoIndex >= this.todos.length) return;

    let todo = this.todos[todoIndex];
    todo.completed = !todo.completed;
    this.displayToDos();
  },
  toggleAll: function() {
    let totalToDos = this.todos.length;
    let completedToDos = 0;

    for (let i = 0; i < totalToDos; i++) {
      if (this.todos[i].completed === true) { // counting the amount of the to dos completed
        completedToDos++;
      }
    }

    let allCompleted = (completedToDos === totalToDos); //if everything is completed the value is true

    for(var i = 0; i < totalToDos; i++) {
      this.todos[i].completed = !allCompleted;
    }


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
  changeToDos: function(todoIndex) {
    let changeToDosPosition = document.getElementById("changeToDosPosition")
    let changeToDosText = document.getElementById("changeToDosText")
    toDoList.changeToDos(changeToDosPosition.valueAsNumber, changeToDosText.value);
    changeToDosPosition.value = "";
    changeToDosText.value = "";
    viewToDos.displayToDos();

  },
  deleteToDos: function() {
    let deleteToDosPositionInput = document.getElementById("deleteToDosPositionInput");
    toDoList.deleteToDos(deleteToDosPositionInput.valueAsNumber);
    deleteToDosPositionInput.value = "";
    viewToDos.displayToDos();

  },
  toggleToDos: function(todoIndex) {
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
    for(i = 0; i < toDoList.todos.length; i++) {
      let toDoLi = document.createElement("li");
      let todo = toDoList.todos[i];
      let toDoTextWithCompletion = "";

      if(todo.completed === true) {
        toDoTextWithCompletion = "(x)" + todo.todoText;
      } else {
          toDoTextWithCompletion = "( )" + todo.todoText;
        }

      toDoLi.textContent = toDoTextWithCompletion;
      toDosUl.appendChild(toDoLi)
    }
  },


}

// // -------------------------------- STAGE 10 ----------------------------------//
