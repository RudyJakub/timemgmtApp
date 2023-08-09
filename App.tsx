import React, {useRef} from 'react'
import { SafeAreaView, ScrollView, Text, StyleSheet, View, Animated, useWindowDimensions } from 'react-native'
import TodoPage from './components/todoPage';
import CalendarPage from './components/calendarPage';
import CanvasPage from './components/canvasPage';

const pages: React.FC[] = [TodoPage, CalendarPage, CanvasPage]
const headers: string[] = ["Todo List", "Event Calendar", "Canvas Test"]


const App: React.FC = () => {
  const scrollX = useRef(new Animated.Value(0)).current
  const {width: windowWidth} = useWindowDimensions()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ], {useNativeDriver: false})}
          scrollEventThrottle={3}>
          {pages.map((page, pageIndex) => {
            return (
              <View style={{width: windowWidth, height: 400 }} key={pageIndex}>
                <Text style={{ fontSize: 40, textAlign: 'center'}}>{headers[pageIndex]}</Text> 
                <View style={{marginLeft: 30, marginRight: 30, marginTop: 30}}>
                  { React.createElement(page) }
                </View>
              </View>
            )
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    height: 600,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default App