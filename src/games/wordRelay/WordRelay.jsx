import { useRef, useState } from "react"
import { styled } from "styled-components";

export default function WordRelay() {
  const [word, setWord] = useState('리액트');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);


  const onSubmitForm = (e) => {
    e.preventDefault();
    if(value.length < 2) {
      alert('2글자 이상 입력해주세요.');
    } else {
      if(word[word.length - 1] === value[0]) {
        setResult('딩동댕');
        setWord(value);
        setValue('');
        inputRef.current.focus();
      } else {
        setResult('땡');
        setValue('');
        inputRef.current.focus();
      }
    }
  };


  return (
    <WordRelayDiv>
      <p>{word}</p>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="wordInput">글자를 입력하세요</label>
        <input id="wordInput"
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>입력!</button>
      </form>
      <p>{result}</p>
    </WordRelayDiv>
  )
}

const WordRelayDiv = styled.div`
  form{
    label{
      margin: 0 12px 0 0;
    }
    input{
      width: 240px;
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