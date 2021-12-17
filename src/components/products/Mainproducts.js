import React, { useEffect, useState } from "react";
import { getallproducts, productsByCategory } from "../../utils/products";
import Productlist from "./Productlist";
import { Container, Row, Col } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
const Mainproducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  const [searchcategory, setsearchcategory] = useState("");
  useEffect(() => {
    // left getallproducts() here to try to use it again
    fetch("/product.json")
      .then((res) => res.json())
      .then((product) => {
        setProducts(product.products);
        setloading(false);
        seterror(false);
      })
      .catch((err) => {
        setloading(false);
        seterror(false);
        seterror(true);
      });
  }, []);
  // console.log(products)
  const searchBycategory = (category) => {
    setProducts([]);
    setloading(true);
    seterror(false);
    productsByCategory(category)
      .then((res) => {
        setProducts(res);
        setloading(false);
        seterror(false);
      })
      .catch((err) => {
        setloading(false);
        seterror(true);
      });
  };

  return (
    <div>
      <div
        style={{
          margin: "10px 10px",
          position: "fixed",
          top: "20px",
          right: "300px",
        }}
      >
        <input
          onChange={(event) => setsearchcategory(event.target.value)}
          type="text"
        ></input>
        <SearchIcon
          style={{ color: "white" }}
          onClick={() => searchBycategory(searchcategory)}
        />
      </div>
      <Container>
        <Row>
          {loading && <h1>loading...</h1>}
          {error && <h1> Something went wrong please try again</h1>}

          {products.length == 0 && !loading && !error && (
            <h1>Items not found</h1>
          )}
          {products.map((product) => (
            <Col md="6">
              <Productlist
                id={product.id}
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default Mainproducts;
