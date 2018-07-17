new Vue({
    el: '#app1',
    data: {
      newtodo1: "",
      todos: []
    },
    methods: {
      addTodo1: function(event) {
        event.preventDefault();
        if (this.newtodo1 == "") return;
        this.todos.push({
          item: this.newtodo1
        });
        this.newtodo1 = "";
      },
      deleteTodo1: function(todo) {
        var index = this.todos.indexOf(todo);
        this.todos.splice(index, 1)
      }
    }
})
