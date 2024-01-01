import styled from 'styled-components';
import { Titulo } from '../../components/Titulo/Titulo';
import BoxMeals from '../../components/BoxMeals/BoxMeals';
import { useState, useEffect } from 'react'; 


const Letterdetail = styled.p`
 align-items: center;
 font-size: 15px;
 justify-content: flex-start;
 padding: 5px;
 align-items: center;
 color: #000;
 transition: all 0.3s ease-in-out; 
 margin: auto;
 cursor: pointer;

&:hover{
    transform: scale(1.3);
    font-weight: 500;
    color: #f97316;
    cursor: pointer;
}

`;


const BoxLetter = styled.div`
 display: flex;
 flex-direction: row;
 position: relative;
 left: 18rem;
 margin-top: 10px;



 
`;

const Boxmain = styled.div`
position: absolute;
top: 7rem;
left: 18rem;


`;

const P = styled.p`
color:rgb(75 85 99 / 1);
font-size: larger;
position: fixed;
top: 15rem;
`;

const Conteinertitulo = styled.div``;


const Boxrecipesletter = styled.div`
display: grid;
grid-template-columns:repeat(3, 1fr);
grid-gap: 40px;
max-width: 1200px;
margin: 0 auto;
padding-top: 13rem;

`;


const BoxMealscenter = styled.div`
 display: flex;
 width: 1500px;
 justify-content: center;
 align-items: center;

`;


const Letter =()=>{

const [recipes, setRecipes] = useState()

const [FirstLetter, setFirstLetter] = useState('')

const handleMealshow =(letter)=>{
    setFirstLetter(letter);
    fetchLetter();
}

const fetchLetter = async ()=>{
    try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${FirstLetter}`,{
            method: 'GET',

        });
        const data = await response.json();
        setRecipes(data.meals);
    } catch (error) {
            console.error('Erro ao buscar a lista', error);
          }
  }
  useEffect(() => {
    fetchLetter();
  }, []); 

return(
<>


<Boxmain>
<Conteinertitulo>
<Titulo>Receitas por Letra</Titulo>
</Conteinertitulo>
<BoxLetter>
<Letterdetail onClick={()=>handleMealshow('a')}>A</Letterdetail>
<Letterdetail onClick={()=>handleMealshow('b')}>B</Letterdetail>
<Letterdetail onClick={()=>handleMealshow('c')}>C</Letterdetail>
<Letterdetail onClick={()=>handleMealshow('d')}>D</Letterdetail>
<Letterdetail onClick={()=>handleMealshow('e')}>E</Letterdetail>
<Letterdetail onClick={()=>handleMealshow('f')}>F</Letterdetail>
<Letterdetail onClick={()=>handleMealshow('g')}>G</Letterdetail>
<Letterdetail onClick={()=>handleMealshow('h')}>H</Letterdetail>
<Letterdetail onClick={()=>handleMealshow('i')}>I</Letterdetail>
<Letterdetail onClick={()=>handleMealshow('j')}>J</Letterdetail>
<Letterdetail onClick={()=>handleMealshow('k')}>K</Letterdetail>
<Letterdetail onClick={()=>handleMealshow('l')}>L</Letterdetail>
<Letterdetail onClick={()=>handleMealshow('m')}>M</Letterdetail>
<Letterdetail onClick={()=>handleMealshow('n')}>N</Letterdetail>
<Letterdetail onClick={()=>handleMealshow('o')}>O</Letterdetail>
<Letterdetail onClick={()=>handleMealshow('p')}>P</Letterdetail>
<Letterdetail onClick={()=>handleMealshow('q')}>Q</Letterdetail>
<Letterdetail onClick={()=>handleMealshow('r')}>R</Letterdetail>
<Letterdetail onClick={()=>handleMealshow('s')}>S</Letterdetail>
<Letterdetail onClick={()=>handleMealshow('t')}>T</Letterdetail>
<Letterdetail onClick={()=>handleMealshow('u')}>U</Letterdetail>
<Letterdetail onClick={()=>handleMealshow('v')}>V</Letterdetail>
<Letterdetail onClick={()=>handleMealshow('w')}>W</Letterdetail>
<Letterdetail onClick={()=>handleMealshow('x')}>X</Letterdetail>
<Letterdetail onClick={()=>handleMealshow('y')}>Y</Letterdetail>
<Letterdetail onClick={()=>handleMealshow('z')}>Z</Letterdetail>
</BoxLetter>
</Boxmain>
<BoxMealscenter>
<Boxrecipesletter>
{recipes ? (
    recipes.length > 0 ? (
      recipes.map((recipe) => (
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
      <P>Receitas não encontradas</P>
    )
  ) : (
    <P>Receitas não encontradas</P>
  )}
</Boxrecipesletter>
</BoxMealscenter>
</>
)
}


export default Letter;