import React, { useEffect, useState } from 'react'
import { TodoProvider } from './contexts';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

const TodoLocal = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
    };

    const updateTodo = (id, todo) => {
        setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
    };

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
    };

    const toggleComplete = (id) => {
        setTodos((prev) => (
            prev.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
        ))
    };

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos"))
        if (todos && todos.length > 0) {
            setTodos(todos)
        }
    },[]);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    return (
        <TodoProvider value={{ addTodo, updateTodo, deleteTodo, toggleComplete, todos }}>
            <div className="bg-[#172842] min-h-screen py-8" style={{backgroundImage: "url('https://images.unsplash.com/photo-1644329771909-b651e30c41da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
                <h1 className='text-center text-3xl text-white'>Right Choice</h1>
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo) => (
                            <div className='w-full' key={todo.id}>
                                <TodoItem todo={todo} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </TodoProvider>
    )
}

export default TodoLocal;