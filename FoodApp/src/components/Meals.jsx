import React, { useEffect, useState } from 'react'
import MealItem from './MealItem'
import useHttp from '../hooks/useHttp'
import Error from '../UI/Error';
//since react recreates it on every render and ends up in a loop in useHttp hook since config is 
//added as a dependency there
const requestConfig={};
const Meals = () => {
  //this code can be replaced with React custom hook 
  /*  const [loadedMeals,setLoadedMeals]=useState([])
   useEffect(()=>
   {
    const fetchMeals=async()=>
    {
       const response= await fetch("http://localhost:3000/meals");
       if(!response.ok)
       {

       }
       const meals=await response.json();
setLoadedMeals(meals);
    }
    fetchMeals()
   },[])*/
   

   const {data:loadedMeals,isLoading,error}=useHttp("http://localhost:3000/meals",requestConfig,[]);
   if(isLoading)
   {
    return <p className='center'>Fetching Meals...</p>
   }

   if(error)
   {
   return  <center><Error title="Failed to fetch meals" message={error}/></center>
   }
  return (
   <ul id="meals">
{loadedMeals.map(meal=>
    <MealItem key={meal.id} meal={meal}/>

    )}
   </ul>
  )
}

export default Meals
