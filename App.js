import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {

  const handlePress = () => {
    console.log("text pressed")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World!</Text>
      <Image source={require('./assets/favicon.png')}/>
      <Text numberOfLines={1} onPress={handlePress}>This is a demonstration of how text can be truncated using the 'numberOfLines' attribute</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
