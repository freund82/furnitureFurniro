import "./header.css"
import Logo from "../../assets/images/Logo.png"
import { Link } from "react-router-dom"
import AccountAlert from "../../assets/icons/mdi_account-alert-outline.svg"
import Search from "../../assets/icons/akar-icons_search.svg"
import Likes from "../../assets/icons/akar-icons_heart.svg"
import Cart from "../../assets/icons/ant-design_shopping-cart-outlined.svg"

export default function Header() {
  return (
    <header className="header">
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <nav className="nav">
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link href="/contact">Contact</Link>
        </div>
        <div className="nav-icons">
            <Link to="/accountAlert"><img src={AccountAlert} alt="account alert" /></Link>
            <Link to="/search"><img src={Search} alt="search" /></Link>
            <Link to="/likes"><img src={Likes} alt="likes" /></Link>
            <Link to="/likes"><img src={Cart} alt="cart" /></Link>
        </div>
      </nav>
    </header>
  )
}