import React from 'react'
import './Card.css'

const Cards = (props) => {  
  // const posts = [
  //   { title: 'Post 1', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  //   { title: 'Post 2', content: 'Animi sint aperiam tempora ratione sunt beatae alias nulla.' },
  //   { title: 'Post 3', content: 'Unde expedita suscipit quisquam natus dolores aliquam.' },
  //  ];

  return (
    <section class="post-box">
      <Card/>
      <Card/>
      <Card/>
    </section>
  )
}

function Card() {
  return (
    <div class="post-card">
      <h2>Lorem ipsum dolor sit.</h2>
      <p class="post-card-txt">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi sint aperiam tempora ratione sunt beatae alias nulla<br/>
        unde expedita suscipit quisquam natus dolores aliquam, placeat ea iusto, nesciunt, incidunt minima.
      </p>
    </div>
  )
}

export default Cards;
