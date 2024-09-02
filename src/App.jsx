import { useState } from 'react';
import { getRandomIndex } from './randomIndex';
import { getComputerChoices } from './jogadaComputador';
import { determineResult } from './assets/Winner';
import imagemPedra from './assets/pedra.png';
import imagemPapel from './assets/papel.png';
import imagemTesoura from './assets/tesoura.png';
import './App.css';

const Jokenpo = () => {

  
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    const computerChoices = getComputerChoices();
    const randomIndex = getRandomIndex(computerChoices);
    const computerChoice = computerChoices[randomIndex];
    setComputerChoice(computerChoice);
    const result = determineResult(choice, computerChoice);
    setResult(result);
  };

  return (
    <div className="jokenpo-container">
      <div className="jokenpo-header">
        <h1>Jokenpo</h1>
      </div>
      <div className="jokenpo-choices">
        <button onClick={() => handlePlayerChoice('pedra')}> 
          <img id = "tamanhoPedra" src={imagemPedra} alt="./assets/pedra.png" /></button>
        <button onClick={() => handlePlayerChoice('papel')}>
          <img id = "tamanhoPapel" src={imagemPapel} alt="./assets/papel.png" /></button>
        <button onClick={() => handlePlayerChoice('tesoura')}>
          <img id = "tamanhoTesoura" src={imagemTesoura} alt="./assets/tesoura.png" /></button>
      </div>
      <div className="jokenpo-result">
        <p>Resultado: {result}</p>
      </div>
      <div className="jokenpo-player-choice">
        <p>Você escolheu: {playerChoice}</p>
      </div>
      <div className="jokenpo-computer-choice">
        <p>O computador escolheu: {computerChoice}</p>
      </div>
    </div>
  );
};

export default Jokenpo;