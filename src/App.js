// https://www.youtube.com/watch?v=ly3m6mv5qvg
// 2 hr 17' 00 ''
import React, { useState, useEffect } from 'react';

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';



function App() {
  const [ people, setPeople ] = useState(data);
  const [ index, setIndex ] = useState(0);



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
              // more functionality
              // coming up here 

              return (
                <article key={id} >
                  <img src={image} alt={name} className="person-img" />
                </article>
              );
            })
          }
        </div>
    </section>
  );
}



export default App;


