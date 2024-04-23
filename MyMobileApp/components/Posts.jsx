import { useEffect, useState } from 'react';
import { produce } from 'immer';
import { View, Text, ScrollView } from 'react-native'

const Posts = props => {

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
        fetchPosts()
    }, [])

    if (post.error) {
        return <View style={{ marginLeft: 50 }}>
            <Text>Error : {post.error.message}</Text>
        </View>
    } else if (!post.isLoading) {
        return <Text style={{ textAlign: 'center' }}>🛴</Text>
    } else {
        return <View style={{ marginLeft: 50 }}>
            <Text>Posts</Text>
            <ScrollView>
                {post.posts.map(post => {
                    return <Text key={post.id}>{post.title}</Text>
                })}
            </ScrollView>
        </View>
    }
}
export { Posts }