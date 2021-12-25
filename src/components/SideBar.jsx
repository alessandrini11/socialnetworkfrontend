import styled from 'styled-components'
import FriendList from './FriendList'

const Container = styled.div``
const Wrapper = styled.div``
const Top = styled.div`
    display: flex;
    align-items: center;
`   
const Image = styled.img`
    height: 60px;
`
const Text = styled.p`
    font-size: 12px;
    font-weight: 300
`
const BoldText = styled.span`
    font-weight: normal;
`
const SideImageContainer = styled.div`
    position: relative;
    padding-top: 100%;
`
const SideImage = styled.img`
    position: absolute;
    border-radius: 10px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;

`
const SideText = styled.span``

const SideBar = () => {
    return (
        <Container>
            <Wrapper>
                <Top>
                    <Image src='data:image/jpeg;base64,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'></Image>
                    <Text>
                        <BoldText>Pola Foster</BoldText> and <BoldText>3 other friends</BoldText> have a birthday today
                    </Text>
                </Top>
                <SideImageContainer>
                    <SideImage src='https://images.unsplash.com/photo-1640398097288-c2cd41fef8f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60'></SideImage>
                    {/* <SideText></SideText> */}
                </SideImageContainer>
                <FriendList></FriendList>
            </Wrapper>
        </Container>
    )
}

export default SideBar
