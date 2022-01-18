import styled from 'styled-components'

const Right = styled.div`
    padding: 1.5rem;
    background: white;
    border-radius: 10px;

`
const Form = styled.form`
    display:flex;
    flex-direction: column;
`
const Input = styled.input`
    margin: 10px 0;
    height: 50px;
    padding: 0 15px;
    border-radius: 5px;
    border: 1px solid gray;
`
const Button = styled.button`
    margin: 10px 0;
    color: white;
    height: 50px;
    border-radius: 5px;
    border: none;
    background: #1877f2;
`
const Option = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const LinkCreateAccount = styled.a`
    background: #42b72a;
    padding: 10px;
    border-radius: 5px;
    color: white;
`
const FormRegister = () => {
    return (
        <Right>
            <Form>
                <Input placeholder='Username'></Input>
                <Input placeholder='Email'></Input>
                <Input placeholder='Password'></Input>
                <Input placeholder='Confirm Password'></Input>
                <Button>Log in</Button>
            </Form>
            <Option>
                <LinkCreateAccount>Login into Account</LinkCreateAccount>
            </Option>
        </Right>
    )
}

export default FormRegister
