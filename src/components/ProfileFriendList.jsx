import styled from 'styled-components'
import ProfileFriendItem from './ProfileFriendItem'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    padding-top: 20px;
`
const ProfileFriendList = () => {
    return (
        <Container>
            <ProfileFriendItem></ProfileFriendItem>
            <ProfileFriendItem></ProfileFriendItem>
            <ProfileFriendItem></ProfileFriendItem>
            <ProfileFriendItem></ProfileFriendItem>
            <ProfileFriendItem></ProfileFriendItem>
            <ProfileFriendItem></ProfileFriendItem>
            <ProfileFriendItem></ProfileFriendItem>
            <ProfileFriendItem></ProfileFriendItem>
            <ProfileFriendItem></ProfileFriendItem>
        </Container>
    )
}

export default ProfileFriendList
