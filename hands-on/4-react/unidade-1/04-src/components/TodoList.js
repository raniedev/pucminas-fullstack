import { useState }  from "react";
import { TodoListItem } from './TodoListItem';

export const TodoList = () => {
    const defaultListItems = [
        {name: 'Tarefa 1', isCompleted: false},
        {name: 'Tarefa 2', isCompleted: false},
        {name: 'Tarefa 3', isCompleted: false},
        {name: 'Tarefa 4', isCompleted: false}
    ];
    const [items, setItems] = useState(defaultListItems);
    const [taskValue, setTaskValue] = useState('');
    const handleTaskeSubmit = (event) => {
        if(items.find(i => i.name === taskValue)) {
            event.preventDefault();
            return;
        }
        setItems([...items, {name: taskValue, isCompleted: false}])
        setTaskValue('')
        event.preventDefault();
    };

    const handleOnTaskChanged = (event, item) => {
        setItems(items.map(i => {
            if (i.name === item.name) {
                return {
                    ... i,
                    isCompleted: event.target.checked
                }
            }

            return i;
        }))
    };

    return (
        <div class="todo-list-container">
            <p>Você concluiu um total de {items.filter(i => i.isCompleted).length}</p>
            <form onSubmit={handleTaskeSubmit}>
                <input 
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    value={taskValue}
                    onChange={(event) => setTaskValue(event.target.value)}
                />
                
                <button type="submit">Adicionar Tarefa</button>
            </form>
            <ul>
                {items.map((item) => (
                    <TodoListItem onTaskChanged={handleOnTaskChanged} item={item} />
                ))}
            </ul>
        </div>
    );
};