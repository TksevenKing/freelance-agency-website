import PropTypes from "prop-types"

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
    picture: 'Photo par defaut'
}

function Card({ label, title, picture}) {
    return (
        <div style={{display: 'flex', flexDirection: 'column', padding: 15}}>
            <span>{label}</span>
            <img src={picture} alt="freelance" height={80} width={80}/>
            <span>{title}</span>
        </div>
    )
}

export default Card