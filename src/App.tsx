import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Gugudan from './games/gugudan/Gugudan';
import WordRelay from './games/wordRelay/WordRelay';
import NumberBaseball from './games/numberBaseball/NumberBaseball';
import ResponseCheck from './games/responseCheck/ResponseCheck';
import RspHooks from './games/rsp/Rsp.hooks';
import LottoHooks from './games/lotto/Lotto.hooks';
import TicTacToe from './games/ticTacToe/TicTacToe';
import MineSearch from './games/mineSearch/MineSearch';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='1' element={<Gugudan />}/>
          <Route path='2' element={<WordRelay />}/>
          <Route path='3' element={<NumberBaseball />}/>
          <Route path='4' element={<ResponseCheck />}/>
          <Route path='5' element={<RspHooks />}/>
          <Route path='6' element={<LottoHooks />}/>
          <Route path='7' element={<TicTacToe />}/>
          <Route path='8' element={<MineSearch />}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
