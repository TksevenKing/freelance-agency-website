// import DefaultPicture from '../../assets/profil.png'
import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import {  useEffect, useState } from 'react'
import { Loader } from '../../utils/style/Atoms'
// import colors from '../../utils/style/colors'



// const freelanceProfiles = [
//     {
//         name: 'Jane Doe',
//         jobTitle: 'Devops',
//         picture: DefaultPicture,
//     },
//     {
//         name: 'John Doe',
//         jobTitle: 'Developpeur frontend',
//         picture: DefaultPicture,
//     },
//     {
//         name: 'Jeanne Biche',
//         jobTitle: 'Développeuse Fullstack',
//         picture: DefaultPicture,
//     },
// ]

// pour styliser mon componaent au survol l'effet d'ombre est <Card/>
const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-auto-rows: 350px;
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
    const [isDataLoading, setIsDataLoading]  = useState(false)
    const [error, setError] = useState(null)
    // creation du state pour stocker les donnee venant de l"api
    const [profileData, setProfileData] = useState([]);
    
    useEffect(() => {
        setIsDataLoading(true)
        async function fetchProfiles (){
            
            try {
                // recuperez les donnee de l'api
                const response = await fetch('http://localhost:8000/freelances')
                const  profileData  = await response.json()
                setProfileData(profileData.freelancersList) // Puisque l'API retourne un objet avec une propriete 
                // freelancersList qui est un tableau de freelances
                // console.log(profileData)
            } catch (err) {
                console.log(err)
                setError(true)
            }finally{
                setIsDataLoading(false)
            }
        }
        fetchProfiles()
    }, [])

    if(error) {
            return <span>Oups il ya eu une erreur </span>
        }

    return (
        <div>
            
            <StyledTitle > Trouvez votre prestataire</StyledTitle>
            <StyledSubTitle>Chez Shiny nous reunissons les meilleurs profils pour vous</StyledSubTitle>
            { /* Ici n'affichez le contenu que si le chargement est fifi et que le Loader disparait */
                isDataLoading ? (
                    
                    <Loader />
                ) : (
                <CardsContainer>
                    {profileData.map((profile, index) =>
                        <Card
                            key={`${profile.name}-${index}`}
                            label={profile.job}
                            title={profile.name}
                            picture={profile.picture}
                        />
                    )}
                </CardsContainer>
                )
            }



        </div>
    )
}

export default Freelances