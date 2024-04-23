import { useEffect, useState } from 'react';
import { produce } from 'immer';
import { View, Text, TouchableHighlight, FlatList, ActivityIndicator, Alert,StyleSheet } from 'react-native'

const PostsFlatListSelection = props => {

    const [post, setPost] = useState({
        posts: [], //data
        error: null,
        isLoading: false
    })
    async function fetchPosts() {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        try {
            const response = await fetch(url)
            const posts = await response.json()
            console.log(posts)
            setPost(previousState => {
                return produce(previousState, draft => {
                    draft.posts = posts
                    draft.isLoading = true
                    draft.error = previousState.error
                })
            })
        }
        catch (err) {
            setPost(previousState => {
                return produce(previousState, draft => {
                    draft.error = err
                })
            })
        }
    }
    const onSelect = (item) => {
        Alert.alert(JSON.stringify(item))
    }
    useEffect(() => {
        fetchPosts()
    }, [])

    if (post.error) {
        return <View style={{ marginLeft: 50 }}>
            <Text>Error : {post.error.message}</Text>
        </View>
    } else if (!post.isLoading) {
        return <View style={{
            flex: 1,
            justifyContent: 'center',
        }}>
            <ActivityIndicator size="large" color="blue" />
        </View>
    } else {
        return <View style={{ marginLeft: 50 }}>
            <Text>Posts</Text>
            <FlatList
                data={post.posts}
                renderItem={({ item }) => {
                    // return <Text onPress={() => {
                    //     onSelect(item)
                    // }}>{item.title}</Text>
                    //With Touchable Feature
                    return <TouchableHighlight activeOpacity={0.4} underlayColor='yellow' onPress={() => { onSelect(item) }} >
                        <View>
                            <Text style={page.item}>{item.title}</Text>
                        </View>
                    </TouchableHighlight>
                }}
            />
        </View>
    }
}
export { PostsFlatListSelection }

const page = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'pink'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        fontWeight: 'bold',
        color: '#000'
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        color: '#000'
    }

})