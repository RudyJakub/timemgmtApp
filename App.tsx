import React, {useRef} from 'react'
import { SafeAreaView, ScrollView, Text, StyleSheet, View, Animated, useWindowDimensions } from 'react-native'
import TodoPage from './components/todoPage';

const pages: React.FC[] = [TodoPage, TodoPage, TodoPage]

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
          scrollEventThrottle={1}>
          {pages.map((page, pageIndex) => {
            return (
              <View style={{width: windowWidth, height: 600}} key={pageIndex}>
                <View style={{ marginLeft: 30, marginRight: 30 }}>               
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