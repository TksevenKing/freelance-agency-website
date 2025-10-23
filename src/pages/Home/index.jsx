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



function Home() {
  return (
      <StyledContainer>
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
