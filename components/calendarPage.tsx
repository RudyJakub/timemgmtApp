import React, { useState, useEffect } from 'react'
import { ScrollView, Text, StyleSheet, View, Button } from 'react-native'

const CalendarPage: React.FC = () => {

    return (
        <View style={styles.calendarContainer}>
            <Text style={styles.text}>This is calendar page</Text>
        </View>
    )
}

export default CalendarPage

const styles = StyleSheet.create({
    calendarContainer: {
        backgroundColor: "cyan"
    },
    text: {
        justifyContent: 'center',
        marginBottom: 100
    }
})