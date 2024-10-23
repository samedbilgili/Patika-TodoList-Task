import { useState } from "react";

function TodoNameInput({ todo, todoList, setTodoList, index }) {
    const isCompleted = todo.status === 'completed' ? true : false;
    const [isEditing, setIsEditing] = useState(false);

    function handleChecbox(_index) {
        setTodoList(todoList.map((todo, index) => {
            if (_index == index) {
                todo.status = todo.status === 'completed' ? 'active' : 'completed'
            }
            return todo;
        }));
    }

    function handleUpdateTodo(e, _index) {
        setTodoList(todoList.map((todo, index) => {
            if (_index == index) {
                todo.todoName = e.target.value;
            }
            return todo;
        }));
    }


    function handleDeleteTodo(e, _index) {
        setTodoList(todoList.filter((item, index) => index != _index));
    }

    if (isEditing) {
        return <li className="editing" key={index}>
            <div>
                <input class="toggle" type="checkbox" checked={isCompleted && 'checked'} onChange={() => handleChecbox(index)} />
                <input className="edit"
                    value={todo.todoName}
                    onChange={(e) => handleUpdateTodo(e, index)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            setIsEditing(false);
                        }
                    }}
                    autoFocus
                />
                <button class="destroy" onClick={() => setIsEditing(false)}></button>
            </div>
        </li>
    } else {
        return <li class={isCompleted ? 'completed' : 'active'} key={index}>
            <div class="view">
                <input class="toggle" type="checkbox" checked={isCompleted && 'checked'} onChange={() => handleChecbox(index)} />
                <label onClick={() => { setIsEditing(true) }}>{todo.todoName}</label>
                <button class="destroy" onClick={(e) => handleDeleteTodo(e, index)}></button>
            </div>
        </li>
    }
}

function List({ filteredTodoList, todoList, setTodoList }) {

    function handleAllTodoCompleted() {
        setTodoList(todoList.map((todo) => {
            todo.status = 'completed';
            return todo;
        }));
    }

    return <section class="main">
        <input class="toggle-all" type="checkbox" />
        <label for="toggle-all" onClick={handleAllTodoCompleted}>
            Mark all as complete
        </label>

        <ul class="todo-list">
            {filteredTodoList.map((todo, index) => {
                return <TodoNameInput todo={todo} todoList={todoList} setTodoList={setTodoList} index={index} />
            })}
        </ul>
    </section>
}

export default List;