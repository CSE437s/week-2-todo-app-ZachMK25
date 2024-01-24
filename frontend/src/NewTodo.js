// import './NewTodo.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function NewTodo() {

    const [name, setName] = useState("");

    return (
        <>
            <form id="add-task-form" onSubmit={(e) => {
                e.preventDefault()
                // addTodo(name)
                console.log(name)

                const res = axios.post("localhost:16969/api/todos/addtask")


                setName("")
            }}>
                <input type="text" id="add-task-name" className="text-entry" placeholder="Add a new task!" value={name} onChange={(event) => setName(event.target.value)}/>
                <input type="submit" id="add-task" value="Add Task"/>
            </form>
        </>
    );
}

export default NewTodo;
