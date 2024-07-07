function App() {
  return (
    <div className="App">
      <Hello name="Yoon" />
    </div>
  );
}
function Hello({ name }) {
  if (name) {
    return <One name={name} />;
  } else {
    return <Two name={name} />;
  }
}

function One({ name }) {
  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
}

function Two({ name }) {
  return (
    <div>
      <h1>name이 입력된 것이 없습니다.</h1>
    </div>
  );
}
export default App;
