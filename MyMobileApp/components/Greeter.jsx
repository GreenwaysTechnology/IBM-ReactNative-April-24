import { Text } from "react-native";


export function Greeter({ message }) {
    return <Text style={{
        color: 'red',
    }}>
        {message}
    </Text>
}
//default Message 
Greeter.defaultProps = {
    message: 'Welcome'
}