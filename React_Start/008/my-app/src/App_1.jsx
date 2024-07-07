function App() {
  function handleClickEvent() {
    console.log("click 되었음");
  }
  return (
    <div className="App">
      <h1 onClick={handleClickEvent}>테스트2</h1>
    </div>
  );
}

export default App;
