import styled from "styled-components";
import Header from "../../components/Header/Header";
import { Titulo } from "../../components/Titulo/Titulo";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";


const MainSection = styled.main`
margin-top: 5rem;
max-width: 1200px;

`;

const ButtonYoutube2 = styled.button`
background-color: #f97316;
outline: 2px solid #ea580c;
transition: background-color 0.3s, background-color 0.3s;
color: #fff;
border: none;
margin-top: 20px;



&:hover {
    background-color:  #ea580c;
    outline: none;
    color: #fff;
    border: none;
  }

  &:focus{
    outline: none;
  }
`;

const ImgRecipe = styled.img`
 width: 45rem;
 height: 40rem;
 margin-top: 10px;
`;

const H3 = styled.h3`
color: #000;

`;

const H3two = styled.h3`
color: #000;
font-size: 20px;

`;

const Conteinerh3 = styled.div`
display: flex;
margin: 10px 0 10px 0;
gap: 10px; 

`;

const PStrong = styled.p`
color: #000;
font-size: 20px;

`;

const PLight = styled.p`
color: #000;
max-width: 740px;
`;
const PLight2 = styled.p`
color: #000;
max-width: 740px;
margin-left: 10px;
`;

const Fontoriginal = styled.a`
cursor: pointer;
color: rgb(79 70 229 / 1);
font-weight: 400;
margin-left: 80px;
margin-top: 13px;

`;

const P = styled.p`
color: #000;
font-size: 25px;
`;

const ConteinerIngredientes = styled.div``;

const ConteinerMedidas = styled.div``;

const Conteinerinstrucao = styled.div`
display: grid;
grid-template-columns:repeat(2, 1fr);
margin: 12px 0 12px 0;

`;

const BoxMealdeta2 = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 1500px;
margin: auto;

`;

const BoxMealdeta = styled.div`
`;

const BoxLinks = styled.div`
width: 500px;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 20px;
`;
const Mealdetail =()=>{
   
    const [respostaMeal, setrespostaMeal] = useState({})

    const [titulorecebido, settitulorecebido ] = useState('')
    
    const [Idrecipes, setIdRecipes] = useState('')
    const [Link, setLink ] = useState('')
    const {currentID} = useSelector((rootReducer)=> rootReducer.Idmeals )
     
      
      useEffect(() => {
        const fetchRecipes = async (id) => {
          try {
            const response = await fetch(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
              {
                method: "GET", 
              }
            );
            const data = await response.json();
            setrespostaMeal(data.meals[0]);
          } catch (error) {
            console.error("Erro ao buscar a lista", error);
          }
        };
    
        if (currentID && currentID !== Idrecipes) {
          setIdRecipes(currentID);
          fetchRecipes(currentID);
        }
      }, [currentID, Idrecipes]);
     
    
      if (!respostaMeal || respostaMeal.length === 0) {
        return <P>Carregando...</P>; 
      }

    const HandleFonte =()=>{
      if (respostaMeal && respostaMeal.length > 0) {
        const Linkfonte = respostaMeal.strSource;
        history.push(Linkfonte);
    }
  }


const handleYoutube = () =>{
  if (respostaMeal && respostaMeal.length > 0) {
    const youtubeLink = respostaMeal.strYoutube;
    history.push(youtubeLink);
  }
}


    return(
    <>
    <Header/>
    <MainSection>
      <BoxMealdeta2>
      <BoxMealdeta>
      <Titulo>{respostaMeal.strMeal}</Titulo>

      <ImgRecipe src={respostaMeal.strMealThumb} alt="photo Meal"/>
       <Conteinerh3>
     
      <H3>Categoria:</H3>
      <PStrong>{respostaMeal.strCategory}</PStrong>
    
      <H3>Area:</H3>
      <PStrong>{respostaMeal.strArea}</PStrong>

      <H3>Tags:</H3>
      <PStrong>{respostaMeal.strTags}</PStrong>
 </Conteinerh3>

      <PLight>{respostaMeal.strInstructions}</PLight>
<Conteinerinstrucao>
 <ConteinerIngredientes>
      <H3two>Ingredientes:</H3two> 

      {Object.keys(respostaMeal)
      .filter((key) => key.startsWith('strIngredient') && respostaMeal[key])
      .map((key, index) => (
      <PLight2 key={key}>{index + 1}.{respostaMeal[key]}</PLight2>
      ))}
      
 </ConteinerIngredientes>

<ConteinerMedidas>
      <H3two>Medidas:</H3two>

      {Object.keys(respostaMeal)
       .filter((key) => key.startsWith('strMeasure') && respostaMeal[key])
       .map((key, index) => (
        <PLight2 key={key}>{index + 1}.{respostaMeal[key]}</PLight2>
      ))}
     </ConteinerMedidas>
     
</Conteinerinstrucao>
<BoxLinks>
<ButtonYoutube2 onClick={handleYoutube}>Youtube</ButtonYoutube2>


<Fontoriginal onClick={HandleFonte}>Fonte Original</Fontoriginal>
</BoxLinks>

</BoxMealdeta>
</BoxMealdeta2>
    </MainSection>
    </>
    )
}


export default Mealdetail;