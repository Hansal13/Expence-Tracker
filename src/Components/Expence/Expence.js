import React from "react";

import ExpenceItem from "../Expence-Item/ExpenceItem";

export default function Expence(props) {
  let expanceDate = new Date(2021, 3, 28);
  let expances = [...props.data];
  return (
    <>
      <div className="container">
        {expances.map((x, index) => (
          <ExpenceItem
            item={x.title}
            price={x.price}
            date={expanceDate}
            key={index}
            event={props.event}
          />
        ))}
      </div>
    </>
  );
}
