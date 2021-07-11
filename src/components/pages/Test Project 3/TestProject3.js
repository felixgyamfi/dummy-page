import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    top: 500px;
    left: 1500px;
    width: 1280px;
    height: 720px;
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