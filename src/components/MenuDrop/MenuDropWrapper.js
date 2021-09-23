import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    grid-row: 1/1;
    grid-column:1/14;
    background-color: rgb(179, 41, 41);
    box-shadow: 7px -18px 71px #000000;
`

export const Menu = styled.ul`
    list-style:none;
`

export const MenuPokebola = styled.li`
    position:relative;
    padding: 0.188rem 0.313rem 0rem 0rem;
    height: 2.625rem;
    background-color: transparent;
    :hover{
        background-color: rgb(36, 3, 3);
        ul{
            display: block;
        }
    }
    a:hover{
        background:rgb(124, 11, 11);
    }

`

export const IconPokebola = styled.i`
    font-size:2.500rem;
    color:rgb(255, 255, 255);
    padding:2px 30px 0px 30px;
    text-decoration:none;
`

export const UlMenu = styled.ul`
    margin-top: 30px;
    position:absolute;
    top:15px;
    background-color:transparent;
    display:none;
    li{
        width: 300px;
        display:block;
        background-color: rgb(36, 3, 3);
    
    }
    a{
        text-decoration:none; 
        padding:10px 10px 5px 0px; 
        display:block;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    li:last-child{
        border-bottom-right-radius:30% 90%;
    }
`
export const FotoDev = styled.li`
    width:300px;
    height: 250px;
    color: #ffffff;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 5px solid rgb(255, 255, 255);
        margin: 10px;
    }
`
export const LinksRede = styled.li`
    img{
        filter: invert(1);
        width: 50px;
        height: 50px;
        padding-right: 20px;
    }

`
export const LinkAPI = styled.li`
    padding-top: 10px;
    height: 5.000rem;
    a{
        border-bottom-right-radius: 13px;
    }
`