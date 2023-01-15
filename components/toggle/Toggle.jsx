import styled from "styled-components";

import { useContext } from "react";
import MyContext from "../../context/MyContext";

function Toggle(){
    const {change, setChange} = useContext(MyContext);

    return (
        <DivToggle>
            <label className="switch">
                <input type="checkbox" onChange={(()=>setChange(!change))} checked={change === true}/>
                <span className="slider round"></span>
            </label>

            <DivTheme change={change}>
                {change === false ? "DARK THEME" : "LIGHT THEME"}
            </DivTheme>
        </DivToggle>
    )
}
export default Toggle;

const DivToggle = styled.div`
position: relative;
top: 20px;
left: 10px;
display: flex;
align-items: center;

.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}

.switch input { 
    opacity: 0;
    width: 0;
    height: 0;
}


.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    -webkit-transition: .4s;
    transition: .4s;
    border: solid 1px gray;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: gray;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked + .slider {
    background-color: white;
}

input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}

`

const DivTheme = styled.div`
position: relative;
left: 10px;
background: unset;
color: ${props => props.change === false ? 'white' : 'black'}};
`