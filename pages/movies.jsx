import styled from "styled-components";

import axios from "axios";

import { useContext, useEffect, useState } from "react";

import MyContext from "../context/MyContext";

import GlobalStyle from "../Globals_style/Globals";

import Toggle from "../components/toggle/Toggle";
import Header from "../components/header/Header";

function Movies(){
    const {change} = useContext(MyContext);
    const [list, setList] = useState();

    useEffect( () =>{

        axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=fdec3cf017f52d95fdcd581919da1255')
        .then(response => {
                setList(response.data.results);
            });
        }, [])

        console.log(list);

    return (
    <DivMovies change={change}>
        <GlobalStyle/>

        <Toggle/>

        <Header/>

        {/*<Movies/>*/}
    </DivMovies>)
}
export default Movies;

const DivMovies = styled.div`
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