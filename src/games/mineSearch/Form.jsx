import { useCallback, useContext, useState, memo } from "react"
import { START_GAME, TableContext } from "./MineSearch";
import { styled } from "styled-components";

const Form = memo(() => {
  const [row, setRow] = useState(10);
  const [cell, setCell] = useState(10);
  const [mine, setMine] = useState(10);
  const { dispatch } = useContext(TableContext);
  
  const onChangeRow = useCallback((e) => {
    setRow(e.target.value);
  }, []);

  const onChangeCell = useCallback((e) => {
    setCell(e.target.value);
  }, []);

  const onChangeMine = useCallback((e) => {
    setMine(e.target.value);
  }, []);

  const onClickBtn = useCallback(() => {
    dispatch({ type: START_GAME, row, cell, mine })
  }, [row, cell, mine]);
  
  return (
    <FormDiv>
      <input type="number" placeholder="세로" value={row} onChange={onChangeRow} />
      <input type="number" placeholder="가로" value={cell} onChange={onChangeCell} />
      <input type="number" placeholder="지로" value={mine} onChange={onChangeMine} />
      <button onClick={onClickBtn} >시작</button>
    </FormDiv>
  )
});

export default Form;

const FormDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  input{
    width: 100px;
    margin: 0 12px 0 0;
  }
  button{ 
    width: 60px;
    height: 30px;
    border-radius: 6px;
    border: none;
    background-color: #669df6;
    color: white;
  }
`
