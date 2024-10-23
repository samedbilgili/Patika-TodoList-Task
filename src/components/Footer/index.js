function Footer({ todoList, filter, setFilter, setTodoList }) {
    const activeCount = todoList.filter(item => item.status === 'active').length;
    const completedCount = todoList.filter(item => item.status === 'completed').length;


    return <>
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount} </strong>
                items left
            </span>

            <ul className="filters">
                <li>
                    <a href="#/" className={filter == 'all' ? 'selected' : ''} onClick={() => setFilter('all')} >All</a>
                </li>
                <li>
                    <a href="#/" className={filter == 'active' ? 'selected' : ''} onClick={() => setFilter('active')}>Active</a>
                </li>
                <li>
                    <a href="#/" className={filter == 'completed' ? 'selected' : ''} onClick={() => setFilter('completed')}>Completed</a>
                </li>
            </ul>


            {completedCount > 0 && <button className="clear-completed" onClick={() => { setTodoList(todoList.filter(item => item.status != 'completed')) }}>
                Clear completed
            </button>}

        </footer>
    </>
}

export default Footer;