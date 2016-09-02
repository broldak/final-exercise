var TodoInput = React.createClass({
  getInitialState() {
    return {value: this.props.value};
  },

  changeHandler(e) {
    this.setState({value: e.target.value});
  },

  _keyDown(e) {
    if (e.keyCode === 13) {
      this.props.finishEditing(this.state.value);
    }
  },

  render() {
    return (
      <input
        className="todo-edit"
        value={this.state.value}
        autoFocus
        onKeyDown={this._keyDown}
        onChange={this.changeHandler}
      />
    );
  }
});

var TodoItem = React.createClass({
  getInitialState() {
    return {isEditing: false}
  },

  deleteHandler(e) {
    this.props.onDeleteTodo(e);
  },

  doubleClickHandler(e) {
    if (!this.state.isEditing) {
      this.setState({isEditing: true});
    }
  },

  finishEditing(value) {
    if (value === '') {
      this.props.onDeleteTodo(this.props.todo);
    } else {
      this.props.editTodo(this.props.todo, value);
    }

    this.setState({isEditing: false});
  },

  render() {
    var input;

    if (this.state.isEditing) {
      input = <TodoInput value={this.props.todo.title} finishEditing={this.finishEditing} />
    }

    return (
      <div className="todo-item">
        <div
          className="todo-title"
          onDoubleClick={this.doubleClickHandler}>
          {this.props.todo.title}
          {input}
        </div>

        <a href="#" className="destroy-todo delete-icon" onClick={this.deleteHandler}></a>
      </div>
    );
  }
});

var EmptyMessage = React.createClass({
  render() {
    return (
      <div className="empty-message">You have nothing to do?</div>
    );
  }
});

var AddTodoForm = React.createClass({
  getInitialState() {
    return {todo: ''};
  },

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.todo != '') {
      this.props.onTodoCreate(this.state.todo);
      this.setState({todo: ''});
    }
  },

  handleClearTodo(e) {
    this.setState({todo: ''})
  },

  changeHandler(e) {
    this.setState({todo: e.target.value});
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.changeHandler}
          value={this.state.todo}
          placeholder="Enter Todo..." />
        <a onClick={this.handleClearTodo}
          className="clear-todo-input delete-icon"
          href="#">
        </a>
      </form>
    )
  }
});

var TodoListApp = React.createClass({
  getInitialState() {
    return JSON.parse(localStorage.getItem('todos') || '{"todos": []}');
  },

  addTodo(todo) {
    var {todos} = this.state;

    todos.push({title: todo});
    localStorage.setItem('todos', JSON.stringify({todos: todos}));

    this.setState({todos});
  },

  deleteTodo(todo) {
    var {todos} = this.state;
    var filteredTodos = todos.filter(function(item) {
      return todo != item;
    });

    localStorage.setItem('todos', JSON.stringify({todos: filteredTodos}));
    this.setState({todos: filteredTodos});
  },

  editTodo(original, todo) {
    var {todos} = this.state;

    var todoToEdit = todos.filter(function(item) {
      return original == item;
    });

    todoToEdit[0].title = todo;
    localStorage.setItem('todos', JSON.stringify({todos: todos}));
    this.setState({todos: todos});
  },

  render() {
    var todoList;

    if (this.state.todos.length === 0) {
      todoList = <EmptyMessage />;
    } else {
      todoList = <ul>{
        this.state.todos.map((todo, i) => {
          return (
            <TodoItem
              key={i}
              todo={todo}
              onDeleteTodo={this.deleteTodo.bind(this, todo)}
              editTodo={this.editTodo}
            />
          )
        })
      }</ul>;
    }

    return (
      <div className="todo-app">
        <AddTodoForm
          onTodoCreate={this.addTodo}
        />
        <div className="todo-list">
          {todoList}
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <TodoListApp />,
  document.getElementById('app')
);
