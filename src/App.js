import { useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const questions = [
  {
    questionText: "Qual o idiomafalado no Brasil?",
    answerOptions: [
      { answerText: "Português", isCorrect: true },
      { answerText: "Inglês", isCorrect: false },
      { answerText: "Francês", isCorrect: false },
      { answerText: "Alemão", isCorrect: false },
    ],
  },
  {
    questionText:
      "Quais os países que têm a maior e a menor expectativa de vida do mundo?",
    answerOptions: [
      { answerText: "Japão e Serra Leoa", isCorrect: true },
      { answerText: "Austrália e Afeganistã", isCorrect: false },
      { answerText: "Itália e Chade", isCorrect: false },
      { answerText: "Brasil e Congo", isCorrect: false },
    ],
  },
  {
    questionText: "Qual empresa criou o Iphone?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "Como aprender a programar?",
    answerOptions: [
      { answerText: "Praticando o que se aprende", isCorrect: true },
      { answerText: "Vendo vídeo", isCorrect: false },
      { answerText: "Lendo", isCorrect: false },
      { answerText: "Dormindo", isCorrect: false },
    ],
  },
];

function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [Points,setPoints] = useState(0);
  const [correctBar,setCorrectBar] = useState(0);
  const [wrongBar,setWrongBar] = useState(0);
  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setPoints((point) => point + 5)
      setCorrectBar((bar) => bar + 25);
      setScore(score + 1);
    }
    else{
      setPoints((point) => point - 4)
      setWrongBar((bar) => bar + 25);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div className="app">
      <section>
       <p> Points  </p>
       </section>
       <section>
       <p> {Points} </p>
      </section> 
       <header className = 'header'>
         <div className = 'answerBar'>  
           <h5> Right Ans </h5>
          <ProgressBar variant="info"  now={correctBar}  className = 'progress_bar' />
         </div>
         <div className = 'answerBar'>
            <h5> Wrong Ans </h5>
         <ProgressBar variant="danger" now={wrongBar} className = 'progress_bar' />
         </div>
       </header>
      {showScore ? (
        <div className="score-section">
          Você pontuou {score} de {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span> Questão {currentQuestion + 1}  </span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>

          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  onClick={() => handleAnswer(answerOption.isCorrect)}
                  key={index}
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}

    {!showScore &&  <p> Note: Right ans is 5 points and Wrong ans leads to -4 points </p>}
    </div>
  );
}

export default App;
