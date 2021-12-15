import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import styled from "styled-components";
const Categ = styled.div`
  margin: 20px 0 10px 10px;
  position: sticky;
  top: 130px;
`;
const Sort = styled.div`
  margin-top: 10px;
`;
function Category({ category, sortasce }) {
  return (
    <Categ>
      <DropdownButton
        variant="info"
        id="dropdown-basic-button"
        title="Category"
      >
        <Dropdown.Item
          onClick={() => category("electronics")}
          href="#/action-1"
        >
          electronics
        </Dropdown.Item>
        <Dropdown.Item onClick={() => category("jewelery")} href="#/action-2">
          jewelery
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => category("men's clothing")}
          href="#/action-3"
        >
          men's clothing
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => category("women's clothing")}
          href="#/action-3"
        >
          women's clothing
        </Dropdown.Item>
      </DropdownButton>
      <Sort>
        <DropdownButton variant="info" id="dropdown-basic-button" title="Sort">
          <Dropdown.Item onClick={() => sortasce("a-z")} href="#/action-1">
            A-Z
          </Dropdown.Item>
          <Dropdown.Item onClick={() => sortasce("z-a")} href="#/action-2">
            Z-A
          </Dropdown.Item>
          <Dropdown.Item onClick={() => sortasce("lowest")} href="#/action-3">
            lowest price
          </Dropdown.Item>
          <Dropdown.Item onClick={() => sortasce("highest")} href="#/action-3">
            highest price
          </Dropdown.Item>
        </DropdownButton>
      </Sort>
    </Categ>
  );
}

export default Category;
