import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location'


export default function App() {
    const [location, setLocation] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)

    useEffect(() => {
        async function init() {
            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                setErrorMsg('Permission Denined to access location')
                return
            }
            let location = await Location.getCurrentPositionAsync({})
            setLocation(location)

        }
        init()

    }, [])

    let text = 'Getting Location...'
    if (errorMsg) {
        text = errorMsg
    } else if (location) {
        text = JSON.stringify(location)
    }
    return <View style={styles.container}>
        <Text style={{ fontSize: 20, color: 'blue' }}>{text}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
