import styled from 'styled-components';
import  Header from '../../components/Header/Header'
import {Containerinput, Input} from '../../components/Inputs/Inputs'
import { Titulo } from '../../components/Titulo/Titulo';
import BoxMeals from '../../components/BoxMeals/BoxMeals';
import { useState, useEffect } from 'react';


const P = styled.p`
color:rgb(75 85 99 / 1);
font-size: larger;
font-size: 15px;
position: fixed;
top: 15rem;
right: 45rem;
`;

const MainSection = styled.main`
margin-top: 5rem;


`;

const BoxRecipes = styled.div`
display: grid;
grid-template-columns:repeat(3, 1fr);
grid-gap: 40px;
max-width: 1200px;
margin: 0 auto;
margin-top: 10rem;


`;

const BoxRecipes2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 1500px;

`;


const Boxmain = styled.div`
position: absolute;
top: 7rem;
left: 18rem;
margin-bottom: 30rem;

`;


const Form = styled.form`
  display: flex;
  align-items: center;
`;

const Recipes = () =>{
  const [Recipes, setRecipes] = useState('');
  const [Responseinput,setResponseinput ] = useState('');
  const [Link, setLink ] = useState('')
 
  const fetchRecipes = async ()=>{
    try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?${Link}${Responseinput}`,{
            method: 'GET',

        });
        const data = await response.json();
        setRecipes(data.meals);
        console.log(data)
    } catch (error) {
            console.error('Erro ao buscar a lista', error);
          }
  }
  useEffect(() => {
    fetchRecipes();
    if (Responseinput) {
      setLink('s=');
    } else {
      setLink('');
    }
  }, [Responseinput]); 



  const handleresponse =(e)=>{
    setResponseinput(e.target.value);
    console.log(Responseinput);
  }

  
  
  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipes();
  };




  return(
 <>
<Header/>


<MainSection>

  <Boxmain>
<Titulo>Search Melas by Name</Titulo>
<Form onSubmit={handleSearch} >
<Containerinput>
  <Input 
  onChange={handleresponse} 
  value={Responseinput} 
  placeholder='Search for Meals'
  />
</Containerinput>
</Form>
</Boxmain>


<BoxRecipes2>
<BoxRecipes>
{Recipes ? (
    Recipes.length > 0 ? (
      Recipes.map((recipe) => (
        <BoxMeals
          key={recipe.idMeal}
          ImgMeals={recipe.strMealThumb}
          TituloMeals={recipe.strMeal}
          SubtituloMeals={recipe.strInstructions}
          Linkyoutube={recipe.strYoutube}
          idMeal={recipe.idMeal}
        />
      ))
    ) : (
      <P>Receitas não encontradas.</P>
    )
  ) : (
    <P>Receitas não encontradas.</P>
  )}
</BoxRecipes>
</BoxRecipes2>
</MainSection>
 </>
 )}


export default Recipes;


