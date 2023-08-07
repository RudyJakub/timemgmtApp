import React, {useRef} from 'react'
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  Animated,
  useWindowDimensions,
} from 'react-native'

const Pages = {
  
}

const App = () => {
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
          {[1, 2, 3].map((pages, pageIndex) => {
            return (
              <View style={{width: windowWidth, height: 100}} key={pageIndex}>
                <View style={{ marginLeft: 40, marginRight: 40 }}>               
                  <Text>Hello</Text>
                </View>
              </View>
            );
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
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default App