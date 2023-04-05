import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert, Button, Text,TouchableHighlight, View, Image, SafeAreaView } from 'react-native';

export default function App() {

  const handlePress = () => {
    console.log("text pressed")
  }

  const handleButton = () => {
    Alert.prompt("My title", "My message", text => console.log(text))
    // Alert.alert("My Title", "My Message", [
    //   {text: "Yes"}, {text: "No"}])
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World!</Text>
      <Button 
        color="orange"
        title="click me" 
        onPress={handleButton}
      />
      <TouchableHighlight onPress={handlePress}>
      <Image 
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300"
        }}
      />
      </TouchableHighlight>
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
