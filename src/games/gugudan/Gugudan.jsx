import { useRef, useState } from "react"
import { styled } from "styled-components";

export default function Gugudan() {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onChangeInput = (e) => {
    setValue(e.target.value)
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    if(parseInt(value) === first * second) {
      setResult('정답: ' + value);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
      inputRef.current.focus();
    } else {
      setResult('땡');
      setValue('');
      inputRef.current.focus();
    }
  }


  return (
    <GugudanDiv>
      <p>{first} 곱하기 {second}는?</p>
      <form onSubmit={onSubmitForm}>
        <input type="number"
          ref={inputRef}
          onChange={onChangeInput}
          value={value}
        />
        <button>입력!</button>
      </form>
      <p id="result">{result}</p>
    </GugudanDiv>
  )
}

const GugudanDiv = styled.div`
  form{
    input{
      width: 180px;
    }
    button{
      width: 60px;
      height: 30px;
      margin: 0 0 0 -60px;
      border: none;
      border-radius: 0 6px 6px 0;
      background-color: #669df6;
      color: white;
    }
  }
`