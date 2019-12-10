import React from "react";
import Cloth from "./Cloth";
function ClothList() {
  const clothName = ["shirts", "pants", "coats", "shoes", "gloves"];
  const clothes = [
    {
      id: 1,
      name: "shirts",
      size: "M",
      brand: "kate spade",
      material: "cotton"
    },
    {
      id: 2,
      name: "pants",
      size: "28",
      brand: "Tommy Hitefiler",
      material: "Jean"
    },
    {
      id: 3,
      name: "coats",
      size: "L",
      brand: "New York Brand",
      material: "Cashimer"
    },
    {
      id: 4,
      name: "shoes",
      size: "7",
      brand: "Luck Brand",
      material: "ledder"
    },

    {
      id: 5,
      name: "gloves",
      size: "7",
      brand: "Luck Brand",
      material: "ledder"
    }
  ];
  //list of clothList
  const list = clothes.map(cloth => <Cloth key={cloth.id} cloth2={cloth} />);

  const clothList = clothName.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ));
  return <div>{list}</div>;
}
export default ClothList;
