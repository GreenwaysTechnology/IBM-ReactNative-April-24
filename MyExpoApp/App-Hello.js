import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export const Greeter =props=>{
  return <Text>{props.message}</Text>
}

export default function App() {
  return (
    <View style={styles.container}>
      <Greeter message="Hello!"/>
      <Greeter message="Hello!"/>
      <Greeter message="Hello!"/>
      <Greeter message="Hello!"/>
      <Greeter message="Hello!"/>

      <StatusBar style="auto" />
    </View>
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
