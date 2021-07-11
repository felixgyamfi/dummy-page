import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    overflow-y: auto;
    width: 100vh;
    height: 100vw;
    top: 2000px;
    left: 6000px;
    background-color: lightgreen;
`;

function TestProject3() {
    return (
        <div className="Test3">
            <Wrapper>
            <h1>Test3</h1>
            </Wrapper>
        </div>
    )
}

export default TestProject3;