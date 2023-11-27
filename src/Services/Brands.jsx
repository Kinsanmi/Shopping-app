import React from 'react';
import { brands } from '../Data/Data';
import './style/Brand.css';
import contact from '../Images/contact.gif';
import logo from '../Components/Common/eshop.png';
import { Link } from 'react-router-dom';

export const Brands = () => {
  return (
    <>
    <section>
        <div className="brands">
            {brands.map((brand)=>{
                return (
                    <div className='brand-img'>
                       <img src={brand.brand} alt="" /> 
                    </div>
                )
            })}
        </div>
    </section>

    <section>
        <div className="contact">
            <h1><span>contact</span> us</h1>

            <div className="contact-flex">
                <div className="contact-img">
                    <img src={contact} alt="" />
                </div>

                <form >
                    <h2>Get in touch</h2>
                    <div className="input-box">
                        <input type="text" className="name" placeholder='Name' required autoCapitalize='on' />
                    </div>
                    <div className="input-box">
                        <input type="text" className="email" placeholder='Email Address' required/>
                    </div>

                    <div className="input-box">
                        <input className='subject' type="text" placeholder='Subject' />
                    </div>

                    <textarea name="kevin" id="kevin" cols="30" rows="10"></textarea>
                    <button className='msg-button'>send message</button>
                    
                </form>
            </div>
        </div>
    </section>


    <footer>
    <div className='store-text'>
            <div className='store-img'>
                <img src={logo} alt="" />
                <p>3256 Grant Street LongView, <br />TX United kingdom 755471</p>
                <p>01601348732</p>
                <p>incredible@1916@gmail.com</p>
            </div>

            <div className="store-cont">
                <h3>support</h3>
                <Link>Contact us</Link>
                <Link>about pag</Link>
                <Link>size guide</Link>
                <Link>shipping & returns</Link>
                <Link>privacy</Link>
            </div>

            <div className="store-cont">
                <h3>shop</h3>
                <Link>men's shopping</Link>
                <Link>women's shopping</Link>
                <Link>kid's shopping</Link>
                <Link>furniture</Link>
                <Link>discounts</Link>
            </div>

            <div className="store-cont">
                <h3>company</h3>
                <Link>about</Link>
                <Link>blog</Link>
                <Link>affiliate</Link>
                <Link>login</Link>
            </div>

            {/* <div className="store-cont">
                <h3>subscribe</h3>
                <p>Receive updates, hot deals, discounts sent straight in your inbox daily</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti!</p>
                <p>Receive updates, hot deals, discounts sent straight in your inbox daily</p>
            </div> */}
        </div>
    </footer>
    </>
  )
}

