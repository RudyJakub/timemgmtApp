import React, {useState } from 'react'
import { ScrollView, Text, StyleSheet, View, Button } from 'react-native'
import TodoItem from './todoItem'
import AddTodo from './addTodo'

const todos = ["todo item 1", "todo item 1","todo item 1","todo item 1"]
const today = new Date()

const TodoPage: React.FC = () => {
    return (
        <View>
            <ScrollView>
                {todos.map((todo, todoIndex) => {
                    return (
                        <TodoItem todoText={todo} dateCreated={today.toLocaleString('en-US')} key={todoIndex}/>
                    )
                })}
            </ScrollView>
            <AddTodo />
        </View>
    )
}

export default TodoPage
