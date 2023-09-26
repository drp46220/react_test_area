// import { Fragment } from "react";
//      if you wrap your template code in empty angle brackets
//      '<>' the functionality will be the same

import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const emptyListMessage = items.length === 0 ? <p>no items</p> : null;
  //   const emptyListMessage1 = listItems.length === 0 && <p>no items</p>;
  // also useful to know                                ^
  // true && 1 = 1 --- true && "dom" = "dom" --- false && 1 = false --- false && "dom" = false

  // hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}:</h1>
      {emptyListMessage}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
