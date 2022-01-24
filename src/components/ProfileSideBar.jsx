import styled from "styled-components"
import ProfileFriendList from "./ProfileFriendList"
const Container = styled.div`

margin-top: 20px;
padding: 20px;
`
const Wrapper = styled.div``
const Infos = styled.div``
const InfosTitle = styled.div``
const InfosItem = styled.div`
    font-weight: 300;
`
const InfosContent = styled.div``




const ProfileSideBar = ({user}) => {
    return (
        <Container>
            <Wrapper>
                <Infos>
                    <InfosTitle>User Informations</InfosTitle>
                    <InfosContent>
                        <InfosItem>City: </InfosItem>
                        <InfosItem>From: Cameroon</InfosItem>
                        <InfosItem>Relationship: Married</InfosItem>
                    </InfosContent>
                </Infos>
                <ProfileFriendList></ProfileFriendList>
            </Wrapper>
        </Container>
    )
}

export default ProfileSideBar
