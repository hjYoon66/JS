import React from "react";
import styled,{css} from "styled-components";

const One = css`
    color: red;
`;

const Two = css`
    border: 1px solid black;
`;

const Three = styled.div`
    ${One}
    ${Two}
`


const App = () => {
    return (
        <Three>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
                corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
                aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
                Nemo, ullam.
            </p>
            </Three>
      
    );
};

export default App;
