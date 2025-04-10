import { useState } from 'react';
import './App.css';

const playersList = [
  "Alba", "Carolina", "Einar", "Eva", "Israel", "Karisha",
  "Katherine", "Larissa", "María", "Mariana", "Mariona",
  "Mariuxi", "Marta", "Milena", "Miriam", "Paola", "Priscila", "Tetiana"
];

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [scores, setScores] = useState(Object.fromEntries(playersList.map(p => [p, 0])));
  const [showAnswerModal, setShowAnswerModal] = useState(false);
  const [showPointsModal, setShowPointsModal] = useState(false);
  const [points, setPoints] = useState(0);

  const handleCorrectAnswer = () => {
    setShowAnswerModal(false);
    setShowPointsModal(true);
  };

  const handlePointsSubmit = () => {
    if (!isNaN(points) && points > 0 && selectedPlayer) {
      setScores(prev => ({
        ...prev,
        [selectedPlayer]: prev[selectedPlayer] + parseInt(points)
      }));
    }
    setShowPointsModal(false);
  };

  return (
    <div className="app">
      <div className="left-panel">
        <iframe
          src="https://jeopardylabs.com/play/dependency-inversion-principle?embed=1"
          title="Jeopardy Game"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
      <div className="right-panel">
        <h2>Jugadoras</h2>
        <ul className="players-list">
          {playersList.map(player => (
            <li
              key={player}
              className={selectedPlayer === player ? "selected" : ""}
              onClick={() => {
                setSelectedPlayer(player);
                setShowAnswerModal(true);
              }}
            >
              {player}: {scores[player]} pts
            </li>
          ))}
        </ul>
      </div>

      {/* Modal de respuesta correcta */}
      {showAnswerModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>¿Respondió correctamente?</h3>
            <div className="modal-buttons">
              <button onClick={handleCorrectAnswer}>Sí</button>
              <button onClick={() => setShowAnswerModal(false)}>No</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de puntos */}
      {showPointsModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>¿Cuántos puntos ganó {selectedPlayer}?</h3>
            <input
              type="number"
              value={points}
              onChange={(e) => setPoints(e.target.value)}
              placeholder="Introduce los puntos"
            />
            <div className="modal-buttons">
              <button onClick={handlePointsSubmit}>Enviar</button>
              <button onClick={() => setShowPointsModal(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
