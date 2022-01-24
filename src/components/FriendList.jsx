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
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <Container>
            <Wrapper>
                <ImageNameWrapper>
                    <Image src={PF+'1.jpeg'}></Image>
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
