import styled from "styled-components";
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import IdActionstypes from '../../Redux/IdMeals/action-types'





const ConteinerMeal = styled.div`
width: 25rem;
height: 25rem;
background-color: #fff;
border-radius: 10px;
transition: all 0.4s ease-in-out; 
cursor: pointer;
margin-top: 20px;



&:hover{
    transform: scale(1.03);
}

`;

const TituloMeal = styled.h3`
color: #000;
font-size: 18px;
background-color: #fff;
margin-top: 10px;
margin-left: 8px;
`;

const SubtituloMeal = styled.p`
color: #000;
font-size: 15px;
overflow: hidden;
width:360px;
-webkit-line-clamp: 2;
white-space: nowrap;
text-overflow: ellipsis;
background-color: #fff;
margin-top: 10px;
margin-left: 8px;
`;

const ImgMeal = styled.img`
width: 400px;
height: 100%;
object-fit: cover;
border-radius: 10px 10px 0 0;
`;

const BoxImg = styled.div`
width: 200px;
height: 240px;
`;

const ButtonYoutube = styled.button`
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

const Boxbuttonyoutube = styled.div`
margin-left: 12px;
background-color: #fff;
`;



const BoxMeals = ({ImgMeals,TituloMeals, SubtituloMeals, Linkyoutube, idMeal}) =>{
  const dispatch = useDispatch();

      const {currentID} = useSelector((rootReducer)=> rootReducer.Idmeals )
      

      const handledetailclick = ()=>{
        dispatch({
          type: IdActionstypes.Id,
          payload: {currentID: idMeal}

         
        })


      } 
   
  
  return(
        
    <>

<ConteinerMeal>
  
  <BoxImg>
    <Link to='/MealsDetails'>
  <ImgMeal src={ImgMeals} onClick={() => handledetailclick(idMeal)}/>
    </Link>
  </BoxImg>
    <TituloMeal>{TituloMeals}</TituloMeal>
    <SubtituloMeal>{SubtituloMeals}</SubtituloMeal>
    <Boxbuttonyoutube>
    <Link to={Linkyoutube}>
    <ButtonYoutube>Youtube</ButtonYoutube>
    </Link>
    </Boxbuttonyoutube>

</ConteinerMeal>

    </>)
}



export default BoxMeals;