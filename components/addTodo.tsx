import React, { useState } from 'react'
import { ScrollView, Text, StyleSheet, View, TextInput, Button } from 'react-native'
import TodoItem from './todoItem'
import useTodoStore from '../store/todoStore'
import { Todo } from '../types/todo'

const AddTodo: React.FC = () => {
    
    const [textInput, setTextInput] = useState<string>('')
    const addTodo = useTodoStore((state) => state.addTodo)

    const handleAddButton = () => {
        const date = new Date()
        const dateFormated = date.toLocaleTimeString()
        addTodo({text: textInput!, date: dateFormated, done: false})
        setTextInput('')
    }

    return (
        <View style={styles.addTodoField}>
            <TextInput style={styles.textInput} value={textInput} onChangeText={setTextInput} />
            <Button title="ADD" onPress={handleAddButton}/>
        </View>
    )
}

const styles = StyleSheet.create({
    addTodoField: {
        marginTop: 5,
        borderWidth: 3,
        backgroundColor: "cyan"
    },
    textInput: {
        margin: 5
    }
})

export default AddTodo

