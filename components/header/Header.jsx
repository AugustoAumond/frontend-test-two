import styled from "styled-components";

function Header(){
    return (
        <DivHeader>
            <CentralizeContainer>
                <div id="link">HOMEPAGE</div>

                <div id="link">CATEGORIAS</div>

                <div id="link">FILMES</div>
            </CentralizeContainer>

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

    #link {
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
`