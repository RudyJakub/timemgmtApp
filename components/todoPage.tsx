import React, { useState, useEffect } from 'react'
import { ScrollView, Text, StyleSheet, View, Button } from 'react-native'
import TodoItem from './todoItem'
import AddTodo from './addTodo'
import { Todo } from '../types/todo'
import useTodoStore from '../store/todoStore'

const TodoPage: React.FC = () => {
    const todos = useTodoStore().todos

    return (
        <View>
            <AddTodo />
            <ScrollView>
                {todos.map((todo, todoIndex) => {
                    return (
                        <TodoItem text={todo.text} date={todo.date} done={todo.done} key={todoIndex}/>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default TodoPage
