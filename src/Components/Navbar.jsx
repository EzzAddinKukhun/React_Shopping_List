import React, { useContext, useEffect, useState } from 'react'
import { CounterContext } from './CounterContext';

export default function Navbar() {
  let [data, setData] = useState([]);
  let [cartElements, setCartElements] = useState([]);
  let { count } = useContext(CounterContext);
  let [totalPrice, setTotalPrice] = useState(0);





  function calculateTotalPrice(data) {

    let price = 0;
    for (let i = 0; i < data.length; i++) {
      price += data[i].counter * data[i].price;
    }
    setTotalPrice(price);
  }


  function addToBill(addition) {
    totalPrice = totalPrice + addition
    setTotalPrice(totalPrice)
  }

  function subFromBill(addition) {
    totalPrice = totalPrice - addition
    setTotalPrice(totalPrice)
  }



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
              calculateTotalPrice(localStorageParsed);

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
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map((entry, key) => {
                      return (
                        <>
                          <tr>
                            <td><img width={100} height={100} src={entry.thumbnail}></img></td>
                            <td>{entry.name}</td>
                            <td>{entry.price}</td>
                            <td><input min={1} max={9} onChange={(e) => {
                              console.log(e)

                              if (entry.counter > e.target.value) {
                              
                                entry.counter = e.target.value;
                                subFromBill(entry.price); 

                              }
                              else if (entry.counter < e.target.value){
                              
                                entry.counter = e.target.value;
                                addToBill(entry.price)
    
                              }

                            }} defaultValue={entry.counter} type="number"></input></td>
                            <td><button
                            onClick={()=>{
                              let newData = data.filter(element=>
                                element.name !== entry.name
                              )
                              setData(
                              newData
                              )
                              calculateTotalPrice(newData)
                            
                            }}
                            type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
                          </tr>
                        </>
                      );

                    })
                  }
                  <tr>

                  </tr>

                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <div className='me-auto'>
                <h3>Price: {totalPrice}$</h3>
              </div>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
