import React, { Component } from 'react'
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

class TodoList extends Component {
    render() {
        return (
            <section>
                <h2>todo list</h2>
                <TodoInput />
            </section>


        )
    }
}

export default TodoList