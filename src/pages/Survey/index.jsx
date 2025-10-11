import { useParams } from "react-router-dom"; // Ceci nous permet de recup des param a parti d'une URL ou Route
import { Link } from "react-router-dom";

function Survey() {
    const {questionNumber} = useParams() // useParam retoure une chaine de caractere comme en Java qu'il faudra convertir en int si necessaire
    const questionNumberINT = parseInt(questionNumber)
    const precedentQuestionNumber = (questionNumberINT <= 1) ? 1 : questionNumberINT - 1
    const suivantQuestionNumber = questionNumberINT + 1

// Souvent on puet faire des choses simplement comme ici sans passer par useState

    return (
        <div>
            <h1>Questionnaire</h1>
            <h2>Question {questionNumber}</h2>
            
            <Link to={`/survey/${precedentQuestionNumber}`} >Precedent</Link>
            {
                (suivantQuestionNumber === 10) ?  (
                <Link to={`/results`} >Resultats</Link>
                ):( <Link to={`/survey/${suivantQuestionNumber}`} >Suivant</Link> )
            }
            
            
            
            

        </div>
    )
}

export default Survey;