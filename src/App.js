import List from "./components/List"
function App(){
  const definitions = [
    { id:1, dt: 'one', dd: 'two' },
    { id:2,dt: 'another term', dd: 'another description'},
];
return (
  <div className="List">
    
    <List data={definitions} />
    
  </div>
)
}

export default App;
