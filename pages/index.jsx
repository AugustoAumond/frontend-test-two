import styled from "styled-components";
import { useContext } from "react";

import MyContext from "../context/MyContext";

import GlobalStyle from "../Globals_style/Globals";

import Header from "../components/header/Header";
import Hightlights from "../components/highlights/Hightlights";
import Toggle from "../components/toggle/Toggle";

function Home() {
  const {change} = useContext(MyContext);

  return (
    <Div change={change}>
      <GlobalStyle/>

      <Toggle/>

      <Header/>

      <Hightlights/>
    </Div>
  )
}
export default Home;


const Div = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  background: ${props => props.change === false ? '#1c1b1b' : '#f1f1f1'};
  display: flex;
  flex-direction: column;
  padding: 20px;
`