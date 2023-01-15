import styled from "styled-components"; 

import { useContext, useEffect, useState } from "react";

import MyContext from "../../context/MyContext";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Navigation } from "swiper";



function Genres(props){
    const {change} = useContext(MyContext);
    const [list, setList] = useState()

    useEffect(()=>{
        setList(props.list)
    },[props.list])
    

    return (
        <DivGenres>
            <Title change={change}>{props.name}</Title>

            <Swiper id="swiper"
            spaceBetween={100}
            slidesPerView={3}
            centeredSlides={false}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}>

                

                {list?.map((item, index)=>(
                    <SwiperSlide key={index}>
                        <DivTitle change={change}>
                            {item.title}
                        </DivTitle>

                        <div id="img">
                            <img src={ `https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt="" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </DivGenres>
    )
}
export default Genres;

const DivGenres = styled.div`
position: relative;
width: 80%;
height: 300px;

    #img {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        
    }

    img {
        max-width: 350px;
        min-width: 150px;
        width: 100%;
        cursor: pointer;
    }

    img:hover {
        scale: 1.5;
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

const Title = styled.h1`
position: relative;
bottom: 10px;
font-size: 32px;
color: ${props => props.change === false ? '#f1f1f1' : '#1c1b1b'};
`


const DivTitle = styled.div`
position: relative;
top: 0;
left: 0;
width: 100%;
display: flex;
align-items: center;
font-size: 20px;
justify-content: center;
color: ${props => props.change === false ? 'white' : '#1c1b1b'}
`
