import React from 'react'
import './Card.css'

const Cards = (props) => {  
  const posts = [
    { title: 'Title1', content: 'Lorem ipsum dolor sit amet.' },
    { title: 'Title2', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, laborum!' },
    { title: 'Title3', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, facilis deleniti reprehenderit consequatur ut a.' },
   ];

  return (
    <section className="post-box">
      {
        posts.map((post, i) => {
          return (
            <Card title={post.title} content={post.content} key={i} />
          )
        })
      }
    </section>
  )
}

function Card(props) {
  return (
    <div className="post-card">
      <h2>{props.title}</h2>
      <p className="post-card-txt">
        {props.content}
      </p>
    </div>
  )
}

export default Cards;
