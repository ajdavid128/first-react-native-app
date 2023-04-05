import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert, Button, Text,TouchableHighlight, View, Image, SafeAreaView, Platform, Dimensions } from 'react-native';
// SafeAreaView is an iOS only feature. Androids will need extra buffers 
export default function App() {

  console.log(Dimensions.get("screen"));

  const handlePress = () => {
    console.log("text pressed")
  }

  const handleButton = () => {
    Alert.prompt("My title", "My message", text => console.log(text))
    // Alert.alert("My Title", "My Message", [
    //   {text: "Yes"}, {text: "No"}])
  }

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <View style={{
        backgroundColor: "blue",
        width: '100%',
        height: '30%'
        }}>

      </View>
      {/* <Text>Hello World!</Text>
      <Button 
        color="blue"
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
      <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

// Utilizing both style objects is possible using an array inside the element attribute. the attribute to the right will always take precedence over the attribute to its left.
const containerStyle = {backgroundColor: "orange"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
