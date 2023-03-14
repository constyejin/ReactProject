import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="global-footer">
        <h3>Contact</h3>
        <ul className="footer-list">
          <li className="footer-item">
            <a href="mailto:ingekjin@gamil.com">메일</a>
          </li>
          <li className="footer-item">
            <a href="tel:01012345678">전화</a>
          </li>
          <li className="footer-item">
            <a href="http://www.youtube.com">유튜브</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
