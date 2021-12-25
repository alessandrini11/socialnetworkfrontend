import styled from "styled-components"

const Container = styled.div`
    margin-top: 30px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`
const Card = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default Card
