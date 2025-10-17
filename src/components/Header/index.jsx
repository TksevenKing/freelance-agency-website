import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";


// Ici la syntaxe change car on l'utilise avec un let venant d'une bibliotheque d'ou les ()
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

// Ajoutons Header a la racine du projet  dans index.jsx pour qu'il soit visible automatiquement dans toutes nos pages puisqu'il est a la base de notre Router il fait parti du Layout
function Header() {
    return (
        <nav>
            {/* Link est Mieux pour le menu mais pas pour des redirections declencher par onClick() */}
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/survey/5" $isFullLink>Questionnaire</StyledLink>
            <StyledLink to="/freelances">Freelances</StyledLink>
        </nav>
    )
}

export default Header;