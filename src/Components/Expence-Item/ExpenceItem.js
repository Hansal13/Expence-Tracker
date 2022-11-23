import "./expenceitem.css";

export default function Expence(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const deleteEvent = props.event;
  return (
    <>
      <div className="expence-wrpper">
        <h2 className="expence-item">{props.item}</h2>
        <p className="expence-price">{props.price} Rs</p>
        <p className="expence-date">
          <div>{month}</div>
          <div>{year}</div>
          <div>{day}</div>
        </p>
        {/* <button className="btn btn-primary">ADD</button> */}
        <button className="btn btn-primary">Delete</button>
      </div>
    </>
  );
}
