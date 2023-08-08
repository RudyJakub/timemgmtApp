import React from 'react'
import { ScrollView, Text, StyleSheet, View, TextInput } from 'react-native'
import TodoItem from './todoItem'

const AddTodo: React.FC = () => {
    return (
        <View style={styles.addTodoField}>
            <Text>Add new task</Text>
            <TextInput />
        </View>
    )
}

const styles = StyleSheet.create({
    addTodoField: {
        marginTop: 5,
        borderWidth: 3,
        backgroundColor: "red"
    }
})

export default AddTodo

