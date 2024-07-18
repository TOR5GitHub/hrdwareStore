import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import cart from '../assets/cart.svg';
import person from '../assets/person.svg';
import CartContext from '../store/cart-context';
import Cart from './Cart/Cart';
import LoginSignupForm from './LoginSignupForm';

const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto;
  & button {
    display: flex;
    align-items: center;
    column-gap: 0.4rem;
    padding: 1rem 3rem;
  }
  & img {
    width: 2rem;
  }
`;

const NavH = styled.h1`
  font-size: 2rem;
  font-family: 'PT Sans Narrow', sans-serif;
  display: flex;
  align-items: baseline;

  & a {
    color: var(--dark-grey);
  }
`;

const Square = styled.div`
  background-color: var(--orange);
  width: 0.4rem;
  height: 0.4rem;
  margin-left: 0.2rem;
`;

const Navegation = () => {
  const ctx = useContext(CartContext);
  const [showLoginSignup, setShowLoginSignup] = useState(false); // State to toggle login/signup form

  const toggleHandler = () => ctx.cartDispatch({ type: 'TOGGLE_CART' });
  const toggleLoginSignup = () => setShowLoginSignup(!showLoginSignup); // Function to toggle login/signup form

  return (
    <NavDiv>
      {ctx.cartState.showModal && <Cart />}
      {showLoginSignup && <LoginSignupForm onClose={toggleLoginSignup} />} 

      <NavH>
        <Link to={'/'}>Hardware Store</Link>
        <Square />
      </NavH>
      <div>
        <button onClick={toggleHandler}>
          Your Cart
          <img src={cart} alt="shopping cart icon" />
        </button>
      </div>
      
      <div>
        <button onClick={toggleLoginSignup}> 
            SingUp/Login
          <img src={person} alt="profile icon" />
        </button>
      </div>
    </NavDiv>
  );
};

export default Navegation;