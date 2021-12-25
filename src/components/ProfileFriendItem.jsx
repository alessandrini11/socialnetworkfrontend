import styled from "styled-components"

const Container = styled.div`
    
`
const ImageContainer = styled.div`
    position: relative;
    padding-top: 100%;
`
const Image = styled.img`
    border-radius: 15px;
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    bottom: 0;
    right: 0;
`
const Name = styled.span``


const ProfileFriendItem = () => {
    return (
        <Container>
            <ImageContainer>
                <Image src="https://images.unsplash.com/photo-1640360937402-edd310a8f5f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1497&q=80"></Image>
            </ImageContainer>
            <Name>John Cena</Name>
        </Container>
    )
}

export default ProfileFriendItem
