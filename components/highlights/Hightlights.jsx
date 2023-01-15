import styled from "styled-components";

import { useState, useEffect, useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import axios from "axios";
import MyContext from "../../context/MyContext";

function Hightlights(){
    const [list, setList] = useState();
    const {change} = useContext(MyContext);

    useEffect( () =>{

        axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=fdec3cf017f52d95fdcd581919da1255')
        .then(response => {
            let newList = [];

            response.data.results.forEach(element => {
                if (newList.length < 6){
                    console.log(element)
                    newList.push(element)
                }
                setList(newList);
            });
            console.log(list);
        })

        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=fdec3cf017f52d95fdcd581919da1255&language=en-US')
        .then(response => {
            console.log(response.data);
        })

    },[])

    return (
        <DivHighlights>
            <Title change={change}>DESTAQUES DO MÊS</Title>
            <Swiper id="swiper"
                spaceBetween={30}
                centeredSlides={false}
                autoplay={{
                delay: 2500,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}>

                {list?.map((item, index)=>(
                    <SwiperSlide key={index}>
                        <div>
                            <DivTitle change={change}>
                                {item.title}
                            </DivTitle>

                            <img src={ `https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt="" />

                            <div id="infos">
                                <p id="description">{item.overview}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    ))}
            </Swiper>
            
        </DivHighlights>
    )
}
export default Hightlights;

const DivHighlights = styled.div`
position: relative;
left: 50%;
transform: translateX(-50%);
top: 80px;
max-width: 550px;
max-height: 300px;

    #swiper {
        position: relative;
        top: 30px;
    }

    img {
        position: relative;
        top: 10px;
        width: 100%;
        z-index: 2;
        opacity: .8;
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

const Title = styled.h1`
text-align: center;
color: ${props => props.change === false ? 'white' : '#1c1b1b'}
`

const DivTitle = styled.div`
position: relative;
top: 0;
left: 0;
width: 100%;
display: flex;
align-items: center;
font-size: 26px;
justify-content: center;
color: ${props => props.change === false ? 'white' : '#1c1b1b'}
`