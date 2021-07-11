import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 50px;
    background-color: yellow;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
`;

export const Nav = styled.div`
    display: flex;
`;

export const NavLinks = styled.ul`
    list-style: none;
    display: flex;

    li {
        margin: 0 10px;
    }
`;

function Navigation() {
    return (
        <Wrapper>
        <Nav className="Nav"><h3>Navigation</h3>
            <NavLinks>
                <li><a to="/Test1">Test1</a></li>
                <li><a to="/Test1">Test2</a></li>
                <li><a to="/Test1">Test3</a></li>
            </NavLinks>
        </Nav>
        </Wrapper>
    );
}

export default Navigation;