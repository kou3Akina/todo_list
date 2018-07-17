new Vue({
    el: '#app2',
    data: {
      newtodo2: "",
      todos: []
    },
    methods: {
      addTodo2: function(event) {
        event.preventDefault();
        if (this.newtodo2 == "") return;
        this.todos.push({
          item: this.newtodo2
        });
        this.newtodo2 = "";
      },
      deleteTodo2: function(todo) {
        var index = this.todos.indexOf(todo);
        this.todos.splice(index, 1)
      }
    }
})
