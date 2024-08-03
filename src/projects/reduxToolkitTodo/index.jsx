import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'
import { store } from './app/store'

const ReduxToolkitTodo = () => {
    return (
        <Provider store={store}>
            <AddTodo />
            <Todos />
        </Provider>
    )
}

export default ReduxToolkitTodo;