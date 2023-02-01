import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <section className="flex justify-between px-10 py-6">
      <div>
        <h3>PreciousStore</h3>
      </div>
      <ul className="flex space-x-5">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">women's</NavLink>
        </li>
        <li>
          <NavLink to="/">Men's</NavLink>
        </li>
        <li>
          <NavLink to="/">shop</NavLink>
        </li>
        <li>
          <NavLink to="/">pages</NavLink>
        </li>
        <li>
          <NavLink to="/">blog</NavLink>
        </li>
        <li>
          <NavLink to="/">contact</NavLink>
        </li>
      </ul>
      <div className="flex space-x-4">
        <div>
          <Link to="/">Login/Register</Link>
        </div>
        <div className="flex space-x-5">
          <AiOutlineSearch />
          <AiOutlineHeart />
          <AiOutlineShoppingCart />
        </div>
      </div>
    </section>
  );
};

export default Header;
