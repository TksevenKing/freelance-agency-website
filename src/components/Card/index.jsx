import PropTypes from "prop-types"
import defaultPicture from '../../assets/profil.png'
import styled from "styled-components"
import colors from "../../utils/style/colors"


// Utilisation de composant stylee Styled Components je peux mettre mon style directetement ici
const CardLabel = styled.span`
    color: #5843e4;
    font-size: 22px;
    font-weight: bold;
    margin-left: 10%;
    `
const CardImage = styled.img`
    height: 90px;
    width: 90px;
    border-radius: 50%;
    margin: auto;
`
// &:hover le '&' devant hover permet d'acceder au pseudoselector :hover dans le styled component
const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`
const CardTitle = styled.span`
    font-weight: bold;
    text-align: center;
`

// Pour dire que voici les param de Card avec leurs Types
// le 1er propTypes est miniscule "card.propTypes"
Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

// Definissons une props par defaut au cas ou aucune prop n'est passee
Card.defaultProps ={
    label: 'Oumar nom par defaut',
    title: 'Mon titre par defaut',
    picture: defaultPicture
}

// On peut gerer du style en fonction du state avec Styled Component en passant des props l'exemple dans le word

function Card({ label, title, picture}) {
    return (
        <CardWrapper >
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <CardTitle>{title}</CardTitle>
        </CardWrapper>
    )
}

export default Card