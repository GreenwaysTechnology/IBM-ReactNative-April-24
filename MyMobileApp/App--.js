import { StyleSheet, Text, View } from "react-native"


//component 
function App() {

    //jsx
    return <View style={styles.container}>
        <Text style={styles.label}>Hello</Text>
        <Text style={styles.label}>Hello</Text>
        <Text style={{
            color: 'red',
            textAlign: 'center',
            fontSize: 40
        }}>Hello</Text>

    </View>

}
//declare stylesheet
const styles = StyleSheet.create({
    container: {
        flex:1,
        //backgroundColor: 'yellow',
        backgroundColor: '#f4e1d2',
        paddingTop: 10,
        paddingBottom:10,
        paddingLeft:10,
        paddingRight:10
    },
    label: {
        color: 'blue',
        textAlign: 'center',
        fontSize: 40
    }
})

export default App