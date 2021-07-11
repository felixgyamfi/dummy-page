import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    overflow-y: auto;
    width: 100vh;
    height: 100vw;
    background-color: lightpink;
`;

function TestProject2() {
    return (
        <div className="Test2">
            <Wrapper>
            <h1>Test2</h1>
            </Wrapper>
        </div>
    )
}

export default TestProject2;