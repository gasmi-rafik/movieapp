import React  , {useState , rating } from 'react';

import './App.css';
import Moviecard from './profile/Moviecard';
import Recherche from './profile/recherche';
import Rate from './profile/Rate';



function App() {
  const [inputvalue , setInputValue] = useState("") ;
 
  const[ movie , setMovie] = useState([
    {name : "Dracula Untold" ,
    image :"https://images-na.ssl-images-amazon.com/images/I/91T22rbZEKL._AC_SL1500_.jpg" ,
    id: 0 ,
    rating: 3} ,
    {name : "hangover" ,
    image : "https://fr.web.img4.acsta.net/medias/nmedia/18/70/03/08/19109117.jpg" ,
    id: 1,
    rating: 4 } ,
    {name : "venom" ,
    image : "https://fr.web.img3.acsta.net/pictures/18/09/20/10/41/4338768.jpg" ,
    id: 2,
    rating: 5 }
  ]) ;



  //add movie
const addMovie = (e, newMovie) => {
  e.preventDefault();
  return setMovie([...movie ,newMovie]) ;
};





  return (
    <div className="App">
      <header className="App-header">
      
        
        {
          
          <Recherche setInputValue={setInputValue}/>
          
        }
        

        
        {(movie.filter(
        el => el.name.includes(inputvalue.toLowerCase().trim())
        ).map((film , index) => {
          return (
            
            <div >
              
              <form  >
             
            <ul>
                <li key={index} className="Listmovies">
                <img src={film.image}  style={{ width: "250px", height: " 350px" }} />
                <br/>
                 {film.name}
                 
                 <Rate rating={film.rating} /> 
                </li>
            </ul>
          
            </form>

            </div>
          );
        }))}
         <Moviecard addMovie={addMovie}
         />
      
      
      </header>
    </div>
  );
}

export default App;
