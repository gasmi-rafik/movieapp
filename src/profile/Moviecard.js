import React , { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Rate from './Rate';


 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 

Modal.setAppElement('#root')
 
function Moviecard({addMovie}){

  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [rating, setRating] = useState('');
 


  function openModal() {
    setIsOpen(true);
  }
 
  
 
  function closeModal(){
    setIsOpen(false);
    setName('');
    setImage('');
    setRating('');
    
  }
 
const handleSubmit = (e) => {
  let newMovie = {
    name: name,
    image: image,
    id: Math.random(),
    rating: rating
  };
  addMovie(e, newMovie);
  setIsOpen(false);
  setName('');
  setImage('');
  setRating('');
  
  
};

    return (
      <div className="Add-btn-container">
      <button className="Add-btn" onClick={openModal}>
        +
      </button>
      <Modal
        className="add-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h1 className="addMovie-h1">Add A Movie</h1>
        <form>
          <label>Movie Name</label>
          <input
            value={name}
            type="text"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          
          <label>Movie Rate</label>
          
         <Rate rating={rating} starIndex={setRating} />

          
          <label>Movie Image</label>
          <input
            value={image}
            type="url"
            name="image"
            required
            onChange={(e) => setImage(e.target.value)}
          />
          
        </form>
        <button className="Modal-btn" onClick={handleSubmit}>
          Submit
        </button>
        <button className="Modal-btn" onClick={closeModal}>
          close
        </button>
        
      </Modal>
    </div>
  );
};


export default Moviecard;