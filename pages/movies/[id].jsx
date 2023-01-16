import styled from "styled-components";

import { useContext, useEffect, useState } from "react";

import MyContext from "../../context/MyContext";

import GlobalStyle from "../../Globals_style/Globals";

import Toggle from "../../components/toggle/Toggle";
import Header from '../../components/header/Header';
import Description from "../../components/description/Description";

function Details(props){
    const {change} = useContext(MyContext);

    console.log(props.item);

    return (
        <DivDetails change={change}>
            <GlobalStyle/>

            <Toggle/>

            <Header/>

            <Description/>
        </DivDetails>
    )
}
export default Details;

const DivDetails = styled.div`
position: absolute;
top: 0;
left: 0;
height: 1000px;
width: 100%;
background: ${props => props.change === false ? '#1c1b1b' : '#f1f1f1'};
`