import React, { useState } from 'react';
import './App.css';
import CARDS from './assets/cards.json';
import { CardViewer } from './components/CardViewer';
import { ControlPanel } from './components/ControlPanel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import { Card } from './interfaces/card';



function App(): JSX.Element {
  const [activeCard, setActiveCard] = useState<Card>(CARDS[0] as unknown as Card);

  return (
    <Container className="App">
      <Row>
        <ControlPanel setCard={setActiveCard}></ControlPanel>
        <CardViewer card={activeCard}></CardViewer>
      </Row>
    </Container>
  );
}

export default App;
