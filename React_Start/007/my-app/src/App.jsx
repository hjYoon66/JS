import React, { useState } from "react";

function App(props) {
  const [like, setLike] = useState(0);
  let heart = like % 2 === 1 ? "❤" : "";

  function clickLike() {
    setLike(like + 1);
  }

  return (
    <div>
      <button onClick={clickLike}>like</button>{" "}
      <span>{heart ? heart : ""}</span>
    </div>
  );
}

export default App;
