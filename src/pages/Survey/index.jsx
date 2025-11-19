import { useParams } from "react-router-dom"; // Ceci nous permet de recup des param a parti d'une URL ou Route
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import { useContext } from "react";
import { Loader } from "../../utils/style/Atoms";
import { SurveyContext } from "../../utils/context";
//  Import du hooks personnaliser usefecth cree par moi meme
import { useFetch } from "../../utils/hooks";


// Ajoutons du style css in JS
const SurveyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    

`
const Title = styled.h2`
    // text-align: center;
    text-decoration: underline ${colors.primary};
    align-self: center;
`
const QuestionDisplay = styled.div`
    width: 80%;
    height: 100px;
    // background-color: pink;
    align-self: center;
    color: black;
    text-align: center;
`
// Pour que le margin: auto fonctionne, je dois donner une largeur fixe a l'elt dans son contenant

const LinkWrapper = styled.div`
    display: flex;
    align-self: center;
    // background-color: pink;
    width:30%;
    justify-content: space-between;
`
const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    font-weight: bold;
    background-color: ${colors.backgroundLight};
    border: 1px solid ${colors.backgroundLight};
    border-radius: 20px;
    padding: 10px;
    `


const ReponseButton = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
        props.$isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`
const ReponseWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 5px;
`


function Survey() {
    const { questionNumber } = useParams() // useParam retoure une chaine de caractere comme en Java qu'il faudra convertir en int si necessaire
    const questionNumberINT = parseInt(questionNumber)
    const precedentQuestionNumber = (questionNumberINT <= 1) ? 1 : questionNumberINT - 1
    const suivantQuestionNumber = questionNumberINT + 1
    // Souvent on peut faire des choses simplement comme ici sans passer par useState
    // State pour l'affichege des questions
    // const [surveyData, setSurveyData] = useState({})
    // const [isDataLoading, setDataLoading] = useState(false)
    

    const { saveAnswers, answers } = useContext(SurveyContext)


    function saveReponse(answer) {
        saveAnswers({ [questionNumber]: answer })
    }

    // Appels API
    // Ici je recupere les donnees de survey garce a fecth() ensuite je le convertit puis le met dans un tab surveyData
    // useEffect(() => {
    //     setDataLoading(true)
    //     fetch(`http://localhost:8000/survey`)
    //     .then((response) => response.json())
    //     .then(({ surveyData }) => {
    //     setSurveyData(surveyData)
    //     setDataLoading(false)
    //     })
    // }, [])
// ========= On commente pour utiliser notre propre hook useFetch ======== 
    // useEffect(() => {
    //     async function fetchSurvey() {
    //         setDataLoading(true)
    //         try {
    //             const response = await fetch(`http://localhost:8000/survey`)
    //             // comme surveyData est une prop de l'objet qui est retourner donc les {} mais si c'est un tab ou
    //             // une liste qui est retourner alors pas de {}
    //             const { surveyData } = await response.json()
    //             setSurveyData(surveyData)
    //         } catch (err) {
    //             console.log(err)
    //             setError(true)
    //         } finally {
    //             setDataLoading(false)
    //         }
    //     }
    //     // On appelle fetch survey juste en dessous
    //     fetchSurvey()
    // }, [])

    //  utlisation de mon  hook qui vient de remplacer tout le code en haut 
    const { data, isLoading, error } = useFetch(`http://localhost:8000/survey`)
    const { surveyData } = data

    if (error) {
        return <span>Oups il ya eu une erreur </span>
    }

    return (
        <SurveyContainer>

            <Title>Question {questionNumber}</Title>
            {isLoading ? (
                <Loader />
            ) : (
                <QuestionDisplay>{surveyData && surveyData[questionNumber]}</QuestionDisplay>
            )}
            <ReponseWrapper>
                <ReponseButton onClick={() => saveReponse(true)}
                     $isSelected={answers[questionNumber] === true}>
                    Oui
                </ReponseButton>
                <ReponseButton onClick={() => saveReponse(false)}
                  $isSelected={answers[questionNumber] === false} >
                    Non
                </ReponseButton>
            </ReponseWrapper>

            <LinkWrapper>
                <StyledLink to={`/survey/${precedentQuestionNumber}`} >Precedent</StyledLink>
                {
                    (suivantQuestionNumber === 10) ? (
                        <StyledLink to={`/results`} >Resultats</StyledLink>
                    ) : (<StyledLink to={`/survey/${suivantQuestionNumber}`} >Suivant</StyledLink>)
                }
            </LinkWrapper>








        </SurveyContainer>
    )
}

export default Survey;