import logo from './logo.svg';
import './App.css';
import HeaderForm from './components/HeaderForm';
import List from './components/List';
import Footer from './components/Footer';
import { useState, useEffect } from "react";

const initialData = [{ status: 'completed', todoName: "Learn JavaScript" },
{ status: 'active', todoName: "Learn Data" },
{ status: 'active', todoName: "Have a life!" }];

function App() {

  const [todoList, setTodoList] = useState(initialData);
  const [filter, setFilter] = useState("all");

  const filteredTodoList = filter == 'all' ? todoList : todoList.filter(x => x.status == filter);

  useEffect(() => {
    console.log('TodoList', todoList);
  }, [todoList]);

  return (
    <section className="todoapp">
      <HeaderForm todoList={todoList} setTodoList={setTodoList} />
      <List filteredTodoList={filteredTodoList} todoList={todoList} setTodoList={setTodoList} />
      <Footer todoList={todoList} filter={filter} setFilter={setFilter} setTodoList={setTodoList} />
    </section>
  );
}

export default App;
