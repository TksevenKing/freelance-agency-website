import { useParams } from "react-router-dom"; // Ceci nous permet de recup des param a parti d'une URL ou Route
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import { useEffect, useState } from "react";
import { Loader } from "../../utils/style/Atoms";



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
// Pour que le margin: auto fonctionne, je dois donner une larheur fixe a l'elt dans son contenant

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



function Survey() {
    const {questionNumber} = useParams() // useParam retoure une chaine de caractere comme en Java qu'il faudra convertir en int si necessaire
    const questionNumberINT = parseInt(questionNumber)
    const precedentQuestionNumber = (questionNumberINT <= 1) ? 1 : questionNumberINT - 1
    const suivantQuestionNumber = questionNumberINT + 1
// Souvent on puet faire des choses simplement comme ici sans passer par useState
    // State pour l'affichege des questions
    const [surveyData, setSurveyData] = useState({})
    const [isDataLoading, setDataLoading] = useState(false)
    const [error, setError] = useState(null)
    // Appels API
// Ici je recuperr les donnees de survey garce a fecth() ensuite je le convertit puis le met dans un tab surveyData
    // useEffect(() => {
    //     setDataLoading(true)
    //     fetch(`http://localhost:8000/survey`)
    //     .then((response) => response.json())
    //     .then(({ surveyData }) => {
    //     setSurveyData(surveyData)
    //     setDataLoading(false)
    //     })
    // }, [])

    useEffect(() => {
        async function fetchSurvey() {
            setDataLoading(true)
            try {
                const response = await fetch(`http://localhost:8000/survey`)
                // comme surveyData est une prop de l'objet qui est retourner donc les {} mais si c'est un tab ou
                // une liste quie est retourner alors pas de {}
                const { surveyData } = await response.json()
                setSurveyData(surveyData)
            } catch (err) {
                console.log(err)
                setError(true)
            } finally {
                setDataLoading(false)
            }
        }
        // On appelle fectch survey juste en dessous
        fetchSurvey()
    },[])

    if(error) {
        return <span>Oups il ya eu une erreur </span>
    }

    return (
        <SurveyContainer>
            
            <Title>Question {questionNumber}</Title>
            {isDataLoading ? (
                <Loader />
            ) : (
                <QuestionDisplay>{surveyData[questionNumber]}</QuestionDisplay>
            )}

            <LinkWrapper>
                <StyledLink to={`/survey/${precedentQuestionNumber}`} >Precedent</StyledLink>
                {
                    (suivantQuestionNumber === 10) ?  (
                    <StyledLink to={`/results`} >Resultats</StyledLink>
                    ):( <StyledLink to={`/survey/${suivantQuestionNumber}`} >Suivant</StyledLink> )
                }
            </LinkWrapper>

            

            
            
            
            

        </SurveyContainer>
    )
}

export default Survey;