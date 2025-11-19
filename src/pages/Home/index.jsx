import styled from 'styled-components';
import homeImage from '../../assets/home-illustration.svg'
import '../Home/home.css'

// CSS in JS 
const StyledContainer = styled.div`
    display: flex;
    background-color: #F9F9FC;
    width: 90%;
    height: 100vh;
    margin: auto;
`
//  Fonction a tester, on doit faire le test dans un fichier "index.test.js"
export function sum(a,b){
    return a+b
}


function Home() {
  return (
      <StyledContainer>
        {sum(4,5)}
          <div className='col_text'>
                <p>Reperez vos besoins, on s'occupe du reste, avec les meilleurs talents</p>
                <a href='/survey/2'>Faire le test</a>
          </div>
          <div className='col_photo'>
              <img src={homeImage} alt='home illustration' />
          </div>

      </StyledContainer>
  );
}

export default Home;
