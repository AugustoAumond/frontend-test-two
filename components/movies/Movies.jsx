import styled from "styled-components"; 
import { useContext, useEffect, useState } from "react";

import MyContext from "../../context/MyContext";

import axios from "axios";

import Link from "next/link";

function Movie(){
    const {change} = useContext(MyContext);
    const {setItem} = useContext(MyContext);
    const [list, setList] = useState()
    const [search, setSearch] = useState()

    //Requisição da Api e filtro dos itens listados;
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=fdec3cf017f52d95fdcd581919da1255')
        .then((response)=>{
            if (search){
                let newList = [];
                list.map((e, index)=>{
                    if(e.title.toUpperCase().includes(search?.toUpperCase())) {
                        newList.push(e);
                    } 
                setList(newList);
                })
            } else {
                setList(response.data.results);
            }
        })
        .catch((err)=>{
            console.log(err);
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
    top: 20px;
    display: flex;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    flex-direction: column;
    align-items: center;
`

const DivInput = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    color: ${props => props.change === false ? 'white' : '#090934'};

    p {
        font-size: 24px;
    }

    input{
        max-width: 750px;
        border-radius: 8px;
        height: 35px;
        box-shadow: 3px 3px #ffffff0f;
        padding: 5px;
        font-weight: 700;
        
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

        @media(max-width: 500px){
            width: 200px;
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
    color: ${props => props.change === false ? 'white' : '#090934'};
`
