import { useState } from "react";

function HeaderForm({ todoList, setTodoList }) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTodo.trim()) {
      setTodoList([...todoList, { status: 'active', todoName: newTodo }]); // Bir Üst Componentdeki TodoList Statetimize Ekledik

      setNewTodo(""); // Todo girildikten sonra input'u temizler
    }
  };

  return <header className="header">
    <h1>todos</h1>
    <form>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)} // OnChange ile state güncelleme
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit(e); // Enter'a basıldığında submit
          }
        }}
      />
    </form>
  </header>
}

export default HeaderForm;

