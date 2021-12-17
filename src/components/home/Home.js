import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

const Div = styled.div`
  margin: 0 200px 0 0;
`;
const IMG = styled.img`
  margin-top: 50px;
  width: 500px;
`;
const Shop = styled.div`
  padding: 50px 20px 250px 200px;
  display: flex;
  text-decoration: none;
  color: black;
`;

const ShopNow = styled.div`
  font-size: 60px;
  font-weight: 400;
  padding: 150px 0 0 0;
  color: red;
  // &:hover {
  //   color: brown;
  //   text-decoration: underline;
  // }
`;

function Home() {
  return (
    <Shop>
      <Div>
        <Link to="/products" style={{ textDecoration: "none", color: "black" }}>
          <ShopNow>Shop Now</ShopNow>
        </Link>
        <p>
          Wishing you and your family peace, health, happiness, and prosperity
          in the coming year. <br /> Merry Christmas and
          <span style={{ color: "red" }}> Happy Shopping</span>
        </p>
      </Div>
      <IMG src="https://smart-retailer.com/wp-content/uploads/Holiday-Couple.jpg"></IMG>
    </Shop>
  );
}

export default Home;
