import { StyleSheet, Text, View } from "react-native"
import { Posts } from "./components/Posts"
import { PostsFlatList } from "./components/PostsFlatList"
import { PostsFlatListSelection } from "./components/PostsFlatListSelection"
import { Courses } from "./components/SectionList"


//component 
function App() {
    return <View style={styles.container}>
        {/* <Posts/> */}
        {/* <PostsFlatList/> */}
        {/* <PostsFlatListSelection/> */}
        <Courses/>
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