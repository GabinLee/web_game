import { useEffect, useState } from "react"
import Try from "./Try.item";
import { styled } from "styled-components";

function getNumbers() { // 숫자 네개를 겹치지 않고 랜덤하게 뽑는 함수
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for(let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

export default function NumberBaseball() {
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const [tries, setTries] = useState([]);
  
  const [answer, setAnswer] = useState(getNumbers);

  useEffect(() => {
    console.log('answer', answer);
    console.log('tries', tries);
  }, [tries])

  const onSubmitForm = (e) => {
    e.preventDefault();
    if(value.length !== 4) {
      return alert('4자리 숫자를 입력해주세요.');
    }

    if(value === answer.join('')) { // 정답
      setTries((prevTries) => {
        return [...prevTries, {try: value, result: '홈런!'}]
      })
      setResult('홈런');
      alert('게임을 다시 시작합니다!');
      setValue('');
      setAnswer(getNumbers());
    } else { // 틀림
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if(tries.length >= 9) { // 10번 이상 틀렸을 때
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`);
        alert('게임을 다시 시작합니다!');
        setValue('');
        setAnswer(getNumbers());
        setTries([]);
      } else {
        for(let i = 0; i < 4; i += 1) {
          if(answerArray[i] === answer[i]) {
            strike += 1;
          } else if(answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        setTries((prevTries) => [...prevTries, {try: value, result: `${strike} 스트라이크, ${ball} 볼입니다.`}]);
        setValue('');
      }
    }
  };


  return(
    <NumberBaseballDiv>
      <h1>{result}</h1> 
      <form onSubmit={onSubmitForm}>
        <input
          maxLength={4}
          type="number"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
      <p>시도: {tries.length}</p>
      <ul>
        {tries.map((v, i) => (
          <Try key={`${v} ${i}`} tryInfo={v} />
        ))}
      </ul>
    </NumberBaseballDiv>
  )
}

const NumberBaseballDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ul{
    li{
      padding: 0 12px;
      + li{
        border-top: 1px solid #888;
      }
    }
  }
`