import styled from "styled-components"
import { MoreVert, Favorite } from "@material-ui/icons"
import Card from "./Card"

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
    height: 100%;
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

const Post = () => {
    return (
        <Card>
            <Wrapper>
                <PostHeader>
                    <ImageNameWrapper>
                        <Image src="https://images.unsplash.com/photo-1640360937402-edd310a8f5f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1497&q=80"></Image>
                        <Name>Alexandre Lionel</Name>
                        <Time>5 min ago</Time>
                    </ImageNameWrapper>
                    <MoreVert></MoreVert>
                </PostHeader>
                <PostContent>
                    <Text>This is a fake post from the front-end</Text>
                    <ImageContainer>
                        <PostImage src="https://images.unsplash.com/photo-1640360937402-edd310a8f5f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1497&q=80"></PostImage>
                    </ImageContainer>
                </PostContent>
                <PostFooter>
                    <PostReactWrapper>
                        <Favorite style={{color: 'crimson',fontSize: '20px', marginRight: '5px'}}></Favorite>
                        <Text>
                            32
                        </Text>
                    </PostReactWrapper>
                    <Text>9 comments</Text>
                </PostFooter>
            </Wrapper>
        </Card>
    )
}

export default Post
