import React from 'react'
import styled from 'styled-components'
import { RssFeed, Notifications, Videocam, Group, Bookmark, HelpOutline, WorkOutline, School } from '@material-ui/icons'
import FriendList from './FriendList'
const Container = styled.div``
const Wrapper = styled.div``
const IconTextWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 16px 0
`
const Text = styled.span`
    margin-left: 15px;
    font-size: 12px
`
const Divider = styled.div`
    width: 90%;
    margin: 0 auto;
    height: 1px;
    background: lightgray;
`
const Menu = () => {
    return (
        <Container>
            <Wrapper>
                <IconTextWrapper>
                    <RssFeed></RssFeed>
                    <Text>Feed</Text>
                </IconTextWrapper>
                <IconTextWrapper>
                    <Notifications></Notifications>
                    <Text>Chats</Text>
                </IconTextWrapper>
                <IconTextWrapper>
                    <Videocam></Videocam>
                    <Text>Video</Text>
                </IconTextWrapper>
                <IconTextWrapper>
                    <Group></Group>
                    <Text>Groups</Text>
                </IconTextWrapper>
                <IconTextWrapper>
                    <Bookmark></Bookmark>
                    <Text>Bookmarks</Text>
                </IconTextWrapper>
                <IconTextWrapper>
                    <HelpOutline></HelpOutline>
                    <Text>Questions</Text>
                </IconTextWrapper>
                <IconTextWrapper>
                    <WorkOutline></WorkOutline>
                    <Text>Jobs</Text>
                </IconTextWrapper>
                <IconTextWrapper>
                    <School></School>
                    <Text>Courses</Text>
                </IconTextWrapper>
                <Divider></Divider>
                <FriendList></FriendList>
            </Wrapper>
        </Container>
    )
}

export default Menu
