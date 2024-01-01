import styled from 'styled-components';
import  Header from '../../components/Header/Header'
import {Titulo} from '../../components/Titulo/Titulo'
import {Containerinput} from '../../components/Inputs/Inputs'
import {Input} from '../../components/Inputs/Inputs'
import { useState, useEffect } from 'react';
import { useDispatch,useSelector } from "react-redux";
import NameActionstypes from '../../Redux/NameMeal/action-types'
import {useNavigate} from 'react-router-dom';



const Div = styled.div`
display: fixed;



`;


const MainSection = styled.main`
margin-top: 5rem;


`;

const DivSection = styled.div`
width: 50%;
margin: 0 auto;
background-color: blue;
`;


const ConteinerIngredientes = styled.div`
width: 500px;
height: 50px;
color: #000;
font-weight: bold;
font-size: 25px;
background-color: #fff;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
margin-top: 18px;
display: flex;
align-items: center;
padding: 10px;
cursor: pointer;
border-radius: 3px;

`;


const Boxoptions = styled.div`
display: grid;
grid-template-columns:repeat(2, 1fr);
margin: 0 auto;
grid-gap: 10px;
margin-top: 15px;

`;

const P = styled.p`
color:rgb(75 85 99 / 1);
font-size: larger;

`;

const Ingredients = ()=>{
    const [categorias, setcategorias] = useState()
 
  const fetchcategorias = async ()=>{
    try{
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list',{
            method: 'GET',

        });
        const data = await response.json();
        setcategorias(data.meals);
    } catch (error) {
            console.error('Erro ao buscar a lista', error);
          }
  }
  useEffect(() => {
    fetchcategorias();
  }, []); 
  const navegate = useNavigate();
  const dispatch = useDispatch();

  const {currentName} = useSelector((rootReducer)=> rootReducer.NameRecipe)
  
  const handleingredient= (ingredient)=>{
    dispatch({
      type: NameActionstypes.Name,
      payload: {currentName: ingredient}

     
    }) 
  navegate('/Meals');
  }

  const [searchInput, setSearchInput] = useState('');

  const handleresponse = (event) => {
    setSearchInput(event.target.value);
    console.log(searchInput);
  };

 

   return(
   <>
<Header/>

<MainSection>
<DivSection>
<Div>
<Titulo>Ingredientes</Titulo>
<Containerinput>
  <Input 
   placeholder='search for ingredients'
   onChange={(event) => handleresponse(event.target.value)} 
   value={searchInput} 
  />
</Containerinput>

<Boxoptions>
{categorias && categorias.length > 0 ? (
          categorias.map((categoria) => (
            <ConteinerIngredientes
              onClick={() => handleingredient(categoria.strIngredient)}
              key={categoria.idIngredient}
            >
              {categoria.strIngredient}
            </ConteinerIngredientes>
          ))
        ) : (
          <P>Nenhum ingrediente encontrado</P>
        )}
</Boxoptions>
</Div>
</DivSection>
</MainSection>
    </>
    )
}


export default Ingredients;