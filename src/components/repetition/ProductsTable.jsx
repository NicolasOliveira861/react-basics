import { Products } from "data/products";
import React from "react";

const ProductsTable = () => {
  return (
    <table border="1" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Ref</th>
        </tr>
      </thead>
      <tbody>
        {Products.map((product, idx) => {
          const { id, name, price } = product;

          return (
            <tr style={{ textAlign: "left" }} key={id}>
              <td>{name}</td>
              <td>{price}</td>
              <td>{id}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export { ProductsTable };
