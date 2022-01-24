import styled from "styled-components"
import { MoreVert, Favorite } from "@material-ui/icons"
import Card from "./Card"
import { useState,useEffect } from "react"
import { format } from "timeago.js"
import axios from 'axios'
import {Link} from 'react-router-dom'

const Wrapper = styled.div`
    padding: 20px 10px;
`
const PostHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`
const ImageNameWrapper = styled.div`
    display: flex;
    width: 80%;
    align-items: center;
`
const Image = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
`
const Name = styled.div`
    font-size: 14px;
    margin: 0 10px
`
const Time = styled.div`
    font-size: 14px;
`
const PostContent = styled.div``
const Text = styled.span`
    
`
const ImageContainer = styled.div`
    margin: 10px 0;
    position: relative;
    padding-top: 75%;
`
const PostImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    right:0;
    bottom:0;
    width: 100%;
    max-height: 100%;
`
const PostFooter = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 12px;
`
const PostReactWrapper = styled.div`
    display: flex;
    align-items: center;
`

const Post = ({post}) => {
    const [like,setLike] = useState(post.likes.length)
    const [user, setUser] = useState({})
    const [isLiked,setIsLiked] = useState(false)
    const PF = process.env.REACT_APP_PUBLIC_fOLDER

    useEffect(()=>{
        const fetchUser = async () => {
            const response = await axios.get('user/'+post.userId)
            setUser(response.data.user)
        }
        fetchUser()
    },[post.userId])

    const likeHandler = () => {
        setLike(isLiked ? like + 1 : like - 1)
        setIsLiked(!isLiked)
    }
    
    return (
        <Card>
            <Wrapper>
                <PostHeader>
                    <ImageNameWrapper>
                        <Link to={'/profile/'+user.username}>
                            <Image src={post.image}></Image>
                        </Link>
                        
                        <Name>{user.username}</Name>
                        <Time>{format(post.createdAt)}</Time>
                    </ImageNameWrapper>
                    <MoreVert></MoreVert>
                </PostHeader>
                <PostContent>
                    <Text>{post.description}</Text>
                    <ImageContainer>
                        <PostImage src={post.image}></PostImage>
                    </ImageContainer>
                </PostContent>
                <PostFooter> 
                    <PostReactWrapper>
                        <Favorite onClick={likeHandler} style={{color: 'crimson',fontSize: '20px', marginRight: '5px'}}></Favorite>
                        <Text>
                            {like}
                        </Text>
                    </PostReactWrapper>
                    <Text>9 comments</Text>
                </PostFooter>
            </Wrapper>
        </Card>
    )
}

export default Post
