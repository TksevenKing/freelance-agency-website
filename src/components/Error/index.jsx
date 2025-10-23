import styled from 'styled-components';
import logo404 from '../../assets/404.svg'


// Definition du style
const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F9F9FC;
    width: 90%;
    height: 100vh;
    margin: auto;
`
const Title = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 25px;
    margin:auto;
`
const Image = styled.img`
    width: 80%;
    margin: auto;
    height: 50vh;
`

function Error() {
    return (
        <Container>
            <Title>Oups ...</Title>
            <Image src={logo404} alt='logo erreur page' />
            <Title>Il s'emblerait qu'il y ait un probleme</Title>
        </Container>
    )
}

export default Error;