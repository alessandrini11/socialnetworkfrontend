import styled from "styled-components"
import { Search, Person, Message, Notifications } from '@material-ui/icons'


const Container = styled.div`
    height: 60px;
    background-color: blue;
    color: white;
`
const Wrapper = styled.div`
    padding: 0 20px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const SearchWrapper = styled.div`
    display: flex;
    width: 500px;
    background-color: white;
    height: 35px;
    align-items: center;
    border-radius: 10px;
    margin-right: 30px;
    padding-left: 10px
`

const SearchInput = styled.input`
    border: none;
    width: 90%;
    height: 80%;
    padding-left: 10px;
    font-size: 16px
    color: lightgray

    &:focus{
        outline: none;
    }
`
const NavText = styled.span`
    margin-right: 10px;
`
const Logo = styled.div`
    font-size: 30px;
    font-weight: bold
`
const Center = styled.div`
    display: flex;
    align-items: center;
`
const Left = styled.div`

`
const Right = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
`
const Image = styled.img`
    height: 35px;
    width: 35px;
    border-radius: 50%;
`;
const RightWrapper = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around
`
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>ENSPD</Logo>
                </Left>
                <Center>
                    <SearchWrapper>
                        <Search style={{color: "gray"}}></Search>
                        <SearchInput placeholder="search for a post or a friend"></SearchInput>
                    </SearchWrapper>
                    <NavText>Homepage</NavText>
                    <NavText>Timeline</NavText>
                </Center>
                <Right>
                    <RightWrapper>
                        <Person ></Person>
                        <Message badgeContent={1} ></Message>
                        <Notifications badgeContent={3}></Notifications>
                    </RightWrapper>
                    <Image src="https://images.unsplash.com/photo-1640360937402-edd310a8f5f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1497&q=80"></Image>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar

