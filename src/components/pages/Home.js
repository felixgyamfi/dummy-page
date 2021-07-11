import React from 'react';
import styled from 'styled-components';
import Nav from '../Nav/Nav';
import TestProject1 from './Test Project 1/TestProject1';
import TestProject2 from './Test Project 2/TestProject2';
import TestProject3 from './Test Project 3/TestProject3';

export const HomeWrapper = styled.div`

`;

function Home() {
    return (
        <div className="Home">
            <HomeWrapper>
                <Nav/>
                <h1>Home</h1>
                <TestProject1 />
                <TestProject2 />
                <TestProject3 />
            </HomeWrapper>
        </div>
    );
}

export default Home;