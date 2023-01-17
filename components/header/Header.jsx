import styled from "styled-components";
import {useContext, useState } from "react";

import MyContext from "../../context/MyContext";

import Link from "next/link";

import {BsList} from 'react-icons/bs';


function Header(){
    const {change} = useContext(MyContext);
    const [open, setOpen] = useState(false);

    //Abrir o Header em páginas menores;
    function Open(){
        if (open === undefined){
            setOpen(true);
        } else {
            setOpen(!open);
        }
    }
    return (
        <DivHeader open={open}>

            <BsList id="bs" onClick={(()=>{Open()})}/>

            <CentralizeContainer change={change}>
                <Link className="link" href='/'>
                    <Button change={change} id="link">HOMEPAGE</Button>
                </Link>
                
                <Link className="link" href='/category'>
                    <Button change={change} id="link">CATEGORIAS</Button>
                </Link>
                
                <Link className="link" href='/movies'>
                    <Button change={change} id="link">FILMES</Button>
                </Link>    
            </CentralizeContainer>

            <CentralizeContainer1 open={open}>
                <Link className="link" href='/'>
                    <Button change={change} id="link">HOMEPAGE</Button>
                </Link>
                
                <Link className="link" href='/category'>
                    <Button change={change} id="link">CATEGORIAS</Button>
                </Link>
                
                <Link className="link" href='/movies'>
                    <Button change={change} id="link">FILMES</Button>
                </Link>    
            </CentralizeContainer1>
        </DivHeader>
    )
}
export default Header;

const DivHeader = styled.div`
    position: relative;
    margin-top: 50px;
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
        z-index: 3;

        #bs {
            display: flex;
            position: absolute;
            right: 25px;
            width: 35px;
            height: 35px;
        }
    }

    @media (max-width: 600px){
        top: -15px;
        margin-top: unset;
        height: ${props => props.open === true || props.open === undefined ? '170px' : '35px'};
    }
`

const Button = styled.div `
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 35px;
    background: ${props => props.change === false ? 'gray' : '#090934'};
    font-weight: 500;
    border-radius: 5px;
    transition: .7s;
    cursor: pointer;

    #link:hover {
        scale:1.25;
    }
`

const CentralizeContainer = styled.div`
    position: relative;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: solid ${props => props.change === false ? 'gray' : '#090934'};
    text-decoration: none;

    @media(max-width: 600px){
        display: none;
    }
`

const CentralizeContainer1 = styled.div`
    position: relative;
    text-decoration: none;
    top: 30px;
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