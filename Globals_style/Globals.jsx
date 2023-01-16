import { createGlobalStyle } from "styled-components";

<style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');    
</style>

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Open Sans', sans-serif;
        background: #1c1b1b;
        font-size: 14px;
        color: white;
        height: 100vh;
    }

    .link {
        text-decoration: none;
        color: white;
    }

    @media(max-width: 600px){
        .link {
            width: 100%;
        }
    }
`