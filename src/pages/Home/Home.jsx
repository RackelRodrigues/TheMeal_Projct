import styled from "styled-components";
import {Titulo} from '../../components/Titulo/Titulo'
import BoxMeals from '../../components/BoxMeals/BoxMeals'
import { useState, useEffect } from "react";



const MainSection = styled.main`
margin-top: 5rem;
width: 100%;
display: grid;
place-items: center; 


`;

const TituloBox = styled.div`

`;

const DivHome = styled.div``;


const CenterHome = styled.div`
width: 1500px;
display: flex;
justify-content: center;
align-items: center;
`;

const Boxhome = styled.div`
display: grid;
grid-template-columns:repeat(3, 1fr);
grid-gap: 40px;
max-width: 1200px;
margin: auto;
margin-top: 35px;

`;


const P = styled.p`
color:rgb(75 85 99 / 1);
font-size: larger;

`;



const Home = () => {
   

const [ramdommeals, setradommeals] = useState()

    const fetchandomselection = async ()=>{
        try{
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken' ,{
              method: 'GET',
  
          });

            const data = await response.json();
            setradommeals(data.meals);

           }catch (error) {
              console.error('Erro ao buscar a lista', error);
              }
      }


      useEffect(() => {
        fetchandomselection();
      }, []); 
    
    return (
      <>
   
  
     <MainSection>
      <CenterHome>
      <DivHome>
<TituloBox>
  <Titulo>Receitas Aleatórias</Titulo>
</TituloBox>

  <Boxhome>
   
  {ramdommeals && ramdommeals.length > 0 ? (
  ramdommeals.slice(0, 10).map((ramdommeal) => (
    <BoxMeals
      key={ramdommeal.idMeal}
      ImgMeals={ramdommeal.strMealThumb}
      TituloMeals={ramdommeal.strMeal}
      SubtituloMeals={ramdommeal.strInstructions}
      Linkyoutube={ramdommeal.strYoutube}
      idMeal={ramdommeal.idMeal}
    />
  ))
) : (
  <P>Receitas não encontradas</P>
)}
    </Boxhome>

  </DivHome>
  </CenterHome>
     </MainSection>
     
      </>
    )
  }
  
  export default Home;
  