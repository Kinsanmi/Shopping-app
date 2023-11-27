import React from 'react';
import { product } from '../Data/Data';
import './style/Product.css';
import deliver1 from '../Images/deliver_1.png';
import deliver2 from '../Images/deliver_2.png';
import deliver3 from '../Images/deliver_3.png';

import { feature } from '../Data/Data';

export const Products = () => {
  return (
    <>
    <section>
        <div className='pro'>
        <h2>Our <span>products</span></h2></div>
        <div className="product">
            {product.map((products, index)=>{
                return (
                    <div key={index} className='product-img'>
                        <img src={products.img} alt="" />
                        <div className='product-text'>
                            <h3>{products.text}</h3>
                            <p>{products.price}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>


    {/* icons page */}
    <section>
        <div className="icons">
            <div className="icon-img">
                <div className="img">
                    <img src={deliver1} alt="" />
                    <img src={deliver2} alt="" />
                    <img src={deliver3} alt="" />
                </div>
            </div>

            <div className="feel-text">
                <h3>Feel free to ask</h3>
                <h3 className='text'>+23 916 7677 512</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta nisi blanditiis omnis ex.</p>
            </div>
        </div>
    </section>



    <section>
        <div className='pro'>
        <h2>Featured <span>products</span></h2></div>
        <div className="product">
            {feature.map((products, index)=>{
                return (
                    <div key={index} className='product-img'>
                        <img src={products.content} alt="" />
                        <h3>{products.text}</h3>
                        <div className='feature-text'>
                            <p className='price'>{products.price}</p>
                            <p className='slice'>{products.slice}</p>
                            <p className='discount'>{products.discount}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
    </>
  )
}

