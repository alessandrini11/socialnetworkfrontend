import React from 'react'
import styled from 'styled-components'

const Container = styled.div``
const Wrapper = styled.div``
const Image = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;

`
const ImageNameWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 16px 0
`
const Name = styled.div`
    margin-left: 15px;
    font-size: 12px
`
const MoreButton = styled.span`
    padding: 5px 15px;
    font-size: 12px;
`
const FriendList = () => {
    return (
        <Container>
            <Wrapper>
                <ImageNameWrapper>
                    <Image src="https://images.unsplash.com/photo-1640360937402-edd310a8f5f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1497&q=80"></Image>
                    <Name>Alex Schuame</Name>
                </ImageNameWrapper>
                <ImageNameWrapper>
                    <Image src="https://images.unsplash.com/photo-1640360937402-edd310a8f5f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1497&q=80"></Image>
                    <Name>Alex Schuame</Name>
                </ImageNameWrapper>
                <ImageNameWrapper>
                    <Image src="https://images.unsplash.com/photo-1640360937402-edd310a8f5f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1497&q=80"></Image>
                    <Name>Alex Schuame</Name>
                </ImageNameWrapper>
                <ImageNameWrapper>
                    <Image src="https://images.unsplash.com/photo-1640360937402-edd310a8f5f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1497&q=80"></Image>
                    <Name>Alex Schuame</Name>
                </ImageNameWrapper>
                <ImageNameWrapper>
                    <Image src="https://images.unsplash.com/photo-1640360937402-edd310a8f5f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1497&q=80"></Image>
                    <Name>Alex Schuame</Name>
                </ImageNameWrapper>
                <ImageNameWrapper>
                    <MoreButton>Load More</MoreButton>
                </ImageNameWrapper>
                
            </Wrapper>
        </Container>
    )
}

export default FriendList
