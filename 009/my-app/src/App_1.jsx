function App() {
  return (
    <div className="App">
      <Hello name="Yoon" />
    </div>
  );
}
function Hello({ name }) {
  const num = [1, 2, 3, 4, 5];

  return (
    <div>
      {num.map((i) => (
        <h1 key={i}>
          안녕, {name} {i}호
        </h1>
      ))}
    </div>
  );
}

export default App;
