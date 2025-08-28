import React, { useEffect, useState } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { Container } from './styles/AppStyle';
import { LoadingContainer, LoadingText } from './styles/LoadingStyle';
import { ResultContainer, ResultText } from './styles/ResultStyle';
import QuestionCard from './components/QuestionCard';

const API_URL = 'https://opentdb.com/api.php?amount=10&type=multiple';

const shuffle = (array) => array.sort(() => Math.random() - 0.5);

function App() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.results.map((q) => ({
          question: decodeURIComponent(q.question),
          options: shuffle([
            ...q.incorrect_answers.map(decodeURIComponent),
            decodeURIComponent(q.correct_answer)
          ]),
          answer: decodeURIComponent(q.correct_answer)
        }));
        setQuestions(formatted);
        setLoading(false);
      });
  }, []);

  const handleAnswer = (selected) => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }
    setCurrent(current + 1);
  };

  if (loading) {
    return (
      <>
        <GlobalStyle />
        <LoadingContainer>
          <LoadingText>Carregando perguntas...</LoadingText>
        </LoadingContainer>
      </>
    );
  }

  if (current >= questions.length) {
    return (
      <>
        <GlobalStyle />
        <ResultContainer>
          <ResultText>Você acertou {score} de {questions.length} perguntas!</ResultText>
        </ResultContainer>
      </>
    );
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>Quiz Interativo 🧠</h1>
        <QuestionCard
          question={questions[current].question}
          options={questions[current].options}
          onAnswer={handleAnswer}
        />
      </Container>
    </>
  );
}

export default App;
