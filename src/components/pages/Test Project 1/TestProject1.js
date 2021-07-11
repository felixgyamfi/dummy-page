import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    overflow-y: auto;
    width: 100vh;
    height: 100vw;
    top: 1000px;
    left: 2000px;
    background-color: lightblue;
`;

function TestProject1() {
    return (
        <div className="Test1">
            <Wrapper>
            <h1>Test1</h1>
            </Wrapper>
        </div>
    )
}

export default TestProject1;