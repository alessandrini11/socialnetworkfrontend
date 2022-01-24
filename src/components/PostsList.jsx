import {useState, useEffect} from 'react'
import axios from 'axios'
import Post from "./Post"
const PostsList = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        const fetchPosts = async () => {
            const response = await axios.get('post/timeline/61e7411ff5c500e2aceab4cf')
            setPosts(response.data.posts)
            console.log(response.data.posts)
        }
        fetchPosts()
    },[])
    return (
        <div>
            {
                posts.map(post => (
                    <Post key={post._id} post={post}></Post>
                ))
            }
            
        </div>
    )
}

export default PostsList
