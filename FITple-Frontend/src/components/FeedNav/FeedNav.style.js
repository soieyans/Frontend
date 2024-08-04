import styled from "styled-components";


export const Container = styled.div`
    
    position:relative;
    width:200px;
    display:flex;
    flex-direction:column;
    gap:30px;    
`

export const Items = styled.div`
    position:relative;
    font-size:24px;
    font-weight:bold;
    &:hover{
        
        font-size:32px;
        font-weight:800;
        & > div {
            opacity: 1; 
        }
    }
`

export const UnderLine = styled.div`
    position:absolute;
    bottom:0;
    left:-10;
    width:90px;
    height:20px;
    background-color:#AED4FF;
    opacity:0;
    z-index:-1;
`