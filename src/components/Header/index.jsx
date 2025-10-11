import { Link } from "react-router-dom";

// Ajoutons Header a la racine du projet  dans index.jsx pour qu'il soit visible automatiquement dans toutes nos pages puisqu'il est a la base de notre Router il fait parti du Layout
function Header() {
    return (
        <nav>
            {/* Link est Mieux pour le menu mais pas pour des redirections declencher par onClick() */}
            <Link to="/">Accueil</Link>
            <Link to="/survey/5">Questionnaire</Link>
            <Link to="/freelances">Freelances</Link>
        </nav>
    )
}

export default Header;