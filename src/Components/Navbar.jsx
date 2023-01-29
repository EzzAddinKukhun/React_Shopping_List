import React, { useContext, useEffect, useState } from 'react'
import { CounterContext } from './CounterContext';

export default function Navbar() {
  let [data, setData] = useState([]);
  let [cartElements, setCartElements] = useState([]); 
  let { count } = useContext(CounterContext);

  useEffect(() => {
    let localStorageString = localStorage.getItem('cart');
    let localStorageParsed = JSON.parse(localStorageString);
    setData(localStorageParsed)

  }, [])

  
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
            <div onClick={() => {

              let localStorageString = localStorage.getItem('cart');
              let localStorageParsed = JSON.parse(localStorageString);
              setData(localStorageParsed)

            }} data-bs-toggle="modal" data-bs-target="#exampleModal">
              <i class="fa-solid fa-cart-shopping"></i>
              <div className='cart-counter'>{count}</div>
            </div>
            <div>
              <i class="fa-solid fa-gear"></i>
            </div>
          </div>



        </div>
      </div>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">count</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    // data.map((entry) => {
                    //   return (
                    //     <>
                    //       <tr>
                    //         <td><img width={100} height={100} src={entry.thumbnail}></img></td>
                    //         <td>{entry.name}</td>
                    //         <td>{entry.price}</td>
                    //         <td><input defaultValue={2} type="number"></input></td>
                    //       </tr>
                    //     </>
                    //   );

                    // })
                  }
                  <tr>

                  </tr>

                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
