import DefaultPicture from '../../assets/profil.png'
import Card from '../../components/Card'



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


function Freelances() {
    return (
        <div>
            <h1> Freelances </h1>
                {freelanceProfiles.map((profile, index) => 
                    <Card  
                        key={`${profile.name}-${index}`}
                        label={profile.name} 
                        title={profile.jobTitle} 
                        picture={profile.picture} 
                    />
                    )}
            
        </div>
    )
}

export default Freelances