import { useEffect, useState } from 'react';
import { produce } from 'immer';
import { View, Text, ScrollView, FlatList, ActivityIndicator } from 'react-native'

const PostsFlatList = props => {

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
    useEffect(() => {
        // todo: remove setTimeout once the code is moved to production.
        setTimeout(() => {
            fetchPosts()
        }, 5000)
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
            {/* <FlatList data={post.posts} renderItem={(obj) => {
                return <Text>{obj.item.title}</Text>
            }} /> */}
            {/* <FlatList data={post.posts} renderItem={({item}) => {
                return <Text>{item.title}</Text>
            }} /> */}
            <FlatList
                data={post.posts}
                renderItem={({ item: { title } }) => {
                    return <Text>{title}</Text>
                }}
            />
        </View>
    }
}
export { PostsFlatList }