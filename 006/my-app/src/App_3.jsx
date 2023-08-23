function 개인정보({ name, phone, github }) {
  return (
    <section>
      <h2>개인정보</h2>
      <p>이름 : {name}</p>
      <p>전화번호 : {phone}</p>
      <p>github : {github}</p>
    </section>
  );
}
function 자격증과학력({ title, contents }) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{contents}</p>
    </section>
  );
}
function 학력() {
  return (
    <section>
      <h2>학력</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius maxime
        incidunt modi aliquid nesciunt dolorem quasi perspiciatis non quam
        voluptate, in hic nemo repellendus, temporibus natus excepturi nulla
        sint.
      </p>
    </section>
  );
}
function 경력() {
  return (
    <section>
      <h2>경력</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius maxime
        incidunt modi aliquid nesciunt dolorem quasi perspiciatis non quam
        voluptate, in hic nemo repellendus, temporibus natus excepturi nulla
        sint.
      </p>
    </section>
  );
}
function 수상경력() {
  return (
    <section>
      <h2>수상경력</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius maxime
        incidunt modi aliquid nesciunt dolorem quasi perspiciatis non quam
        voluptate, in hic nemo repellendus, temporibus natus excepturi nulla
        sint.
      </p>
    </section>
  );
}
function App() {
  return (
    <div className="App">
      <h1>이력서</h1>
      <개인정보 name="윤형준" phone="01052930396" github="hjy66" />
      <자격증과학력 title={"자격증"} contents={"자격증 내용"} />
      <자격증과학력 title={"학력"} contents={"학력 내용"} />
      <경력 />
      <수상경력 />
    </div>
  );
}

export default App;
