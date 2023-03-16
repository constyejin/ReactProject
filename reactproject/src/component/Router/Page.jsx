import React from 'react'
import {Link} from 'react-router-dom'

const Page = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <Link to='/about'>About으로 이동</Link>
    </div>
  )
}

export default Page
