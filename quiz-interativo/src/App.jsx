import React, { useEffect, useState } from 'react';
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

  if (loading) return <h2>Carregando perguntas...</h2>;
  if (current >= questions.length)
    return <h2>Você acertou {score} de {questions.length} perguntas!</h2>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Quiz Interativo 🧠</h1>
      <QuestionCard
        question={questions[current].question}
        options={questions[current].options}
        onAnswer={handleAnswer}
      />
    </div>
  );
}

export default App;