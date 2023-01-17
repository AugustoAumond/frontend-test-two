import styled from "styled-components";

import { useState, useEffect, useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import axios from "axios";
import MyContext from "../../context/MyContext";
import Link from "next/link";

function Hightlights(){
    const [list, setList] = useState();
    const {change} = useContext(MyContext);
    const { setItem} = useContext(MyContext);

    useEffect(() =>{
            axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=fdec3cf017f52d95fdcd581919da1255')
            .then(response => {
            let newList = [];
            response.data.results.forEach(element => {
                if (newList.length < 6){
                    newList.push(element)
                }
                setList(newList);
            });
        }).catch((err)=>{
            console.log(err);
        })      
    },[])

    return (
        <DivHighlights>
                <Title change={change}>DESTAQUES DO MÊS</Title>
                <Swiper id="swiper"
                    spaceBetween={30}
                    loop={true}
                    simulateTouch={true}
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

                                <Link className="link" href={`movies/${item.id}`} onClick={(()=>setItem(item))}>
                                    <img src={ `https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt="" />
                                </Link>
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
margin-top: 20px;
max-width: 850px;
width: 90%;

    #swiper {

       
    }

    img {
        position: relative;
        top: 10px;
        width: 100%;
        z-index: 2;
        opacity: .8;
        cursor: pointer;
    }
`

const Title = styled.h1`
text-align: center;
color: ${props => props.change === false ? 'white' : '#090934'};

@media(max-width: 500px){
    font-size: 20px;
}
`

const DivTitle = styled.div`
position: relative;
top: 0;
left: 0;
width: 100%;
display: flex;
align-items: center;
font-size: clamp(0.4vw,26px,4.9vw);
justify-content: center;
color: ${props => props.change === false ? 'white' : '#090934'}
`