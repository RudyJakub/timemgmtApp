import React from 'react'
import { ScrollView, Text, StyleSheet, View, Button } from 'react-native'
import useTodoStore from '../store/todoStore'
import { Todo } from '../types/todo'

const TodoItem: React.FC<Todo> = (props: Todo) => {

    const removeTodo = useTodoStore((state) => state.removeTodo)
    const todo: Todo = { text: props.text, date: props.date, done: props.done }

    return (
        <View style={styles.todoItem}>
            <Text style={styles.todoText}>{props.text}</Text>
            <Text style={styles.date}>{props.date}</Text>
            <Button color='red' onPress={() => removeTodo(todo)} title="I did it!"/>
        </View>
    )
}

const styles = StyleSheet.create({
    todoItem: {
        marginTop: 2,
        backgroundColor: "cyan",
        borderWidth: 3,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    todoText: {
        margin: 20,
        textAlign: 'left',
    },
    date: {
        margin: 10,
        textAlign: 'right',
    },
    button: {
        margin: 5
    }
})

export default TodoItem