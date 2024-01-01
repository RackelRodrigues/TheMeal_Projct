import styled from 'styled-components';
import { Link} from 'react-router-dom';
import {Outlet} from 'react-router-dom';

const Div = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    position:absolute;
    top: 0; 
    width: 84%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
    justify-content: space-between;
    padding: 0 8%;
    height: 8.5%;
    background-color: #fff;
    margin-bottom: 10rem;
   
`;

const H4 = styled.h4`
  color: #f97316;
  font-size: 23px;
  background-color: #fff;

 
 `;

const Divj = styled.div`
background-color: #fff;
height: 100%;
`;

 const Button = styled.button`
 color: #000;
 background-color: #fff;

 font-weight: 400; 
 height: 100%;
 outline: none; 
 border: none;

 &:hover{
 background-color: #f97316;
 color: #fff;
 border-radius: 0;
 height: 100%;
 outline: none; 
 border: none;

 }
 
 
 `;



const MainSection = styled.main`
  background-color: red;
  
`;



const Header = ()=>{

    return(
    <>
 <Div>
<Link to="/Home">
<H4>início</H4>
</Link>

<Divj>
<Link to='/by-name'>
<Button>Pesquisar Receitas</Button>
</Link>

<Link to='/by-Letter'>
<Button>Receitas por Letra</Button>
</Link>

<Link to='/by-ingredients'>
<Button>Receitas por ingredientes</Button>
</Link>
</Divj>

</Div>   
    

<MainSection>

<Outlet/>

</MainSection>

    </>
)}

export default Header;