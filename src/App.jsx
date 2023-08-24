import React, { useState } from 'react';
import './App.css';

function App() {
  const [topic, setTopic] = useState('');
  const [color, setColor] = useState('');
  const [cards, setCards] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = () => {
    setErrorMessage('');

    if (topic.trim().length < 3 || /^\s/.test(topic)) {
      setErrorMessage('Por favor, verifique os dados inseridos no formulário');
      return;
    }

    if (color.length < 6) {
      setErrorMessage('Por favor, verifique os dados inseridos no formulário');
      return;
    }

    const newCard = {
      topic,
      color,
    };

    setCards([...cards, newCard]);
    setTopic('');
    setColor('');
  };

  return (
    <div className="App">
      <h1>Criador de Cards</h1>
      <div className="form-container">
        <label htmlFor="topic">Tópico:</label>
        <input
          type="text"
          id="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          required
        />
        <br />
        <label htmlFor="color">Cor:</label>
        <input
          type="color"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          required
        />
        <br />
        <button onClick={handleSubmit}>Criar Card</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
      <div className="card-list">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card"
            style={{ backgroundColor: card.color }}
          >
            {card.topic}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
