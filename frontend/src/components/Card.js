import React from 'react';
import '../assets/Card.css';

function Card({ title, description, imageUrl, buttonText, projectLink }) {
    const handleClick = () =>{
        window.open(projectLink, '_blank');//Abre o link de projeto em uma nova guia
    }
    
    return (
        <div className="card">
           
            <img src={imageUrl} alt={title} className="card-img" />
            <div className="card-content">
                <h3 className="card-title" >{title}</h3>
                <p className="card-description">{description} </p>
                <button className="card-button"  onClick={handleClick}>{buttonText} </button>
            </div>
        </div>
        
    )
}

export default Card;