import { memo } from "react";
import { styled } from "styled-components";

const Ball = memo(function Ball({ number }) {
  let background;
  if(number <= 10) {
    background = 'red';
  } else if(number <= 20) {
    background = 'orange';
  } else if(number <= 30) {
    background = 'yellow';
  } else if(number <= 40) {
    background = 'blue';
  } else {
    background = 'green'
  }

  return (
    <BallDiv className="ball" style={{background}}>{number}</BallDiv>
  )
});

Ball.displayName = "Ball";

export default Ball;

const BallDiv = styled.p`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 1px solid black;
  border-radius: 20px;
  line-height: 40px;
  font-size: 20px;
  text-align: center;
  + p{
    margin: 0 0 0 20px;
  }
`