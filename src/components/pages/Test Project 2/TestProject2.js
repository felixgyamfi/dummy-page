import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    left: 2000px;
    width: 1280px;
    height: 720px;
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