import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import darkLogo from '../../assets/dark-logo.png'



// Ici la syntaxe change car on l'utilise avec un Link venant d'une bibliotheque d'ou les ()
// Ici on utilise le $ devant IsFullLink only because it's not une balise native si cetait un div ou autre on n'utiliserais pas le $
const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink && 
        `color: white; border-radius: 30px; background-color: 
        ${colors.primary};`

    }
`
const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px;
    align-items: center;
`
const StyledLogo = styled.img`
    height:70px;
`
// Ajoutons Header a la racine du projet  dans index.jsx pour qu'il soit visible automatiquement dans toutes nos pages puisqu'il est a la base de notre Router il fait parti du Layout
function Header() {
    return (
        <StyledHeader>
            <StyledLogo src={darkLogo} alt="shinyLogo" />
            
            <nav>
                {/* Link est Mieux pour le menu mais pas pour des redirections declencher par onClick() */}
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/survey/5" $isFullLink>Questionnaire</StyledLink>
                <StyledLink to="/freelances">Freelances</StyledLink>
            </nav>
            

        </StyledHeader>

    )
}

export default Header;