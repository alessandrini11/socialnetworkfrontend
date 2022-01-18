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
    border-radius: 5px;
    background: #1877f2;
    color: white;
    border: none;
    cursor: pointer;
    height: 50px;
`
const Option = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const LinkForgotPasswd = styled.a`
    font-size:12px;
    margin: 10px 0;
    color: #1775ee;
    text-decoration:none;
`
const LinkCreateAccount = styled.a`
    background: #42b72a;
    padding: 10px;
    border-radius: 5px;
    color: white;
    text-decoration:none;

`
const FormLogin = () => {
    return (
        <Right>
            <Form>
                <Input placeholder='Email' type='email'></Input>
                <Input placeholder='Password' type="password"></Input>
                <Button>Log in</Button>
            </Form>
            <Option>
                <LinkForgotPasswd href=''>Forgot Password?</LinkForgotPasswd>
                <LinkCreateAccount href=''>Create a new Account</LinkCreateAccount>
            </Option>
        </Right>
    )
}

export default FormLogin
