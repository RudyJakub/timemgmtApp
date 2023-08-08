import React from 'react'
import { ScrollView, Text, StyleSheet, View } from 'react-native'

type TodoItemProps = {
    todoText: string
    dateCreated: string
}

const TodoItem: React.FC<TodoItemProps> = (props: TodoItemProps) => {
    return (
        <View style={styles.todoItem}>
            <Text style={styles.todoText}>{props.todoText}</Text>
            <Text style={styles.date}>{props.dateCreated}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    todoItem: {
        marginTop: 2,
        backgroundColor: "cyan",
        borderWidth: 3,
    },
    todoText: {
        margin: 10,
        textAlign: 'left',
    },
    date: {
        margin: 10,
        textAlign: 'right',
    }
})

export default TodoItem