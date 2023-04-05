import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert, Button, Text,TouchableHighlight, View, Image, SafeAreaView, Platform, Dimensions } from 'react-native';
// SafeAreaView is an iOS only feature. Androids will need extra buffers 
import { useWindowDimensions } from 'react-native';
import {useDeviceOrientation} from '@react-native-community/hooks'



export default function App() {

  // console.log(Dimensions.get("screen"));
// This will tell me the dimensions of the screen my app is working on

  // console.log(useWindowDimensions(window));
  // This will also display the dimension of the screen my app is working on, but will account for orientation

  // console.log(useDeviceOrientation());
  // This will log whether my device is in landscape or portrait mode

  const orientation = useDeviceOrientation();
// console.log(useDeviceOrientation() === 'landscape');
  // by utilizing useDeviceOrientation in this way I can take the object and dynamically style components to orientate a specific way depending on whether the device is in landscape or portrait mode
  // I am unable to deconstruct the useDeviceOrientation into it's respective objects as variables and must refer to them as strings

  const handlePress = () => {
    console.log("text pressed")
  }

  const handleButton = () => {
    Alert.prompt("My title", "My message", text => console.log(text))
    // Alert.alert("My Title", "My Message", [
    //   {text: "Yes"}, {text: "No"}])
  }

  return (
    <SafeAreaView style={styles}>
      <View style={{
        backgroundColor: "white",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center", //primary axis
        alignItems: "center", //secondary axis (this will override the SafeAreaView if flexWrap is not present)
        // alignContent: "center", // this works in tandem with alignItems (this will override the SafeAreaView)
        flexWrap: "wrap",
        // width: '100%',
        // height: orientation === 'landscape' ? '100%' : '30%',
        }}>
          <View style={{
            backgroundColor: 'dodgerblue',
            width: 100,
            height: 100,
            // alignSelf: 'flex-start', //this is a property that works in tandem with "alignItem": whereas "alignItem" controls the container, "alignSelf" aligns the specific item it is associated with
          }}/>
          <View style={{
            backgroundColor: 'gold',
            width: 100,
            height: 100,
          }}/>
          <View style={{
            backgroundColor: 'tomato',
            width: 100,
            height: 100,
          }}/>
          <View style={{
            backgroundColor: 'grey',
            width: 100,
            height: 100,
          }}/>
          <View style={{
            backgroundColor: 'green',
            width: 100,
            height: 100,
          }}/>
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
const containerStyle = {backgroundColor: "white"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', //this property aligns items along the secondary access (vertically)
    justifyContent: 'center', //this aligns items across the primary axis (horizontally)
    // flexDirection: 'row', //this aligns items horizontally
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
