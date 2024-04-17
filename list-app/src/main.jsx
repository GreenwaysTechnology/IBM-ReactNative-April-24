import ReactDOM from 'react-dom/client'

const todoList = [{
    id: 1,
    name: 'learn react',
    status: true
},
{
    id: 2,
    name: 'Learn next',
    status: false
},
{
    id: 3,
    name: 'learn es',
    status: true
},
{
    id: 4,
    name: 'learn Angular',
    status: true
}

]

const TodoList = props => {
    return <>
        <ul>
            {
                props.todos.map(todo => {
                    return <>
                        <Item todo={todo} />
                    </>
                })
            }
        </ul>
    </>
}

const Item = props => {
    const { name, status } = props.todo
    //if..else 
    // if (status) {
    //     return <li>{name} ✔ </li>
    // } else {
    //     return <li>{name}</li>
    // }
    return <li>{status ? `${name} ✔ ` : name}</li>
}

export const App = () => {
    return <>
        <TodoList todos={todoList} />
    </>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />
);