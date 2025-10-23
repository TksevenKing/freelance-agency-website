import DefaultPicture from '../../assets/profil.png'
import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
// import colors from '../../utils/style/colors'



const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
]

// pour styliser mon componaent au survol l'effet d'ombre est <Card/>
const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
    width: 60vw;
    margin: auto;
    
`
const StyledTitle = styled.h2`
    text-align: center;
`
const StyledSubTitle = styled.div`
    color: ${colors.secondary};
    text-align: center;
    margin: 30px 30px;
`

function Freelances() {
    return (
        <div>
            
            <StyledTitle > Trouvez votre prestataire</StyledTitle>
            <StyledSubTitle>Chez Shiny nous reunissons les meilleurs profils pour vous</StyledSubTitle>
            <CardsContainer>
                {freelanceProfiles.map((profile, index) =>
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        title={profile.name}
                        picture={profile.picture}
                    />
                )}
            </CardsContainer>


        </div>
    )
}

export default Freelances