import React from 'react';

function QuestionCard({ question, options, onAnswer }) {
  return (
    <div>
      <h3 dangerouslySetInnerHTML={{ __html: question }} />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {options.map((opt, idx) => (
          <li key={idx} style={{ margin: '0.5rem 0' }}>
            <button onClick={() => onAnswer(opt)}>{opt}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionCard;