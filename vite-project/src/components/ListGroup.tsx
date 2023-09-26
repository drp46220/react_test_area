// import { Fragment } from "react";
//      if you wrap your template code in empty angle brackets
//      '<>' the functionality will be the same

function ListGroup() {
  const listItems = ["nyc", "orlando", "stl", "kansas city"];
  const emptyListMessage = listItems.length === 0 ? <p>no items</p> : null;

  return (
    <>
      <h1>List:</h1>
      {emptyListMessage}
      <ul className="list-group">
        {listItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
