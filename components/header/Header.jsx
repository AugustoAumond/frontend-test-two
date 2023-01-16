import Link from "next/link";
import styled from "styled-components";

import {useState } from "react";

import {BsList} from 'react-icons/bs';

function Header(){
    const [open, setOpen] = useState(false);

    function Open(){
        if (open === undefined){
            setOpen(true);
        } else {
            setOpen(!open);
        }
    }
    return (
        <DivHeader>

            <BsList id="bs" onClick={(()=>{Open()})}/>

            <CentralizeContainer>
                <Link className="link" href='/'>
                    <div id="link">HOMEPAGE</div>
                </Link>
                
                <Link className="link" href='/category'>
                    <div id="link">CATEGORIAS</div>
                </Link>
                
                <Link className="link" href='/movies'>
                    <div id="link">FILMES</div>
                </Link>    
            </CentralizeContainer>

            <CentralizeContainer1 open={open}>
                <Link className="link" href='/'>
                    <div id="link">HOMEPAGE</div>
                </Link>
                
                <Link className="link" href='/category'>
                    <div id="link">CATEGORIAS</div>
                </Link>
                
                <Link className="link" href='/movies'>
                    <div id="link">FILMES</div>
                </Link>    
            </CentralizeContainer1>

        </DivHeader>
    )
}
export default Header;

const DivHeader = styled.div`
position: relative;
top: 40px;
left: 50%;
transform: translateX(-50%);
width: 100%;
height: 100px;

    
    #bs {
        display: none;
        cursor: pointer;
        color: gray;
    }

    @media(max-width: 600px){
        position: relative;
        width: 50%;
        left: unset;
        transform: translateX(100%);
        right: 0;
        top: -14px;
        z-index: 3;

        #bs {
            display: flex;
            position: absolute;
            right: 25px;
            width: 35px;
            height: 35px;
        }
    }
`

const CentralizeContainer = styled.div`
position: absolute;
top: 0;
left: 50%;
transform: translateX(-50%);
width: 90%;
height: 100%;
display: flex;
justify-content: space-around;
align-items: center;
border: solid gray;
text-decoration: none;

    #link {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        height: 35px;
        background: gray;
        font-weight: 500;
        border-radius: 5px;
        transition: .7s;
        cursor: pointer;
    }

    #link:hover {
        scale:1.25;
    }

    @media(max-width: 600px){
        display: none;
    }
`

const CentralizeContainer1 = styled.div`
position: absolute;
text-decoration: none;
top: 50px;
right: 20px;
flex-direction: column;
width: 100%;
border: unset;
display: none;

#link {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 35px;
    background: gray;
    font-weight: 500;
    border-radius: 5px;
    transition: .7s;
    cursor: pointer;
    margin: 5px;
}

#link:hover {
    scale: 1.1;
}

    @media (max-width: 600px){
        display: ${props => props.open === true || props.open === undefined ? 'flex' : 'none'};
    }
`