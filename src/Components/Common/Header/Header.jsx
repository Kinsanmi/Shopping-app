import { Link } from "react-router-dom";
import './Header.css';
import 'boxicons'
import logo from '../eshop.png'
import { Home } from "../../../Pages/Home";


export const Header = () => {
  return (
    <>
    <header>
        <div className="container">
            <Link className="logo"><img src={logo} alt="" /></Link>

            <ul className="navbar">
                <li><Link>Home</Link></li>
                <li><Link>products</Link></li>
                <li><Link>feature</Link></li>
                <li><Link>blog</Link></li>
                <li><Link>contact</Link></li>
            </ul>

            <div className="icons">
                <div className="alt">
                    <i class='bx bx-search-alt-2'></i>
                    <i class='bx bx-cart' ></i>
                    <i class='bx bx-heart' ></i>
                </div>
            </div>
        </div>
    </header>

    <section>
        <div className="context">
            <div className="context-text">
                <div className="vary">
                    <h1>Shopping as <br /><span> you love</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab expedita vero, maiores recusandae eveniet quasi veritatis ea enim dolor beatae rem nemo, quia illo voluptatum placeat dolores deleniti delectus esse.</p>
                    <Link>See whats on sale</Link>
                </div>
            </div>
        </div>
    </section>

    <Home />
    </>
  )
}

