import { useState } from "react";
import useInterval from "./useInterval";
import { styled } from "styled-components";

// 라이프사이클
// class: constructor -> render -> ref -> componentDidMount -> (setState/props 바뀔 때 -> shouldComponentUpdate -> render -> componentDidUpdate)
//        부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸

// componentDidMount() { // 컴포넌트가 첫 렌더링된 후(비동기 요청을 많이 함)
// }

// componentDidUpdate() { // 리렌더링 후
// }

// componentWillUnmount() { // 컴포넌트가 제거되기 직전(비동기 요청 정리를 많이 함)
// }


const rspCoords = {
  바위: '0',
  가위: '-135px',
  보: '-282px'
}

const scores = {
  가위: 1,
  바위: 0,
  보: -1
}

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find(function(v){
    return v[1] === imgCoord;
  })[0]
}

const RspHooks = () => {
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);
  const [imgCoord, setImgCoord] = useState(rspCoords.바위);
  const [isRunning, setIsRunning] = useState(true);
  // const interval = useRef();

  // useEffect(() => {
  //   interval.current = setInterval(changeHand, 100);
  //   return () => {
  //     clearInterval(interval.current)
  //   }
  // }, [imgCoord])

  const changeHand = () => {
    if(imgCoord === rspCoords.바위){
      setImgCoord(rspCoords.가위);
    } else if(imgCoord === rspCoords.가위) {
      setImgCoord(rspCoords.보);
    } else if(imgCoord === rspCoords.보) {
      setImgCoord(rspCoords.바위);
    }
  };

  useInterval(changeHand, isRunning ? 100 : null)

  const onClickBtn = (choice) => () => {
    if(isRunning) {
      setIsRunning(false);
      const myScore = scores[choice];
      const cpuScore = scores[computerChoice(imgCoord)];
      const diff = myScore - cpuScore;
      if(diff === 0) {
        setResult('비겼습니다!');
      } else if([-1, 2].includes(diff)) {
        setResult('이겼습니다!');
        setScore((prevScore) => prevScore + 1);
      } else {
        setResult('졌습니다!');
        setScore((prevScore) => prevScore - 1);
      }
      
      setTimeout(() => {
        setIsRunning(true);
        // interval.current = setInterval(changeHand, 100)
      }, 10000)
    }
  }


  return(
    <RspDiv>
      <div id="computer"
          style={{ width: '150px', height: '200px', background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) no-repeat ${imgCoord} 0` }}
        />
        
        <div className="btn_group">
          <button id="rock" className="btn" onClick={onClickBtn('가위')}>가위</button>
          <button id="scissor" className="btn" onClick={onClickBtn('바위')}>바위</button>
          <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
        </div>  

        <p>{result}</p>
        <p>전체 {score}점</p>
    </RspDiv>
  )
}

export default RspHooks;

const RspDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  .btn_group{
    margin: 12px 0;
    button{
      width: 48px;
      height: 30px;
      border: none;
      border-radius: 6px;
      background-color: #669df6;
      color: white;
      + button{
        margin-left: 6px;
      }
    }
  }
`