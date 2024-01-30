import React from 'react';
import './GalacticStars.css'; // Importa los estilos específicos para las estrellas

const GalacticStars = () => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 250; i++) {
      stars.push(
        <div
          key={i}
          className={`stars ${getRandomStarClass()}`}
          style={{
            ...generateRandomStyles(),
            animationDuration: `${Math.random() * 10 + 7}s`, // Duración entre 1 y 3 segundos
            animationDelay: `-${Math.random() * 10}s`, // Retraso entre 0 y -2 segundos
          }}
        />
      );
    }
    return stars;
  };

  const getRandomStarClass = () => {
    const starClasses = ['star-circle', 'star-square', 'star-triangle'];
    const randomIndex = Math.floor(Math.random() * starClasses.length);
    return starClasses[randomIndex];
  };

  const generateRandomStyles = () => {
    const randomTop = Math.random() * 100;
    const randomLeft = Math.random() * 1;

    return {
      top: `${randomTop}vh`,
      left: `${randomLeft}vw`,
    };
  };

  return (
    <div className="stars-container">
      {renderStars()}
    </div>
  );
};

export {GalacticStars}