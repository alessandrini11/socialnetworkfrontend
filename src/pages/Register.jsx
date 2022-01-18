import styled from 'styled-components'
import FormRegister from '../components/FormRegister'
const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f0f2f5;
`
const Left = styled.div`
    padding-right: 50px;
`
const Intro = styled.div``
const Title = styled.h1`
    color: #1775ee;
    font-size: 50px;
`
const Text = styled.p`
    font-size: 24px;
    margin-top: 10px;
`
const Register = () => {
    return (
        <Container>
            <Left>
                <Intro>
                    <Title>AlexSocial</Title>
                    <Text>Connect with friends and the world around you on Alexsocial</Text>
                </Intro>
            </Left>
            <FormRegister></FormRegister>
        </Container>
    )
}

export default Register
