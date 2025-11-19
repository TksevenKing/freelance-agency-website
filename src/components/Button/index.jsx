
import styled from "styled-components"

const ButtonStyled = styled.div `
    color: white;
    font-size: large;
    background-color: #5843E4;
    border-radius: 30px;
    padding: 5px;
    padding-left: 50px;
    padding-right: 50px;
    align-self: flex-start;
    margin-top: 100px;
    text-decoration: none;
    font-weight: lighter;
    width: 200px
`

function Button({text}) {

    return (
        <ButtonStyled>{text}</ButtonStyled>
    )
}

export default Button