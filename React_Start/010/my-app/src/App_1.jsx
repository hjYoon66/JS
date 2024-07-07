function App() {
  return (
    <div className="App">
      <Hello name="Yoon" />
    </div>
  );
}
function Hello({ name }) {
  if (name) {
    return (
      <div>
        <h1>hello {name}</h1>
      </div>
    );
  }
  return <NoName />;
}
function NoName() {
  return <h1>이름을 입력하지 않았습니다!</h1>;
}

export default App;
