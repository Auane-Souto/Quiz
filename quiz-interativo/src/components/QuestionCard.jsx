import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #1a1a2e;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 20px #00f0ff;
  margin-top: 2rem;
`;

const QuestionText = styled.h3`
  font-size: 1.5rem;
  color: #f1f1f1;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 8px #00f0ff;
`;

const OptionList = styled.ul`
  list-style: none;
  padding: 0;
`;

const OptionItem = styled.li`
  margin: 0.5rem 0;
`;

const OptionButton = styled.button`
  width: 100%;
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  font-family: 'Orbitron', sans-serif;
  background-color: #00f0ff;
  color: #000;
  border: none;
  border-radius: 8px;
  transition: 0.3s;
  box-shadow: 0 0 10px #00f0ff;

  &:hover {
    background-color: #00c0d0;
    transform: scale(1.05);
  }
`;

function QuestionCard({ question, options, onAnswer }) {
  return (
    <Card>
      <QuestionText dangerouslySetInnerHTML={{ __html: question }} />
      <OptionList>
        {options.map((opt, idx) => (
          <OptionItem key={idx}>
            <OptionButton onClick={() => onAnswer(opt)}>
              {opt}
            </OptionButton>
          </OptionItem>
        ))}
      </OptionList>
    </Card>
  );
}

export default QuestionCard;
