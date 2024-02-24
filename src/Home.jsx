import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  return(
    <HomeDiv>
      <ul className="game_list">
        <li
          className={`${location.pathname === '/1' ? 'active' : ''}`}
          onClick={() => navigate('/1')}
        >구구단</li>
        <li
          className={`${location.pathname === '/2' ? 'active' : ''}`}
          onClick={() => navigate('/2')}
        >끝말잇기</li>
        <li
          className={`${location.pathname === '/3' ? 'active' : ''}`}
          onClick={() => navigate('/3')}
        >숫자야구</li>
        <li
          className={`${location.pathname === '/4' ? 'active' : ''}`}
          onClick={() => navigate('/4')}
        >반응속도체크</li>
        <li
          className={`${location.pathname === '/5' ? 'active' : ''}`}
          onClick={() => navigate('/5')}
        >가위바위보</li>
        <li
          className={`${location.pathname === '/6' ? 'active' : ''}`}
          onClick={() => navigate('/6')}
        >로또</li>
        <li
          className={`${location.pathname === '/7' ? 'active' : ''}`}
          onClick={() => navigate('/7')}
        >틱택토</li>
        <li
          className={`${location.pathname === '/8' ? 'active' : ''}`}
          onClick={() => navigate('/8')}
        >지뢰찾기</li>
      </ul>

      {/* <h3>다시듣기</h3>
      <ul>
        <li>6강
          <ul>
            <li>6-5. useMemo와 useCallback</li>
            <li>6-6. Hooks에 대한 자잘한 팁들</li>
          </ul>
        </li>
      </ul> */}

      <main>
        <Outlet />
      </main>
    </HomeDiv>
  )
}

const HomeDiv = styled.div`
  min-width: 840px;
  max-width: 1600px;
  * {
    box-sizing: border-box;
  }

  ul.game_list{
    display: flex;
    align-items: center;
    justify-content: center;
    li{
      padding: 20px 24px;
      cursor: pointer;
      position: relative;
      + li::before{
        content: '';
        width: 2px;
        height: 2px;
        border-radius: 50%;
        background-color: #555;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-50%, -50%);
      }

      &:after{
        content: '';
        width: 0;
        height: 2px;
        position: absolute;
        left: 50%;
        bottom: 12px;
        transform: translate(-50%, 0);
        transition: .25s;
      }

      &.active{
        color: #222;
        &::after{
          width: calc(100% - 48px);
          background-color: #669df6;
          /* background-color: #4675c0; */
        }
      }

      &:not(.active){
        color: #555;
        &:hover::after{
          width: calc(100% - 48px);
          background-color: #669df6;
        }
      }
    }
  }

  main{
    padding: 20px;
    p{
      text-align: center;
    }
    form{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    input{
      height: 30px;
      padding: 0 6px;
      border: 1px solid #555;
      border-radius: 6px;
      outline-color: #669df6;

      &[type="number"]::-webkit-outer-spin-button,
      &[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
`