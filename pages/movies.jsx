import styled from "styled-components";

import axios from "axios";

import { useContext, useEffect, useState } from "react";

import MyContext from "../context/MyContext";

import GlobalStyle from "../Globals_style/Globals";

import Toggle from "../components/toggle/Toggle";
import Header from "../components/header/Header";
import Movie from "../components/movies/Movies";

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

        <H1 change={change}>TODOS O FILMES</H1>

        <Movie/>
    </DivMovies>)
}
export default Movies;

const DivMovies = styled.div`
position: absolute;
top: 0;
left: 0;
min-height: 100vh;
height: 2600px;
width: 100%;
background: ${props => props.change === false ? '#1c1b1b' : '#f1f1f1'};
display: flex;
flex-direction: column;
padding: 20px;

    @media(max-width: 2170px){
        height: 3100px;
    }

    @media(max-width: 1756px){
        height: 4150px;
    }

    @media(max-width: 1331px){
        height: 5700px;
    }

    @media(max-width: 906px){
        height: 10800px;
    }

`

const H1 = styled.h1`
position: relative;
top: 80px;
left: 50%;
transform: translateX(-50%);
width: 300px;
color: ${props => props.change === false ? '#f1f1f1' : '#090934'};
text-align: center;

    @media(max-width: 1000px){
        font-size: 24px;
    }

    @media(max-width: 885px){
        font-size: 20px;
    }
`