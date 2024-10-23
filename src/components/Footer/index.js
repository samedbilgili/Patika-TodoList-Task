function Footer({ todoList, filter, setFilter, setTodoList }) {
    const activeCount = todoList.filter(item => item.status === 'active').length;
    const completedCount = todoList.filter(item => item.status === 'completed').length;


    return <>
        <footer class="footer">
            <span class="todo-count">
                <strong>{activeCount} </strong>
                items left
            </span>

            <ul class="filters">
                <li>
                    <a href="#/" class={filter == 'all' && 'selected'} onClick={() => setFilter('all')} >All</a>
                </li>
                <li>
                    <a href="#/" class={filter == 'active' && 'selected'} onClick={() => setFilter('active')}>Active</a>
                </li>
                <li>
                    <a href="#/" class={filter == 'completed' && 'selected'} onClick={() => setFilter('completed')}>Completed</a>
                </li>
            </ul>


            {completedCount > 0 && <button class="clear-completed" onClick={() => { setTodoList(todoList.filter(item => item.status != 'completed')) }}>
                Clear completed
            </button>}

        </footer>
    </>
}

export default Footer;