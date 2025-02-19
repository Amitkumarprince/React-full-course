import { useEffect, useState } from "react"
import "./Todo.css"
import { MdCheck, MdDelete } from "react-icons/md";
import { Time } from "./Time";
import { TodoForm } from "./TodoForm";

export const Todo = () => {
    const [task, setTask] = useState([])
    const [dateTime, setDateTime] = useState();



    const handleFormSubmit = (inputValue) => {

        if (!inputValue) return;

        // for checking in present
        if (task.includes(inputValue)) return;

        setTask((prevTask) => [...prevTask, inputValue]);

    }

    // Todo handleDeleteTodo function
    const handleDeleteTodo = (value) => {
        // console.log(task)
        // console.log(value)
        const updatdTask = task.filter((curTask) => curTask !== value)
        setTask(updatdTask)
    }

    // todo handleClearTodoData function
    const handleClearTodoData = () => {
        // console.log(task)
        setTask([])
    }


    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <Time />
            </header>

            <TodoForm onAddTodo={handleFormSubmit} />

            <section className="myUnOrdList">
                <ul>
                    {
                        task.map((curTask, index) => {
                            return <li key={index} className="todo-item">
                                <span>{curTask}</span>
                                <button className="check-btn">
                                    <MdCheck />
                                </button>
                                <button className="delete-btn" onClick={() => handleDeleteTodo(curTask)}>
                                    <MdDelete />
                                </button>
                            </li>
                        })
                    }
                </ul>
            </section>

            <section>
                <button className="clear-btn" onClick={handleClearTodoData}>Clear all</button>
            </section>

        </section>
    )
}

