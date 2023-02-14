import React from 'react';
import {Container} from "./components/Container";
import {Header} from "./components/Header";
import {Start} from "./components/Start";
import {useAppSelector} from "./hooks/redux";
import {Wait} from "./components/Wait";
import {Rules} from "./components/Rules";

function App() {
    const {waitOpponent} = useAppSelector(state => state.game)
  return (
    <Container>
        <Header/>
        {waitOpponent ? <Wait/> : <Start/>}
        <Rules/>
    </Container>
  );
}

export default App;
