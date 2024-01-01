import styled from "styled-components";



export const Containerinput = styled.div`
background-color: #fff;
width: 65.6rem;
height: 40px;
margin-top: 15px;
display: flex;
justify-content: center;

`;


export const Input = styled.input`
width: 100%;
height: 100%;
border: none;
background-color: #fff;
color: #4b5563;
padding-left: 10px;
border-radius: 5px;
cursor: pointer;


&:focus {
    border: 3px solid #f97316;
    outline: none; 
    cursor: pointer;
    
  }


  &::placeholder {
    color: #4b5563;
    font-size: 15px;
    
  }


`;