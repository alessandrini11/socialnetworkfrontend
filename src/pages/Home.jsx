import Navbar from "../components/Navbar"
import styled from "styled-components"
import Menu from "../components/Menu"
import TimeLine from "../components/TimeLine"
import SideBar from "../components/SideBar"

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    padding: 0 20px;
`
// const Container = styled.div``
const Center = styled.div`
    flex: 2;
`
// const Container = styled.div``
const Right = styled.div`
    flex: 1;
    padding: 0 20px
`
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <Left>
                    <Menu></Menu>
                </Left>
                <Center>
                    <TimeLine></TimeLine>
                </Center>
                <Right>
                    <SideBar></SideBar>
                </Right>
            </Container>
        </div>
    )
}

export default Home
