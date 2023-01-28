import React from 'react'

export default function Navbar() {
  return (
    <>
      <div className="not-boostrap-container">
        <div className='navbar-element'>
          <div className="logo-container">
            <h2 className='logo'>elegant</h2>
          </div>

          <nav className="navigators">
            <ul>
              <li>
                <a href='#'>home</a>
                <span className='span-style'></span>
              </li>
              <li>
                <a href='#'>pages</a>
                <span className='span-style'></span>

              </li>
              <li>
                <a href='#'>shop</a>
                <span className='span-style'></span>

              </li>
              <li>
                <a href='#'>features</a>
                <span className='span-style'></span>
              </li>
              <li>
                <a href='#'>blog</a>
                <span className='span-style'></span>
              </li>
              <li>
                <a href='#'>contactus</a>
                <span className='span-style'></span>
              </li>
            </ul>
          </nav>

          <div className='choices d-flex'>
            <div>
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div>
              <i class="fa-solid fa-cart-shopping"></i>
              <div className='cart-counter'>3</div>
            </div>
            <div>
              <i class="fa-solid fa-gear"></i>
            </div>
          </div>



        </div>
      </div>

    </>
  )
}
