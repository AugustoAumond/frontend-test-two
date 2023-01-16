import styled from "styled-components";

import { useContext, useEffect} from "react";

import MyContext from "../../context/MyContext";

import {AiFillStar} from 'react-icons/ai';

function Description(){
    const {change} = useContext(MyContext);
    const {item, setItem} = useContext(MyContext);

    useEffect(()=>{
        if (item === undefined){
            setItem(JSON.parse(localStorage.getItem('list')));
        } else {
            localStorage.setItem('list', JSON.stringify(item));
        }
    },[item])

    return (
        <DivDescription>
            <div id="img">
                <img src={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`} alt="" />
            </div>

            <Infos change={change}>
                <div id="details">
                    {item?.overview}
                </div>

                <div id="pop">
                    <div id="realese">
                        LANÇAMENTO: {item?.release_date}
                    </div>
                    
                    <div id="popularity">
                        <AiFillStar/>
                        {item?.vote_average}
                    </div>
                </div>
            </Infos>
        </DivDescription>
    )
}
export default Description;

const DivDescription = styled.div`
position: relative;
display: flex;
top: 100px;
left: 50%;
transform: translateX(-50%);
width: 75%;
max-width: 910px;
flex-direction: column;
align-items: center;


    img {
        width: 100%;
    }
`

const Infos = styled.div`
color: ${props => props.change === false ? 'white' : '#090934'};
position: relative;
top: 20px;

    #details {
        text-align: justify;
        font-size: 16px;
        max-width: 700px;
        font-weight: 500;
    }

    #pop {
        position: relative;
        top: 20px;
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        color: 
    }

        #popularity {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            width: 100px;
        }
`