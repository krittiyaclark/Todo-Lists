var todoList = {
  todos: [],
/*   displayTodos: function() {
    if (this.todos.length === 0) {
       console.log('Your todos list is empty!');
    } else {
      console.log('My Todos:');
      for (var i = 0; i < this.todos.length; i++) {
        //console.log(this.todos[i].todoText);
        if (this.todos[i].completed === true) {
           console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  }, */
  addTodo: function(todoText) {
  this.todos.push({
    todoText: todoText,
    completed: false
  });
  // this.displayTodos();
},
changeTodo: function(position, todoText) { 
  this.todos[position].todoText = todoText;
  // this.displayTodos(); 
},
deleteTodo: function(position) {
  this.todos.splice(position, 1);
  // this.displayTodos(); 
 },
 toggleCompleted: function(position) {
   var todo = this.todos[position];
   todo.completed = !todo.completed;
   // this.displayTodos();
 },
 toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    // Get number of completed todos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
   
   // Case 1: If everything's true, make everything false.
   if (completedTodos === totalTodos) {
     // Make everthing false.
     for (i = 0; i < totalTodos; i++) {
      this.todos[i].completed = false; 
     }
     // Case 2: Otherwise make everything true.
   } else {
   for (i = 0; i < totalTodos; i++) {
      this.todos[i].completed = true; 
   }
 }
 
 // this.displayTodos();
 }
};

/*
// 1. We want to get access to the display todos button.
var displayTodosButton = document.getElementById('displayTodosButton');

var toggleAllButton = document.getElementById('toggleAllButton');

// 2. We want to run displayTodos method, when someone clicks the display.
displayTodosButton.addEventListener('click', function() {
  todoList.displayTodos();
});

toggleAllButton.addEventListener('click', function() {
  todoList.toggleAll();
});
*/

var handlers = {
/*  displayTodos: function() {
    todoList.displayTodos();
  },  */
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
     addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
    toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

var view = {
  displayTodos: function() {
    // Grap 'ul'.
    var todosUl = document.querySelector('ul');
    // At the beginning starts from zero. Clear 'ul'.
    todosUl.innerHTML = '';
    // Create 'li' for each item in the todos array.
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';
      
      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }
      
      // Take 'li' and access 'li' text content property and set it todos property of each todos object.
      // todoLi.textContent = todoList.todos[i].todoText;
      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  }
};



