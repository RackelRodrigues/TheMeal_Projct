import styled from "styled-components";
import { Titulo } from "../../components/Titulo/Titulo";
import BoxMeals from "../../components/BoxMeals/BoxMeals";
import { useState, useEffect } from "react";
import {useSelector } from "react-redux";



const MainSection = styled.main`
margin-top: 5rem;


`;



const BoxrecipeMeals = styled.div`
display: grid;
grid-template-columns:repeat(3, 1fr);
grid-gap: 40px;
max-width: 1200px;
margin: 0 auto;
margin-top: 2rem;



`;



const Meals =()=>{
const [ingredientanswer, setingredientanswer] = useState('')
const [respostaMeal, setrespostaMeal] = useState()

const [strIngredient, setstrIngredient] = useState('')
 const {currentName} = useSelector((rootReducer)=> rootReducer.NameRecipe)
      


 useEffect(() => {
  const fetchRecipes = async (strIngredient) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${strIngredient}`,
        {
          method: 'GET',
        }
      );
      const data = await response.json();
      setrespostaMeal(data.meals);
      console.log(data);
    } catch (error) {
      console.error('Erro ao buscar a lista', error);
    }
  };

  if (currentName && currentName !== strIngredient) {
    setingredientanswer(currentName);
    fetchRecipes(currentName);
  }
}, [currentName, strIngredient]);

    return(
    <>
  
  <MainSection>
    
    <Titulo>Receitas com {currentName}</Titulo>

<BoxrecipeMeals>
 {respostaMeal && respostaMeal.map && respostaMeal.map((respostaMeals) => (
  <BoxMeals
    key={respostaMeals.idMeal}
    ImgMeals={respostaMeals.strMealThumb}
    TituloMeals={respostaMeals.strMeal}
    SubtituloMeals={respostaMeals.strInstructions}
    Linkyoutube={respostaMeals.strYoutube}
  />
))}
</BoxrecipeMeals>

  </MainSection>
    </>
    )
}

export default Meals;