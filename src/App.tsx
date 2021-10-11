import React, { useState } from 'react';
import './App.css';
import CARDS from './assets/cards.json';
import { CardViewer } from './components/CardViewer';
import { ControlPanel } from './components/ControlPanel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import { Card } from './interfaces/card';
import { AddCardModal } from './components/AddCardModal';


function App(): JSX.Element {
  const [activeCard, setActiveCard] = useState<Card>(CARDS[0] as unknown as Card);
  const [answerRevealed, setAnswerRevealed] = useState<boolean>(false);
  const[visible, setVisible] = useState<boolean>(false);
  const [deck, setDeck] = useState<Card[]>(CARDS);

  function addCard(newCard: Card){
    setDeck([...deck, newCard]);
  }

  return (
    <Container className="App">
      <Row>
        <ControlPanel 
        showAddCardModal={setVisible}
        setCard={setActiveCard} 
        reveal={setAnswerRevealed}
        deck={deck}
        answerRevealed={answerRevealed}></ControlPanel>
        <CardViewer card={activeCard} answerRevealed={answerRevealed}></CardViewer>
        <AddCardModal addCard={addCard} visible={visible} setVisible={setVisible}></AddCardModal>
      </Row>
    </Container>
  );
}

export default App;
