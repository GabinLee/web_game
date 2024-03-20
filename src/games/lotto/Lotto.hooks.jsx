import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Ball from "./Ball.item";
import { styled } from "styled-components";

function getWinNumbers() {
  console.log('getWinNumbers');
  const candidate = Array(45).fill().map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}


export default function LottoHooks() {
  const [winBalls, setWinBalls] = useState([]); // 당첨 숫자 6개
  const lottoNumbers = useMemo(() => getWinNumbers(), [])
  const [winNumbers, setWinNumbers] = useState(lottoNumbers); // 뽑은 7개의 숫자
  const [bonus, setBonus] = useState(null); // 보너스 숫자 1개
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]);

  useEffect(() => {
    for(let i = 0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]])
      }, (i + 1) * 1000)
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000);

    return () => {
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      })
    };
  }, [timeouts.current]);

  const onClickRedo = useCallback(() => {
    // console.log('onClickRedo');
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  }, [winNumbers]);


  return(
    <LottoDiv >
      <p>당첨 숫자</p>
        <div className="ball_group">
          {winBalls.map((v) => <Ball key={v} number={v} />)}
        </div>
        <p>보너스!</p>
        {bonus && <Ball number={bonus} />}
        {redo && <button onClick={() => onClickRedo()}>한 번 더!</button>}
    </LottoDiv>
  )
}

const LottoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .ball_group{
    height: 80px;
  }
`