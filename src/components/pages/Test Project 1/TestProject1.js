import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    width: 1280px;
    height: 720px;
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