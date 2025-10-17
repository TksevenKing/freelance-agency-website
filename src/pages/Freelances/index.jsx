import DefaultPicture from '../../assets/profil.png'
import Card from '../../components/Card'
import styled from 'styled-components'



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
    
`

function Freelances() {
    return (
        <div>
            <h1> Freelances  👩·💻👨·💻👩·💻 </h1>
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