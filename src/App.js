import List from "./components/List"
function App(){
  const definitions = [
    { dt: 'one', dd: 'two', id: 1 },
    { dt: 'another term', dd: 'another description', id: 2 },
];
return (
  <div className="List">
    
    <List data={definitions} />
    
  </div>
)
}

export default App;
