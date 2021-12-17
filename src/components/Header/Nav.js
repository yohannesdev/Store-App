import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CartState } from "../../context/Cartprovider";
import { AuthState } from "../../context/AuthProvider";
import { auth } from "../auth/firebase";
import { productsByCategory } from "../../utils/products";

const Navwrapper = styled.div`
  background-color: black;
  display: flex;
  color: white;
  justify-content: space-between;
  padding: 20px 0 0;
  text-decoration: none;
  position: sticky;
  top: 0;
`;
const CartWrapper = styled.div`
  display: flex;
  width: 100px;
  font-size: 30px;
  padding: 10px;
  color: white;
`;
const Sign = styled.div`
  color: white;
  font-size: 20px;
  margin-right: 30px;
`;
const Signwrapper = styled.div`
  display: flex;
`;
const H2 = styled.h2`
  text-decoration: none;
  color: #ff9999;
`;
function Nav() {
  const [{ user }, dispatch] = AuthState();
  const [{ cart }] = CartState();
  const Totalprice = (cart) => {
    return cart?.reduce((amount, item) => item.quantity + amount, 0);
  };
  const cartamount = Totalprice(cart);
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <Navwrapper>
      <Link to="/" style={{ textDecoration: "none" }}>
        <H2>The store</H2>
      </Link>

      <Signwrapper>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <CartWrapper>
            <ShoppingCartIcon
              style={{ fontSize: 40, textDecoration: "none" }}
            />
            <p style={{ textDecoration: "none" }}>{cartamount}</p>
          </CartWrapper>
        </Link>
      </Signwrapper>
    </Navwrapper>
  );
}

export default Nav;
