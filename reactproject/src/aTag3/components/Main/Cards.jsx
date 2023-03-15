import React from 'react'
import './Card.css'

const Cards = (props) => {  
  const posts = [
    { title: 'Title1', content: 'Lorem ipsum dolor sit amet.' },
    { title: 'Title2', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, laborum!' },
    { title: 'Title3', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, facilis deleniti reprehenderit consequatur ut a.' },
   ];

  return (
    <section class="post-box">
      {
        posts.map((post) => {
          return (
            <Card title={post.title} content={post.content} />
          )
        })
      }
    </section>
  )
}

function Card(props) {
  return (
    <div class="post-card">
      <h2>{props.title}</h2>
      <p class="post-card-txt">
        {props.content}
      </p>
    </div>
  )
}

export default Cards;
