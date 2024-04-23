import { StyleSheet, Text, View } from "react-native"
import { Review } from "./components/Review"


//component 
function App() {
    return <View style={styles.container}>
         <Review/>
    </View>

}
//declare stylesheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'yellow',
        backgroundColor: '#f4e1d2',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
    }
})

export default App