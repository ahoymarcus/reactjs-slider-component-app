// https://www.youtube.com/watch?v=ly3m6mv5qvg
// 2 hr 50' 00 ''
import React, { useState, useEffect } from 'react';

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';



function App() {
  const [ people, setPeople ] = useState(data);
  const [ index, setIndex ] = useState(0);


  useEffect(() => {
    const lastIndex = people.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  /* 
    ATENÇÃO: aqui é necessário usar uma Callback em useEffect() para remover um interval já passado, porque useEffect continua sempre monitorando outras mudanças em index... 
  */
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 4000);

    return () => clearInterval(slider);
  }, [index]);



  return (
    <section className="section">
      <div className="title">
          <h2>
            <span>/</span>Reviews
          </h2>
        </div>
        <div className="section-center">
          {
            people.map((person, personIndex) => {
              const { id, image, name, title, quote } = person;
              
              // Nesta parte do script controlamos a distribuição
              // de classes CSS para posicionar as imagens do Slider
              let position = 'nextSlide';
              
              if (personIndex === index) {
                position = 'activeSlide';
              }
              if (
                personIndex === index - 1 ||
                (index === 0 && personIndex === people.length - 1)
              ) {
                position = 'lastSlide';
              }

              return (
                <article key={id} className={position} >
                  <img src={image} alt={name} className="person-img" />
                  <h4>{name}</h4>
                  <p className="title">{title}</p>
                  <p className="text">{quote}</p> 
                  <FaQuoteRight className="icon" />
                </article>
              );
            })
          }

          <button className="prev" onClick={() => setIndex(index - 1)} >
            <FiChevronLeft />
          </button>
          <button className="next" onClick={() => setIndex(index + 1)} >
            <FiChevronRight />
          </button>
        </div>
    </section>
  );
}



export default App;


