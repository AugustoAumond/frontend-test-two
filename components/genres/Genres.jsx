import styled from "styled-components"; 

import { useContext, useEffect, useState } from "react";

import MyContext from "../../context/MyContext";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Navigation } from "swiper";
import Link from "next/link";

function Genres(props){
    const {change} = useContext(MyContext);
    const {setItem} = useContext(MyContext);
    const [list, setList] = useState();
    const [count, setCount] = useState(3);


    useEffect(()=>{
        setList(props.list);

        var screenGenres = document.querySelector('#genres').clientWidth;
            if (screenGenres > 1600){
                setCount(5);
            }

            if (screenGenres < 1600){
                setCount(4);
            }
    
            if (screenGenres < 1200){
                setCount(3);
            }
            
            if (screenGenres < 600){
                setCount(2);
            }

        console.log(document.querySelector('#genres').clientWidth);
    },[props.list])    

    return (
        <DivGenres id="genres">
            <Title change={change}>{props.name}</Title>

            <Swiper id="swiper"
            spaceBetween={100}
            slidesPerView={count}
            centeredSlides={false}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}>

                

                {list?.map((item, index)=>(
                    <SwiperSlide id="divswiper" key={index}>
                        <DivTitle id="title" change={change}>
                            {item.title}
                        </DivTitle>

                        <Link className="link" href={`movies/${item.id}`} onClick={(()=>setItem(item))}>
                            <div id="img">
                                <img src={ `https://image.tmdb.org/t/p/original${item.poster_path}`} alt="" />
                            </div>
                        </Link>
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

    #divswiper {
        min-width: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #img {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        
    }

    img {
        max-width: 150px;
        min-width: 150px;
        width: 100%;
        cursor: pointer;
    }

    img:hover {
        border: solid 2px gray;
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

@media (max-width: 1200px){
    font-size: 24px;
}

    @media (max-width: 600px){
        font-size: 18px;
    }
`


const DivTitle = styled.div`
position: relative;
top: 0;
left: 0;
width: 100%;
min-width: 150px;
display: flex;
align-items: center;
font-size: clamp(1vw,20px,1.3vw);
justify-content: center;
text-align: center;
color: ${props => props.change === false ? '#f1f1f1' : '#1c1b1b'};


    @media (max-width: 600px){
        font-size: 14px;
    }
`
