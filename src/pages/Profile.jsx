import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import TimeLine from '../components/TimeLine'
import ProfileSideBar from '../components/ProfileSideBar'

const Container = styled.div`
    display:flex;
`
const InnerContainer = styled.div`
    display: flex;

    margin-top: 20px;
`
const TimeLineCenter = styled.div`
    flex: 2;
`
const ProfileSideCenter = styled.div`
    flex: 1;
`
const Left = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 3;
`
const Header = styled.div`
    height: 400px;
    position: relative;
`
const CoverImageContainer = styled.div`
    position: relative;
    padding-top: 30%
`
const CoverImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
`
const USerProfileImageInfos = styled.div`
    width: 100%;
    position: absolute;
    top: 45%;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ProfileImageContainer = styled.div`
    position: relative;
    width: 200px;
    padding-top: 20%;
    background: white;
    border-radius: 50%;
`
const ProfileImage = styled.img`
    padding: 3px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    
`
const UserNameIntro = styled.div`
    text-align: center;
    margin-top: 5px;
`
const UserName = styled.p``
const Intro = styled.p`
    font-weight: 300;
`

const Profile = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <Left>
                    <Menu></Menu>
                </Left>
                <Right>
                    <Header>
                        <CoverImageContainer>
                            <CoverImage src='data:image/jpeg;base64,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'></CoverImage>
                        </CoverImageContainer>
                        <USerProfileImageInfos>
                            <ProfileImageContainer>
                                <ProfileImage src='https://images.unsplash.com/photo-1640387346493-50224558f585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60'></ProfileImage>
                            </ProfileImageContainer>
                            <UserNameIntro>
                                <UserName>
                                    Mehdi Benatia
                                </UserName>
                                <Intro>I am et professional football of FC Bayern originated from Morocco</Intro>
                            </UserNameIntro>
                        </USerProfileImageInfos>
                    </Header> 
                    <InnerContainer>
                        <TimeLineCenter>
                            <TimeLine></TimeLine>
                        </TimeLineCenter>
                        <ProfileSideCenter>
                            <ProfileSideBar></ProfileSideBar>
                        </ProfileSideCenter>
                        
                    </InnerContainer>
                </Right>
            </Container>
        </div>
    )
}

export default Profile
