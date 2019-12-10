import React from "react";
function Cloth({ cloth2 }) {
  return (
    <div>
      <h2>
        This is {cloth2.name}.<br />
        <p />
        size is {cloth2.size} <br />
        this is {cloth2.brand}
        <br />
      </h2>
      <h3>
        the material is <b>{cloth2.material}</b>
      </h3>
    </div>
  );
}
// function example(person1:any){
// }
export default Cloth;
