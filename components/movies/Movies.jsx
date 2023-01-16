import styled from "styled-components"; 

import { useContext, useEffect, useState } from "react";

import MyContext from "../../context/MyContext";

import axios from "axios";
import Link from "next/link";



function Movie(props){
    const {change} = useContext(MyContext);
    const {setItem} = useContext(MyContext);
    const [list, setList] = useState()
    const [search, setSearch] = useState()

    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=fdec3cf017f52d95fdcd581919da1255')
        .then((response)=>{
            if (search){
                let newList = [];
                list.map((e, index)=>{
                    console.log(e.title);
                    if(e.title.toUpperCase().includes(search?.toUpperCase())) {
                        newList.push(e);
                    } 
                setList(newList);
                })
            } else {
                setList(response.data.results);
            }
            
        })
    },[list, search])
    

    return (
        <DivMovies>
                <DivInput change={change}>
                    <p>PESQUISAR PELO TITULO</p>
                    <input type={'text'} onChange={((e)=>{setSearch(e.currentTarget.value)})} />
                </DivInput>

                <DivGrid>
                {list?.map((item, index)=>(
                    <DivMovie key={index}>
                        <DivTitle change={change}>
                            {item.title}
                        </DivTitle>

                        <Link className="link" href={`movies/${item.id}`} onClick={(()=>setItem(item))}>
                            <div id="img">
                                <img src={ `https://image.tmdb.org/t/p/original${item.poster_path}`} alt="" />
                            </div>
                        </Link>
                    </DivMovie>
                ))}
                </DivGrid>
        </DivMovies>
    )
}
export default Movie;

const DivMovies = styled.div`
position: relative;
display: flex;
top: 100px;
left: 50%;
transform: translateX(-50%);
width: 80%;
height: 300px;
flex-direction: column;
align-items: center;
`

const DivInput = styled.div`
position: relative;
left: 20px;
display: flex;
flex-direction: column;
justify-content: flex-start;
height: 100px;
width: 100%;
color: ${props => props.change === false ? 'white' : '#1c1b1b'};

    p {
        font-size: 24px;
    }

    input{
        max-width: 750px;
        border-radius: 8px;
        height: 35px;
        box-shadow: 3px 3px #ffffff0f;
    }

    @media (max-width: 885px){
        p{
            font-size: 16px;
        } 
    }
`

const DivGrid = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
position: relative;
top: 30px;
`

const DivMovie = styled.div`
margin: 20px;
width: 300px;

#img {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    
}

img {
    width: 100%;
    cursor: pointer;
}

img:hover {
    border: solid 2px gray;
    scale: 1.1;
    min-width: 200px;
    z-index: 3;
}

#infos {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: .1s;
    cursor: pointer;
}

#infos:hover {
    opacity: 1;
}

#description {
    width: 90%;
    position: relative;
    top: 30px;
}
`


const DivTitle = styled.div`
position: relative;
top: 0;
left: 0;
width: 100%;
display: flex;
align-items: center;
font-size: 16px;
justify-content: center;
color: ${props => props.change === false ? 'white' : '#1c1b1b'}
`
