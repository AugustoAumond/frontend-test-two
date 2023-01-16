import styled from "styled-components";

import axios from "axios";

import { useContext, useEffect, useState } from "react";

import MyContext from "../context/MyContext";

import GlobalStyle from "../Globals_style/Globals";

import Toggle from "../components/toggle/Toggle";
import Header from '../components/header/Header';
import Genres from "../components/genres/Genres";


function Category(){
    const {change} = useContext(MyContext);
    const [category, setCategory] = useState();
    const [action, setAction] = useState();
    const [drama, setDrama] = useState();
    const [animation, setAnimation] = useState();
    const [comedy, setComedy] = useState();


    useEffect( () =>{
        axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=fdec3cf017f52d95fdcd581919da1255')
        .then(response => {
            let action = [];
            let animation = [];
            let comedy = [];
            let drama = [];
            response.data.results.forEach( e => {
                e.genre_ids.forEach((item, index)=>{
                    if (item === 28 || item === 12){
                        if (action[action.length - 1] !== undefined){
                            if (action[action.length-1].id === e.id){
                                return
                            } else {
                                action.push(e);
                            }
                        } else {
                            action.push(e);
                        }
                    }

                    if (item === 16 || item === 14){
                        if (animation[animation.length - 1] !== undefined){
                            if (animation[animation.length-1].id === e.id){
                                return
                            } else {
                                animation.push(e);
                            }
                        } else {
                            animation.push(e);
                        }
                    }

                    if (item === 35 || item === 10749){
                        if (comedy[comedy.length - 1] !== undefined){
                            if (comedy[comedy.length-1].id === e.id){
                                return
                            } else {
                                comedy.push(e);
                            }
                        } else {
                            comedy.push(e);
                        }
                    }

                    if (item === 18 || item === 99){
                        if (drama[drama.length - 1] !== undefined){
                            if (drama[drama.length-1].id === e.id){
                                return
                            } else {
                                drama.push(e);
                            }
                        } else {
                            drama.push(e);
                        }
                    }
                })
            });
            setAction(action);
            setAnimation(animation);
            setComedy(comedy);
            setDrama(drama);
        })

        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=fdec3cf017f52d95fdcd581919da1255&language=en-US')
        .then(response => {
            setCategory(response.data.genres);
        })
    },[])

    console.log(category)

    console.log(action, drama, animation, comedy);



    return (
        <DivCategory change={change}>
            <GlobalStyle/>

            <Toggle/>
            
            <Header/>

            <H1 change={change}>CATEGORIAS</H1>

            <Genre change={change}>
                <Genres list={action} name={'ACTION'}/>

                <Genres list={animation} name={'ANIMATION / FANTASIA'}/>

                <Genres list={comedy} name={'COMÉDIA'}/>

                <Genres list={drama} name={'DRAMA / DOCUMENTÁRIO'}/>
            </Genre>
        </DivCategory>
    )
}
export default Category;

const DivCategory = styled.div`
position: absolute;
top: 0;
left: 0;
height: 1750px;
max-height: 200vh;
min-height: 100vw;
width: 100%;
background: ${props => props.change === false ? '#1c1b1b' : '#f1f1f1'};

    @media(max-width: 550px){
        max-height: 340vw;
    }
`

const H1 = styled.h1 `
position: relative;
top: 80px;
left: 50%;
transform: translateX(-50%);
width: 200px;
color: ${props => props.change === false ? '#f1f1f1' : '#090934'};

    @media (max-width: 500px){
        font-size: 20px;
        text-align: center;
    }
`

const Genre = styled.div`
position: relative;
left: 50%;
transform: translateX(-50%);
top: 120px;
width: 90%;
border: solid 1px ${props => props.change === false ? 'gray' : '#090934'};;
height: 1375px;
max-height: 230vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
`