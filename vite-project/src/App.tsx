// import the files you want to use components from
import ListGroup from "./components/ListGroup";

function App() {
  const listItems = ["nyc", "orlando", "stl", "kansas city"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={listItems}
        heading={"cities"}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
