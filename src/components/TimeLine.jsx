import styled from "styled-components"
import NewPost from "./NewPost"
import PostsList from "./PostsList"

const Container = styled.div`
    margin-top: 20px;
`
const Wrapper = styled.div``
const TimeLine = () => {
    return (
        <Container>
            <Wrapper>
                <NewPost></NewPost>
                <PostsList></PostsList>
            </Wrapper>
        </Container>
    )
}

export default TimeLine
