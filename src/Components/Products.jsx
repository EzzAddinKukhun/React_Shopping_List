import React from 'react'

import image1 from '../imgs/c1.jpg'
import image2 from '../imgs/c2.jpg'
import image3 from '../imgs/c3.jpg'
import image4 from '../imgs/c4.jpg'
import image5 from '../imgs/c5.jpg'
import image6 from '../imgs/c6.jpg'
import image7 from '../imgs/c7.jpg'
import image8 from '../imgs/c8.jpg'
import image9 from '../imgs/c9.jpg'
import image10 from '../imgs/c10.jpg'
import image11 from '../imgs/c11.jpg'
import image12 from '../imgs/c12.jpg'

export default function Products() {
    let clothesData = [
        { name: "Sport Jacket", price: 20, thumbnail: image1, new: 1 },
        { name: "Elegant Jacket", price: 40, thumbnail: image2, new: 1 },
        { name: "Red T-Shirt", price: 60, thumbnail: image3, new: 0 },
        { name: "Blue T-Shirt", price: 80, thumbnail: image4, new: 0 },
        { name: "Blue Shirt", price: 30, thumbnail: image5, new: 1 },
        { name: "Gray Shirt", price: 60, thumbnail: image6, new: 1 },
        { name: "Elegant Shirt", price: 90, thumbnail: image7, new: 1 },
        { name: "Gray Shirt-1", price: 40, thumbnail: image8, new: 0 },
        { name: "Red Shirt", price: 80, thumbnail: image9, new: 0 },
        { name: "Purple Shirt", price: 120, thumbnail: image10, new: 0 },
        { name: "Elegant Coat-1", price: 220, thumbnail: image11, new: 1 },
        { name: "Elegant Coat-2", price: 220, thumbnail: image12, new: 0 },
    ]
    return (

        <div className='products-container'>
            <h2 className='text-center'>Products</h2>

            <div className="products d-flex justify-content-between mb-5  flex-wrap">
                {
                    clothesData.map((element) => {
                        return (
                            <div className="item mb-5">
                                <div className="product-thumbnail position-relative">
                                    <img src={element.thumbnail}></img>
                                    <div className='overlay-item'></div>
                                    <button className='add-btn'><i class="fa-solid fa-plus"></i></button>
                                </div>
                                <div className='product-info d-flex justify-content-start align-items-center'>
                                    <div>
                                        <h6>{element.name}</h6>
                                        <h6>{element.price}$</h6>
                                    </div>
                                </div>
                                {element.new == 1?<div className='new-div'>New</div>:""}
                            </div>
                        );
                    })
                }




            </div>


        </div>
    )
}
