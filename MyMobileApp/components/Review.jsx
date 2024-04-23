import { useState } from "react"
import { Text, StyleSheet, Button } from "react-native"

const Review = props => {

    const [like, setLike] = useState(0)

    const onLike = () => {
        setLike(like + 1)
    }
    return <>
        <Text style={styles.label}>Review</Text>
        <Text style={styles.label}>Like : {like}</Text>
        <Button
            onPress={onLike}
            title="Like"
            color="#841584"
        />
    </>
}

export { Review }

const styles = StyleSheet.create({
    label: {
        color: 'blue',
        textAlign: 'center',
        fontSize: 40
    }
})
