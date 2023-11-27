import React from 'react';
import { Data } from '../Data/Data';
import './style/Content.css';

export const Content = () => {
  return (
    <>
    <section>
        <div className="images">
            {Data.map((item, index)=>{
                return (
                    <div key={index} className='image-type'>
                        <img src={item.image} alt="vintage" />
                        <div className='image-style'>
                            <h3>{item.title}</h3>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
    </>
  )
}

