import styled from "styled-components";

export const Logo = styled.img`
    grid-column: 5/9;
    grid-row: 2/2;
    padding-top: 50px;
    height: 100px;
    display: flex;
    justify-self: center;
`

export const PokedexContainerImg = styled.div`
    grid-column: 5/9;
    grid-row: 3/3;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: treme 1s alternate;
    animation-iteration-count: infinite ;

        p{
            width: 250px ;
            height: 250px;
            border-radius: 50%;
            box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.425);
        }

    @keyframes treme {
        0% {
            margin-left: 0px;
        }
        10% {
            margin-left: -5px;
            transform: rotate(-6deg);
        }
        20% {
            margin-left: 0px;
            transform: rotate(6deg);
        }
        30% {
            margin-left: 5px;
            transform: rotate(-6deg);
        }
        40% {
            margin-left: 0px;
            transform: rotate(0deg);
        }
        100% {
            margin-left: 0px;
        }
    }
`
export const ImgPokebola = styled.img`
    width: 250px ;
    height: 250px;
    border-radius: 50%;
`

export const CampoDePesquisa = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-column: 5/9;
    grid-row: 4/4;

        p{
            margin-bottom: 10px;
            text-transform: capitalize;
            height: 35px;
        }
`
export const DigitePokemon = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 35px;
    width: 400px;
    height: 60px;
    color: azure;
    background-color: transparent;
    border: none;
    outline: none;
    border-radius: 7px 7px 0px 0px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.493);
    margin-bottom: 20px;
    margin-top: 20px;

    :focus{
        background-color: rgba(70, 8, 8, 0.281);
    }
`
export const ButtonGo = styled.button`
    font-size: 24px;
    font-weight: 600;
    color: rgb(255, 255, 255);
    background-color: rgb(238, 184, 69);
    width: 400px;
    height: 80px;
    border-radius: 7px;
    border: none;

    :hover{
        text-shadow:1px 1px 2px rgba(0, 0, 0, 0.623);
    background-color: rgb(236, 199, 119);  
    }
    :active{
        transform: scale(0.97);
        transition: all 0.2s;
    }
`;