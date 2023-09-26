// import { Fragment } from "react";
//      if you wrap your template code in empty angle brackets
//      '<>' the functionality will be the same

function ListGroup() {
  const listItems = ["nyc", "orlando", "stl", "kansas city"];

  return (
    <>
      <h1>List:</h1>
      <ul className="list-group">
        {listItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
