import styled from "styled-components"
import Card from "./Card"
import { PermMedia, LocalOffer, LocationOn, EmojiEmotions } from "@material-ui/icons"
const Wrapper = styled.div`
    padding: 10px;
`
const ImageTextWrapper = styled.div`
    display: flex
`
const Image = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
`
const TextArea = styled.textarea`
    border: none;
    width: 100%;
    padding: 0 0 0 10px;
`
const Divider = styled.div`
    height: 1px;
    background: lightgray;
    width: 90%;
    margin: 10px auto
`
const PostFooter = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 5px auto;
`
const OptionWrapper = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const ItemWrapper = styled.div`
    display: flex;
    align-items: center;
`
const Text = styled.span`
    font-size: 12px;
    margin-left: 5px;
`
const Button = styled.button`
    font-weight: bold;
    color: white;
    border: none;
    background: teal;
    padding: 2px 6px;
    border-raduis: 10px;
    cursor: pointer;
`
const NewPost = () => {
    return (
        <Card>
            <Wrapper>
                <ImageTextWrapper>
                    <Image src="https://images.unsplash.com/photo-1640360937402-edd310a8f5f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1497&q=80"></Image>
                    <TextArea placeholder="What's on your mind"></TextArea>
                </ImageTextWrapper>
                <Divider></Divider>
                <PostFooter>
                    <OptionWrapper>
                        <ItemWrapper>
                            <PermMedia style={{color: 'crimson'}}></PermMedia>
                            <Text>Photo or Video</Text>
                        </ItemWrapper>
                        <ItemWrapper>
                            <LocalOffer style={{color: '#2b85a1'}}></LocalOffer>
                            <Text>Tag</Text>
                        </ItemWrapper>
                        <ItemWrapper>
                            <LocationOn style={{color: 'green'}}></LocationOn>
                            <Text>Location</Text>
                        </ItemWrapper>
                        <ItemWrapper>
                            <EmojiEmotions style={{color: '#bbb826'}}></EmojiEmotions>
                            <Text>Feeling</Text>
                        </ItemWrapper>
                    </OptionWrapper>
                    <Button>Share</Button>
                </PostFooter>
            </Wrapper>
        </Card>
    )
}

export default NewPost
