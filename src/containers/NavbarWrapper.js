import styled from "styled-components";
import colors from "../styles/Colors";

const NavbarWrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    color: #777675;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    .btn{
        font-weight: 500;
        font-size: 18px;
        border-radius: 10px 10px 0 0; 
        color: #777675;

        &:last-child{
            border-radius: 10px 10px 0 0 ; 
        }
        &:first-child{
            border-radius: 10px 10px 0 0 ; 
        }

        &:hover{
            background-color: ${colors.gray} !important;
            color: ${colors.yellow} !important;
        }
    }

    .active{
        background-color: ${colors.gray} !important;
        color: ${colors.yellow} !important;
    }

    @media screen and (max-width: 500px){
        .btn{    
            &:last-child{
                border-radius: 10px 0 0 0 ; 
            }
            &:first-child{
                border-radius: 0 10px 0 0 ; 
            }
        }
    }
`

export default NavbarWrapper;