import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View, Text, Button } from 'react-native'

const Stack = createNativeStackNavigator();

//Screens 
const HomeScreen = (props) => <View style={styles.container}>
    <Text style={{
        fontSize: 40,
    }}>Home Screen</Text>
    <Button title="Profile" onPress={() => {
        props.navigation.navigate('Profile')
    }} />
</View>

const ProfileScreen = () => <View style={styles.container}>
    <Text style={{
        fontSize: 40,
    }}>Profile Screen</Text>
</View>

const App = props => {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    </NavigationContainer>
}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
